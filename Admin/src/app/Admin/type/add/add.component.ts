import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from 'src/app/interfaces/Admin/product_type';
import { TypeService } from 'src/app/services/Admin/type.service';


@Component( {
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
} )
export class AddComponent {

  responseMsg: any;
  valid: boolean = false;
  invalid: boolean = false;
  selectedPhoto: Blob | undefined;

  constructor( private service: TypeService, private router: Router ) { }


  onPhotoSelected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto = file;
    }
  }


  // send updating data
  onsubmit( data: Type ) {
    const formData = new FormData();
    formData.append( 'type', data.type );
    formData.append( 'photo', this.selectedPhoto as Blob );
    this.service.addCategory( formData ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.success == true ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
        this.clearData();
      }
      else if ( this.responseMsg.message == "The type has already been taken" ) {
        this.invalid = true;
        setTimeout( () => { this.invalid = false; }, 2000 );
      }
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }


  clearData() {
    let Inputs = document.querySelectorAll<HTMLInputElement>( ".mb-3 input" );
    for ( let index = 0; index < Inputs.length; index++ ) {
      Inputs[0].focus();
      Inputs[index].value = "";
    }
  }

}
