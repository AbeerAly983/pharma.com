import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/interfaces/Admin/announce';
import { AnnouncementService } from 'src/app/services/Admin/announcement.service';

@Component( {
  selector: 'app-add-announce',
  templateUrl: './add-announce.component.html',
  styleUrls: ['./add-announce.component.css']
} )
export class AddAnnounceComponent {

  constructor( private announce_service: AnnouncementService, private router: Router ) { }

  responseMsg: any;
  valid: boolean = false;
  selectedPhoto: Blob | undefined;

  onPhotoSelected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto = file;
    }
  }


  // send updating data
  onsubmit( data: Announcement ) {
    const formData = new FormData();
    formData.append( 'head', data.head );
    formData.append( 'details', data.details );
    formData.append( 'photo', this.selectedPhoto as Blob );
    this.announce_service.addAnnounce( formData ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == true ) {
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
    let Inputs = document.querySelectorAll<HTMLInputElement>( ".mb-3 input" );
    for ( let index = 0; index < Inputs.length; index++ ) {
      Inputs[0].focus();
      Inputs[index].value = "";
    }
  }
}
