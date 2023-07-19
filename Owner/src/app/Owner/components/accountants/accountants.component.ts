import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Accountant, AccountantStats } from 'src/app/interfaces/Owner/accountant';
import { AccountantService } from 'src/app/services/Owner/accountant.service';

@Component( {
  selector: 'app-accountants',
  templateUrl: './accountants.component.html',
  styleUrls: ['./accountants.component.css']
} )
export class AccountantsComponent {
  constructor( private Accountant_Service: AccountantService, private router: Router ) { }
  accountantStats!: AccountantStats;
  accountantAll: Accountant[] = [];
  accountantYear: Accountant[] = [];
  accountantMonth: Accountant[] = [];
  accountantDay: Accountant[] = [];

  getAccountantStats() {
    this.Accountant_Service.showAccountantStats().subscribe( ( data: any ) => {
      this.accountantStats = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAccountantAll() {
    this.Accountant_Service.showAccountantAll().subscribe( ( data: any ) => {
      this.accountantAll = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getAccountantYear() {
    this.Accountant_Service.showAccountantYear().subscribe( ( data: any ) => {
      this.accountantYear = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getAccountantMonth() {
    this.Accountant_Service.showAccountantMonth().subscribe( ( data: any ) => {
      this.accountantMonth = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getAccountantDay() {
    this.Accountant_Service.showAccountantDay().subscribe( ( data: any ) => {
      this.accountantDay = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }

  ngOnInit(): void {
    this.getAccountantStats();
    this.getAccountantAll();
    this.getAccountantYear();
    this.getAccountantMonth();
    this.getAccountantDay();
  }


  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;


  // show div of all accountants
  showAccountantAll() {
    this.showAll = true;
    this.showToday = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of accountants add in today
  showAccountantToday() {
    this.showToday = true;
    this.showAll = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of accountants add in month
  showAccountantMonth() {
    this.showMonth = true;
    this.showAll = false;
    this.showToday = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of accountants add in year
  showAccountantYear() {
    this.showYear = true;
    this.showAll = false;
    this.showToday = false;
    this.showMonth = false;
    this.showBack = true;
  }
}
