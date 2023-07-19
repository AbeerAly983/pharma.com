import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { news, numberOfNews } from 'src/app/interfaces/Owner/news';
import { NewsService } from 'src/app/services/Owner/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  constructor( private service: NewsService, private router: Router ) { }
  newsStats!: numberOfNews;
  newsAll: news[] = [];
  newsYear: news[] = [];
  newsMonth: news[] = [];
  newsDay: news[] = [];


  getNewsStats() {
    this.service.getTotalNumbersOfNews().subscribe( ( data: any ) => {
      this.newsStats = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getNewsAll() {
    this.service.getAllNews().subscribe( ( data: any ) => {
      this.newsAll = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }
  getNewsYear() {
    this.service.getAllNewsYear().subscribe( ( data: any ) => {
      this.newsYear = data;
    }  , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getNewsMonth() {
    this.service.getAllNewsMonth().subscribe( ( data: any ) => {
      this.newsMonth = data;
    }  , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    })
  }
  getNewsDay() {
    this.service.getAllNewsToday().subscribe( ( data: any ) => {
      this.newsDay = data;
    } , ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } )
  }

  ngOnInit(): void {
    this.getNewsStats();
    this.getNewsAll();
    this.getNewsYear();
    this.getNewsMonth();
    this.getNewsDay();
  }

  showAll: boolean = false;
  showToday: boolean = false;
  showMonth: boolean = false;
  showYear: boolean = false;
  showBack: boolean = false;


  // show div of all Users
  showUsersAll() {
    this.showAll = true;
    this.showToday = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Users add in today
  showUsersToday() {
    this.showToday = true;
    this.showAll = false;
    this.showMonth = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Users add in month
  showUsersMonth() {
    this.showMonth = true;
    this.showAll = false;
    this.showToday = false;
    this.showYear = false;
    this.showBack = true;
  }

  // show div of Users add in year
  showUsersYear() {
    this.showYear = true;
    this.showAll = false;
    this.showToday = false;
    this.showMonth = false;
    this.showBack = true;
  }

}
