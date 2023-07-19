import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser, NewUserStats } from 'src/app/interfaces/Owner/newUser';
import { NewUserService } from 'src/app/services/Owner/newUser.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent {

  constructor( private NewUser_Service: NewUserService, private router: Router ) { }
  NewUserStats!: NewUserStats;
  NewUserAll: NewUser[] = [];
  NewUserYear: NewUser[] = [];
  NewUserMonth: NewUser[] = [];
  NewUserDay: NewUser[] = [];


  getNewUserStats() {
    this.NewUser_Service.showNewUserStats().subscribe( ( data: any ) => {
      this.NewUserStats = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getNewUserAll() {
    this.NewUser_Service.showNewUserAll().subscribe( ( data: any ) => {
      this.NewUserAll = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getNewUserYear() {
    this.NewUser_Service.showNewUserYear().subscribe( ( data: any ) => {
      this.NewUserYear = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getNewUserMonth() {
    this.NewUser_Service.showNewUserMonth().subscribe( ( data: any ) => {
      this.NewUserMonth = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getNewUserDay() {
    this.NewUser_Service.showNewUserDay().subscribe( ( data: any ) => {
      this.NewUserDay = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }

  ngOnInit(): void {
    this.getNewUserStats();
    this.getNewUserAll();
    this.getNewUserYear();
    this.getNewUserMonth();
    this.getNewUserDay();
  }

  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;


  // show div of all NewUser
  showNewUserAll() {
    this.showAll = true;
    this.showToday = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of NewUser add in today
  showNewUserToday() {
    this.showToday = true;
    this.showAll = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of NewUser add in month
  showNewUserMonth() {
    this.showMonth = true;
    this.showAll = false;
    this.showToday = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of NewUser add in year
  showNewUserYear() {
    this.showYear = true;
    this.showAll = false;
    this.showToday = false;
    this.showMonth = false;
    this.showBack = true;
  }

}
