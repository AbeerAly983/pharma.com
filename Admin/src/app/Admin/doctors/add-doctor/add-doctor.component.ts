import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor, Res } from 'src/app/interfaces/Admin/pharmServices';
import { DoctorsService } from 'src/app/services/Admin/doctors.service';

@Component( {
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
} )
export class AddDoctorComponent {

  constructor( private doctor_service: DoctorsService, private router: Router ) { }
  responseMsg: Res | undefined;
  valid: boolean = false;
  selectedPhoto: Blob | undefined;

  onPhotoSelected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto = file;
    }
  }


  onsubmit( data: Doctor ) {
    const formData = new FormData();
    formData.append( 'name', data.name );
    formData.append( 'specialize', data.specialize );
    formData.append( 'appointment', data.appointment );
    formData.append( 'time', data.time );
    formData.append( 'city', data.city );
    formData.append( 'residential_area', data.residential_area );
    formData.append( 'street', data.street );
    formData.append( 'phone', data.phone );
    formData.append( 'photo', this.selectedPhoto as Blob );
    this.doctor_service.addDoctor( formData ).subscribe(
      ( data: any ) => {
        this.responseMsg = data;
        if ( this.responseMsg?.message == 'Add successfully' ) {
          this.valid = true;
          setTimeout( () => { this.valid = false; }, 2000 );
          this.clearData();
        }
      },
      ( error ) => {
        if ( error.status === 401 ) {
          this.router.navigate( ['/login'] );
        }
      }
    );
  }

  clearData() {
    let Inputs = document.querySelectorAll<HTMLInputElement>( ".mb-3 input" );
    for ( let index = 0; index < Inputs.length; index++ ) {
      Inputs[0].focus();
      Inputs[index].value = "";
    }
  }

}
