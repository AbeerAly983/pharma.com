import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LiveSession } from 'src/app/interfaces/Admin/live-session';
import { LiveSessionService } from 'src/app/services/Admin/live-session.service';

@Component({
  selector: 'app-live-session',
  templateUrl: './live-session.component.html',
  styleUrls: ['./live-session.component.css']
})
export class LiveSessionComponent {
  session: LiveSession[]= [];
  valid: boolean = false;
  responseMsg: any;

  constructor( private router: Router, private service: LiveSessionService ) { }

  getLiveSession() {
    this.service.getSession().subscribe( ( data: any ) => {
      this.session = data;
    } );
  }

  ngOnInit(): void {
    this.getLiveSession();
  }

  enable( id: number ) {
    this.service.enableSession( id ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.success == true ) {
      }
      this.getLiveSession();
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } )
  }

  disable( id: number ) {
    this.service.disableSession( id ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.success == true ) {

      }
      this.getLiveSession();
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } )
  }

}
