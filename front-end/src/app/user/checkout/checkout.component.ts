import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/interfaces/User';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
} )
export class CheckoutComponent {

  user: any = [];
  responseMsg: any;
  valid: boolean = false;

  constructor( private userService: UserService, private router: Router ) { }

  onsubmit( data: any ) {
    this.userService.postCheckoutData( data ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.success ) {
        this.valid = true;
        setTimeout( () => {
          this.valid = false;
          this.router.navigate( ['/user'] );
        }, 1500 );
      }
    } );
  }

  getUser() {
    this.userService.getUser().subscribe( ( data ) => {
      this.user = data;
    } );
  }

  ngOnInit() {
    this.getUser();
  }

}
