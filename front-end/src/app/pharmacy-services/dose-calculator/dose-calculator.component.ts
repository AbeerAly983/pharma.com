import { Component, OnInit } from '@angular/core';
import { PharmacyServices } from 'src/app/services/pharmacy-services';
import { Router, NavigationExtras } from '@angular/router';
import { ProductDose } from 'src/app/interfaces/product-dose';

@Component({
  selector: 'app-dose-calculator',
  templateUrl: './dose-calculator.component.html',
  styleUrls: ['./dose-calculator.component.css']
})
export class DoseCalculatorComponent implements OnInit {

  allProducts : ProductDose[] = [] ;
  productName : string = '';
  userAge: number = 0 ;
  userWeight: number = 0 ;
  isLoading: boolean = true;
  showSearchResults: boolean = false;

  constructor(private _PharmacyServices : PharmacyServices , private router: Router){}

  ngOnInit(): void {
    this.getAllProductsDose();
  }

  getAllProductsDose(){
    this._PharmacyServices.getProductDose().subscribe({
      next:(res :ProductDose[])=> {
        this.allProducts = res ;
        this.isLoading = false;
      } ,
      error : (err)=> console.log(err)
    })
  }

}
