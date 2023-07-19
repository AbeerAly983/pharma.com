import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Accountant } from 'src/app/interfaces/Admin/accountant';
import { AccountantService } from 'src/app/services/Admin/accountant.service';

@Component( {
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
} )
export class AccountantComponent {
  accountants: Accountant[] = [];
  valid: boolean = false;
  responseMsg: any;

  constructor( private router: Router, private accountant_service: AccountantService ) { }

  getAllAccountant() {
    this.accountants = [];
    this.accountant_service.showAccountants().subscribe( ( data: any ) => {
      this.accountants = data;
    } );
  }

  ngOnInit(): void {
    this.getAllAccountant();
  }

  enable( id: number ) {
    this.accountant_service.enableAccountant(id).subscribe( ( data ) => {
      this.responseMsg = data
      console.log( this.responseMsg )
      if ( this.responseMsg.success == true ) {
      }
      this.getAllAccountant();
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } )
  }

  disable( id: number ) {
    this.accountant_service.disableAccountant( id ).subscribe( ( data ) => {
      this.responseMsg = data
      console.log( this.responseMsg )
      if ( this.responseMsg.success == true ) {

      }
      this.getAllAccountant();
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } )
  }

}
