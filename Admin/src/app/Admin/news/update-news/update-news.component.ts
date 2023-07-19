import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { News, anothrerNews } from 'src/app/interfaces/Admin/news';
import { NewsService } from 'src/app/services/Admin/news.service';

@Component( {
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css', "../add-news/add-news.component.css"]
} )
export class UpdateNewsComponent {

  responseMsg: any;
  news!: News;
  newsId = '';
  valid: boolean = false;
  selectedPhoto: Blob | undefined;

  constructor( private service: NewsService, private router: Router, private activeRouter: ActivatedRoute ) {
    this.activeRouter.paramMap.subscribe( ( params: ParamMap ) => {
      this.newsId = params.get( 'id' )!;
    } );
  }
  ngOnInit(): void {

    this.getOneNews();

  }

  onPhotoSelected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto = file;
    }
  }


  // send updating data
  onsubmit( data: anothrerNews ) {
    const formData = new FormData();
    if ( this.selectedPhoto != undefined ) {
      formData.append( 'photo', this.selectedPhoto as Blob );
    }
    formData.append( 'title', data.title );
    formData.append( 'description', data.description );
    this.service.updateNews( formData, this.newsId ).subscribe( ( data ) => {
      this.responseMsg = data;
      console.log( data );
      if ( this.responseMsg.message == 'Update Successfully' ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
      }

    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }

  getOneNews() {
    this.service.getNewsById( this.newsId ).subscribe( ( data: any ) => {
      this.news = data;
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

}
