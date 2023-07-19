
import { Component, OnInit } from '@angular/core';
import { PharmacyServices } from 'src/app/services/pharmacy-services';
import { PharmacyNews } from 'src/app/interfaces/pharmacy-news';


@Component({
  selector: 'app-pharmacy-news',
  templateUrl: './pharmacy-news.component.html',
  styleUrls: ['./pharmacy-news.component.css']
})

export class PharmacyNewsComponent implements OnInit {

  isLoading : boolean = true ;
  newsList : PharmacyNews[] = [] ;

  constructor(private _PharmacyServices : PharmacyServices){}

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this._PharmacyServices.getNews().subscribe({
      next:(res:PharmacyNews[])=>{
        this.newsList = res ;
        this.isLoading = false
      },
      error:(err) => console.log(err)

    })
  }
}
