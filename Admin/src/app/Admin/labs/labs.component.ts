import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lab } from 'src/app/interfaces/Admin/pharmServices';
import { LabsService } from 'src/app/services/Admin/labs.service';

@Component( {
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css', '../doctors/doctors.component.css']
} )
export class LabsComponent {
  responseMsg: any;
  labs: Lab[] = [];
  valid: boolean = false;
  idCheckAlert: number | undefined;

  constructor( private router: Router, private lab_service: LabsService ) { }

  getAllLabs() {
    this.labs = [];
    this.lab_service.getLabs().subscribe( ( data: any ) => {
      this.labs = data;
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

  deleteLab( doctorId: number ) {

    this.lab_service.deleteLab( doctorId ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'Deleted Successfully' ) {
        this.valid = false;
        this.getAllLabs();
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }


  ngOnInit(): void {
    this.getAllLabs();
  }
}
