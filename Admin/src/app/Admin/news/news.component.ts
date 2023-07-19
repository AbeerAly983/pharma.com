import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/interfaces/Admin/news';
import { NewsService } from 'src/app/services/Admin/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  responseMsg: any;
  news: News[] = []
  valid: boolean = false;
  idCheckAlert: number | undefined;

  constructor( private router: Router, private service: NewsService ) { }
  ngOnInit(): void {
    this.getAllNews();
  }
  getAllNews() {
    this.news = [];
    this.service.getNews().subscribe( ( data: any ) => {
      this.news = data;
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }

  deleteNews( newsId: number ) {
    this.service.deleteNews( newsId ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.message == 'Delete Successfully' ) {
        this.valid = false;
        this.getAllNews();
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      } );
  }


}
