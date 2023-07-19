import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { News, anothrerNews } from 'src/app/interfaces/Admin/news';
import { NewsService } from 'src/app/services/Admin/news.service';

@Component( {
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
} )
export class AddNewsComponent {

  constructor( private service: NewsService, private router: Router ) { }

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
  onsubmit( data: anothrerNews ) {
    data.photo = this.selectedPhoto as Blob;
    const formData = new FormData();
    formData.append( 'title', data.title );
    formData.append( 'description', data.description );
    formData.append( 'photo', this.selectedPhoto as Blob );

    this.service.addNews( formData ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'Add Successfully' ) {
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
