import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Lab } from 'src/app/interfaces/Admin/pharmServices';
import { LabsService } from 'src/app/services/Admin/labs.service';

@Component( {
  selector: 'app-edit-lab',
  templateUrl: './edit-lab.component.html',
  styleUrls: ['./edit-lab.component.css']
} )
export class EditLabComponent {

  constructor( private lab_service: LabsService, private router: Router, private activeRouter: ActivatedRoute ) { }
  responseMsg: any;
  labs!: Lab;
  labId = '';
  valid: boolean = false;
  selectedPhoto: Blob | undefined;

  onPhotoSelected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto = file;
    }
  }


  // send updating data
  onsubmit( data: Lab ) {
    const formData = new FormData();
    if ( this.selectedPhoto != undefined ) {
      formData.append( 'photo', this.selectedPhoto as Blob );
    }
    formData.append( 'name', data.name );
    formData.append( 'type_of_medical_analyses', data.type_of_medical_analyses );
    formData.append( 'appointment', data.appointment );
    formData.append( 'time', data.time );
    formData.append( 'city', data.city );
    formData.append( 'residential_area', data.residential_area );
    formData.append( 'street', data.street );
    formData.append( 'phone', data.phone );
    this.lab_service.postUpdateLab( formData, this.labId ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message = 'Updated Successfully' ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

  getOneLab() {
    this.lab_service.getOneLab( this.labId ).subscribe( ( data: any ) => {
      this.labs = data;

    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }


  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.labId = params.get( 'id' )!;
    } );
    this.getOneLab();

  }

}
