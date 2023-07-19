import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LiveSession } from 'src/app/interfaces/Admin/live-session';
import { LiveSessionService } from 'src/app/services/Admin/live-session.service';

@Component({
  selector: 'app-add-live-session',
  templateUrl: './add-live-session.component.html',
  styleUrls: ['./add-live-session.component.css']
})
export class AddLiveSessionComponent {

  constructor( private service: LiveSessionService, private router: Router ) { }

  responseMsg: any;
  valid: boolean = false;



  // send updating data
  onsubmit( data: LiveSession ) {
    const formData = new FormData();
    formData.append( 'url', data.url );
    formData.append( 'title', data.title );
    formData.append( 'description', data.description );
    formData.append( 'date', data.date );
    formData.append( 'time', data.time );
    this.service.addSession( formData ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'Add successfully' ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
        this.clearData();
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

  clearData() {
    let Inputs = document.querySelectorAll<HTMLInputElement>( ".input" );
    for ( let index = 0; index < Inputs.length; index++ ) {
      Inputs[0].focus();
      Inputs[index].value = "";
    }
  }
}

