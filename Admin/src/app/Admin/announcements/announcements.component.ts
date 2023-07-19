import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/interfaces/Admin/announce';
import { AnnouncementService } from 'src/app/services/Admin/announcement.service';
@Component( {
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
} )
export class AnnouncementsComponent {
  responseMsg: any;
  announcements: Announcement[] = []
  valid: boolean = false;
  idCheckAlert: number | undefined;

  constructor( private router: Router, private announce_service: AnnouncementService ) { }

  getAllAnnounce() {
    this.announcements = [];
    this.announce_service.getAnnounce().subscribe( ( data: any ) => {
      this.announcements = data;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

  deleteAnnounce( announceId: number ) {
    this.announce_service.deleteAnnounce( announceId ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == "deleted" ) {
        this.valid = false;
        this.getAllAnnounce();
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }
  ngOnInit(): void {

    this.getAllAnnounce();
  }
}
