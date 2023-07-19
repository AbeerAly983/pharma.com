import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin, AdminStats } from 'src/app/interfaces/Owner/admin';
import { AdminService } from 'src/app/services/Owner/admin.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent {
  constructor( private Admin_Service: AdminService, private router: Router ) { }
  AdminStats!: AdminStats;
  AdminAll: Admin[] = [];
  AdminYear: Admin[] = [];
  AdminMonth: Admin[] = [];
  AdminDay: Admin[] = [];


  getAdminStats() {
    this.Admin_Service.showAdminStats().subscribe( ( data: any ) => {
      this.AdminStats = data;

    }  , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAdminAll() {
    this.Admin_Service.showAdminAll().subscribe( ( data: any ) => {
      this.AdminAll = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getAdminYear() {
    this.Admin_Service.showAdminYear().subscribe( ( data: any ) => {
      this.AdminYear = data;
    }  , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAdminMonth() {
    this.Admin_Service.showAdminMonth().subscribe( ( data: any ) => {
      this.AdminMonth = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getAdminDay() {
    this.Admin_Service.showAdminDay().subscribe( ( data: any ) => {
      this.AdminDay = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }

  ngOnInit(): void {
    this.getAdminStats();
    this.getAdminAll();
    this.getAdminYear();
    this.getAdminMonth();
    this.getAdminDay();
  }

  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;


  // show div of all Admins
  showAdminAll() {
    this.showAll = true;
    this.showToday = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Admins add in today
  showAdminToday() {
    this.showToday = true;
    this.showAll = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Admins add in month
  showAdminMonth() {
    this.showMonth = true;
    this.showAll = false;
    this.showToday = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Admins add in year
  showAdminYear() {
    this.showYear = true;
    this.showAll = false;
    this.showToday = false;
    this.showMonth = false;
    this.showBack = true;
  }

}
