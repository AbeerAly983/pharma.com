import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from 'src/app/interfaces/Admin/product_type';
import { TypeService } from 'src/app/services/Admin/type.service';

@Component( {
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
} )
export class EditComponent implements OnInit {

  valid: boolean = false;
  type!: Type;
  id: number;
  responseMsg: any;
  selectedPhoto: Blob | undefined;

  constructor( private service: TypeService, private router: Router, private route: ActivatedRoute ) {
    const idParam = this.route.snapshot.paramMap.get( 'id' );
    this.id = idParam ? Number( idParam ) : 0; // Use a default value of 0 if the id parameter is not present
  }

  ngOnInit(): void {
    this.getCategoryById();
  }

  onPhotoSelected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto = file;
    }
  }


  getCategoryById() {
    this.service.getCategoryById( this.id ).subscribe( ( result: any ) => {
      this.type = result
    } )
  }

  // send updating data
  onsubmit( data: Type ) {
    const formData = new FormData();
    if (this.selectedPhoto != undefined) {
      formData.append( 'photo',this.selectedPhoto as Blob );
    }
    formData.append( 'type', data.type );
    this.service.editCategory( this.id, formData ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'type updated' ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      }
    );
  }

}
