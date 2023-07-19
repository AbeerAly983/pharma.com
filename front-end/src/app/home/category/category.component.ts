import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import {Category}from '../../interfaces/category'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  imageArray: Category[]=[] ;

  constructor( private _HomeService : HomeService ) { }
  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this._HomeService.getCategories().subscribe((data:Category[]) => {
      this.imageArray= data ;
    });
  }


}
