import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
} )
export class ContactComponent {

  responseMsg: any;
  valid: boolean = false;

  constructor( private userService: UserService ) {

  }


  sendFeedback() {
    let feedback = document.querySelector( ".feedback" ) as HTMLInputElement | null;
    this.userService.postFeedback( { 'contents': feedback?.value } ).subscribe( ( result ) => {
      this.responseMsg = result;

      if ( this.responseMsg.message == "Add successfully" ) {
        this.valid = true;
        setTimeout( () => {
          this.valid = false;
        }, 2000 );
      }

    } );

  }

  ngOnInt() {

    this.sendFeedback();

  }
}
