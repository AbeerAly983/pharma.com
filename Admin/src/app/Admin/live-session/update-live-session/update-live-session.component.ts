import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LiveSession } from 'src/app/interfaces/Admin/live-session';
import { LiveSessionService } from 'src/app/services/Admin/live-session.service';

@Component({
  selector: 'app-update-live-session',
  templateUrl: './update-live-session.component.html',
  styleUrls: ['./update-live-session.component.css']
})
export class UpdateLiveSessionComponent {

  responseMsg: any;
  session!:LiveSession;
  sessionId = '';
  valid: boolean = false;

  constructor( private service: LiveSessionService, private router: Router, private activeRouter: ActivatedRoute ) {
    this.activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.sessionId = params.get( 'id' )!;
    } );
  }
  ngOnInit(): void {

    this.getOneSession();

  }




  // send updating data
  onsubmit( data: LiveSession ) {
    const formData = new FormData();
    formData.append( 'url', data.url );
    formData.append( 'title', data.title );
    formData.append( 'description', data.description );
    formData.append( 'date', data.date );
    formData.append( 'time', data.time );
    this.service.updateSession( data, this.sessionId ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'Updated Successfully' ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
      }

    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

  getOneSession() {
    this.service.getSessionById( this.sessionId ).subscribe( ( data: any ) => {
      this.session = data;
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
