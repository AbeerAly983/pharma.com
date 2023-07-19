import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Doctor, Res } from 'src/app/interfaces/Admin/pharmServices';
import { DoctorsService } from 'src/app/services/Admin/doctors.service';

@Component( {
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
} )
export class EditDoctorComponent {

  constructor( private doctor_service: DoctorsService, private router: Router, private activeRouter: ActivatedRoute ) { }
  responseMsg!: Res;
  doctors!: Doctor;
  doctorId = '';
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
  onsubmit( data: Doctor ) {
    const formData = new FormData();
    if (this.selectedPhoto != undefined) {
      formData.append( 'photo',this.selectedPhoto as Blob );
    }
    formData.append( 'name', data.name );
    formData.append( 'specialize', data.specialize );
    formData.append( 'appointment', data.appointment );
    formData.append( 'time', data.time );
    formData.append( 'city', data.city );
    formData.append( 'residential_area', data.residential_area );
    formData.append( 'street', data.street );
    formData.append( 'phone', data.phone );

    this.doctor_service.postUpdateDoctor( formData, this.doctorId ).subscribe( ( data: any ) => {
      this.responseMsg = data;
      if ( this.responseMsg?.message == 'Update Successfully' ) {
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

  getOneDoctor() {
    this.doctor_service.getOneDoctor( this.doctorId ).subscribe( ( data: any ) => {
      this.doctors = data;

    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }



  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.doctorId = params.get( 'id' )!;
    } );
    this.getOneDoctor();

  }

}
