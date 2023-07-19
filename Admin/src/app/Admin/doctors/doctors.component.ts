import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/interfaces/Admin/pharmServices';
import { DoctorsService } from 'src/app/services/Admin/doctors.service';

@Component( {
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
} )
export class DoctorsComponent {
  responseMsg: any;
  doctors: Doctor[] = []
  valid: boolean = false;
  idCheckAlert: number | undefined;

  constructor( private router: Router, private doctor_service: DoctorsService ) { }

  getAllDoctors() {
    this.doctors = [];
    this.doctor_service.getDoctors().subscribe( ( data: any ) => {
      this.doctors = data;
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

  deleteDoctor( doctorId: number ) {
    this.doctor_service.deleteDoctor( doctorId ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'Delete Successfully' ) {
        this.valid = false;
        this.getAllDoctors();
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

  ngOnInit(): void {
    this.getAllDoctors();
  }
}
