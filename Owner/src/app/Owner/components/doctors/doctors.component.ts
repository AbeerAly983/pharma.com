import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor, DoctorStats } from 'src/app/interfaces/Owner/doctor';
import { DoctorService } from 'src/app/services/Owner/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  constructor( private Doctor_Service: DoctorService, private router: Router ) { }
  DoctorStats!: DoctorStats;
  DoctorAll: Doctor[] = [];
  DoctorYear: Doctor[] = [];
  DoctorMonth: Doctor[] = [];
  DoctorDay: Doctor[] = [];

  getDoctorStats() {
    this.Doctor_Service.showDoctorStats().subscribe( ( data: any ) => {
      this.DoctorStats = data;

    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getDoctorAll() {
    this.Doctor_Service.showDoctorAll().subscribe( ( data: any ) => {
      this.DoctorAll = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getDoctorYear() {
    this.Doctor_Service.showDoctorYear().subscribe( ( data: any ) => {
      this.DoctorYear = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getDoctorMonth() {
    this.Doctor_Service.showDoctorMonth().subscribe( ( data: any ) => {
      this.DoctorMonth = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getDoctorDay() {
    this.Doctor_Service.showDoctorDay().subscribe( ( data: any ) => {
      this.DoctorDay = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }

  ngOnInit(): void {
    this.getDoctorStats();
    this.getDoctorAll();
    this.getDoctorYear();
    this.getDoctorMonth();
    this.getDoctorDay();
  }

  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;


  // show div of all Doctor
  showDoctorAll() {
    this.showAll = true;
    this.showToday = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Doctor add in today
  showDoctorToday() {
    this.showToday = true;
    this.showAll = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Doctor add in month
  showDoctorMonth() {
    this.showMonth = true;
    this.showAll = false;
    this.showToday = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Doctor add in year
  showDoctorYear() {
    this.showYear = true;
    this.showAll = false;
    this.showToday = false;
    this.showMonth = false;
    this.showBack = true;
  }
}
