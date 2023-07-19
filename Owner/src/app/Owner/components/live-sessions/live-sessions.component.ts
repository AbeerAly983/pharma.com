import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Livesession, numberOfLivesession } from 'src/app/interfaces/Owner/livesession';
import { LivesessionService } from 'src/app/services/Owner/livesession.service';

@Component({
  selector: 'app-live-sessions',
  templateUrl: './live-sessions.component.html',
  styleUrls: ['./live-sessions.component.css']
})
export class LiveSessionsComponent {
  constructor( private service: LivesessionService, private router: Router ) { }
  sessionStats!: numberOfLivesession;
  sessionAll: Livesession[] = [];
  sessionYear: Livesession[] = [];
  sessionMonth: Livesession[] = [];
  sessionDay: Livesession[] = [];


  getSessionStats() {
    this.service.getTotalNumbersOfSessions().subscribe( ( data: any ) => {
      this.sessionStats = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getSessionAll() {
    this.service.getAllSessions().subscribe( ( data: any ) => {
      this.sessionAll = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getSessionYear() {
    this.service.getAllSessionsYear().subscribe( ( data: any ) => {
      this.sessionYear = data;
    }  , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getSessionMonth() {
    this.service.getAllSessionsMonth().subscribe( ( data: any ) => {
      this.sessionMonth = data;
    }  , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getSessionDay() {
    this.service.getAllSessionsToday().subscribe( ( data: any ) => {
      this.sessionDay = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }

  ngOnInit(): void {
    this.getSessionStats();
    this.getSessionAll();
    this.getSessionYear();
    this.getSessionMonth();
    this.getSessionDay();
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
