import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lab, LabStats } from 'src/app/interfaces/Owner/lab';
import { LabService } from 'src/app/services/Owner/lab.service';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.css']
})
export class LaboratoriesComponent {
  constructor( private Lab_Service: LabService, private router: Router ) { }
  LabStats!: LabStats;
  LabAll: Lab[] = [];
  LabYear: Lab[] = [];
  LabMonth: Lab[] = [];
  LabDay: Lab[] = [];

  getLabStats() {
    this.Lab_Service.showLabStats().subscribe( ( data: any ) => {
      this.LabStats = data;

    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getLabAll() {
    this.Lab_Service.showLabAll().subscribe( ( data: any ) => {
      this.LabAll = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getLabYear() {
    this.Lab_Service.showLabYear().subscribe( ( data: any ) => {
      this.LabYear = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getLabMonth() {
    this.Lab_Service.showLabMonth().subscribe( ( data: any ) => {
      this.LabMonth = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getLabDay() {
    this.Lab_Service.showLabDay().subscribe( ( data: any ) => {
      this.LabDay = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }

  ngOnInit(): void {
    this.getLabStats();
    this.getLabAll();
    this.getLabYear();
    this.getLabMonth();
    this.getLabDay();
  }

  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;


  // show div of all Lab
  showLabAll() {
    this.showAll = true;
    this.showToday = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Lab add in today
  showLabToday() {
    this.showToday = true;
    this.showAll = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Lab add in month
  showLabMonth() {
    this.showMonth = true;
    this.showAll = false;
    this.showToday = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Lab add in year
  showLabYear() {
    this.showYear = true;
    this.showAll = false;
    this.showToday = false;
    this.showMonth = false;
    this.showBack = true;
  }

}
