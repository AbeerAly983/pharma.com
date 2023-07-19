import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lab } from 'src/app/interfaces/Admin/pharmServices';
import { LabsService } from 'src/app/services/Admin/labs.service';

@Component( {
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrls: ['./add-lab.component.css']
} )
export class AddLabComponent {

  constructor( private lab_service: LabsService, private router: Router ) { }

  responseMsg: any;
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
    formData.append( 'name', data.name );
    formData.append( 'type_of_medical_analyses', data.type_of_medical_analyses );
    formData.append( 'appointment', data.appointment );
    formData.append( 'time', data.time );
    formData.append( 'city', data.city );
    formData.append( 'residential_area', data.residential_area );
    formData.append( 'street', data.street );
    formData.append( 'phone', data.phone );
    formData.append( 'photo', this.selectedPhoto as Blob );
    this.lab_service.addLab( formData ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'Add successfully' ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
        this.clearData();
      }

    },
      ( error ) => {
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
