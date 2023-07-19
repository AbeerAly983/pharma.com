import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserStats } from 'src/app/interfaces/Owner/user';
import { UserService } from 'src/app/services/Owner/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor( private User_Service: UserService, private router: Router ) { }
  UserStats!: UserStats;
  UserAll: User[] = [];
  UserYear: User[] = [];
  UserMonth: User[] = [];
  UserDay: User[] = [];


  getUserStats() {
    this.User_Service.showUserStats().subscribe( ( data: any ) => {
      this.UserStats = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getUserAll() {
    this.User_Service.showUserAll().subscribe( ( data: any ) => {
      this.UserAll = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getUserYear() {
    this.User_Service.showUserYear().subscribe( ( data: any ) => {
      this.UserYear = data;
    }  , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getUserMonth() {
    this.User_Service.showUserMonth().subscribe( ( data: any ) => {
      this.UserMonth = data;
    }  , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getUserDay() {
    this.User_Service.showUserDay().subscribe( ( data: any ) => {
      this.UserDay = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }

  ngOnInit(): void {
    this.getUserStats();
    this.getUserAll();
    this.getUserYear();
    this.getUserMonth();
    this.getUserDay();
  }

  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;


  // show div of all Users
  showUsersAll() {
    this.showAll = true;
    this.showToday = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Users add in today
  showUsersToday() {
    this.showToday = true;
    this.showAll = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Users add in month
  showUsersMonth() {
    this.showMonth = true;
    this.showAll = false;
    this.showToday = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Users add in year
  showUsersYear() {
    this.showYear = true;
    this.showAll = false;
    this.showToday = false;
    this.showMonth = false;
    this.showBack = true;
  }

}
