import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Announcement } from 'src/app/interfaces/Admin/announce';
import { AnnouncementService } from 'src/app/services/Admin/announcement.service';

@Component( {
  selector: 'app-edit-announce',
  templateUrl: './edit-announce.component.html',
  styleUrls: ['./edit-announce.component.css', '../add-announce/add-announce.component.css']
} )
export class EditAnnounceComponent {

  constructor( private announce_service: AnnouncementService, private router: Router, private activeRouter: ActivatedRoute ) { }

  responseMsg: any;
  announces!: Announcement;
  announceId = '';
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
    if ( this.selectedPhoto == undefined ) {
      this.selectedPhoto = new File( [''], this.announces.photo as unknown as string);
      formData.append( 'photo', this.selectedPhoto);
    }

    formData.append( 'head', data.head );
    formData.append( 'details', data.details );
    formData.append( 'photo',this.selectedPhoto as Blob );
    this.announce_service.postUpdateAnnounce( formData, this.announceId ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == true ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
      }

    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

  getOneAnnounce() {
    this.announce_service.getOneAnnounce( this.announceId ).subscribe( ( data: any ) => {
      this.announces = data;
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }


  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.announceId = params.get( 'id' )!;
    } );
    this.getOneAnnounce();

  }

}
