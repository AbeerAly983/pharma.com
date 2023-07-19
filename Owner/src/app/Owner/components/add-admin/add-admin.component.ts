import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/User';
import { Admin } from 'src/app/interfaces/Owner/admin';
import { AdminService } from 'src/app/services/Owner/admin.service';

@Component( {
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
} )
export class AddAdminComponent {
  constructor( private AdminService: AdminService, private router: Router ) { }

  responseMsg: any;
  valid: boolean = false;
  inValid: boolean = false;
  showTable: boolean = true;
  showForm: boolean = false;
  userModel = new User( "", "", "", "", "" );
  Admins: Admin[] = [];


  // send updating data
  onsubmit( data: Admin ) {
    this.AdminService.addAdmin( data ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'added new admin' ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
        this.clearData();
      }
    }, ( errors ) => {

      if ( errors.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
      else if ( errors.error.email == 'The email has already been taken.' ) {
        this.inValid = true;
        setTimeout( () => { this.inValid = false; }, 2000 );
      }
    }
    );
  }

  clearData() {
    let Inputs = document.querySelectorAll<HTMLInputElement>( ".mb-3 input" );
    for ( let index = 0; index < Inputs.length; index++ ) {
      Inputs[0].focus();
      Inputs[index].value = "";
    }
  }


  // show & hide password
  showPassword = false;
  showRepeatPassword = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  toggleShowRepeatPassword() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }


  getAllAdmins() {
    this.Admins = [];
    this.AdminService.showAdmins().subscribe( ( data: any ) => {
      this.Admins = data;
    }
    ,
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }


  enable( id: number ) {
    this.AdminService.enableAdmin( id).subscribe( ( data ) => {
      this.responseMsg = data
      if ( this.responseMsg.success == true ) {
      }
      this.getAllAdmins();
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } )
  }

  disable( id: number ) {
    this.AdminService.disableAdmin( id ).subscribe( ( data ) => {
      this.responseMsg = data
      if ( this.responseMsg.success == true ) {

      }
      this.getAllAdmins();
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } )
  }

  showDivAdmins() {
    this.showTable = !this.showTable;
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {
    this.getAllAdmins();
  }
}
