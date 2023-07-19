import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PharmacyServices } from '../../services/pharmacy-services';
import { ProductDoseDetails } from 'src/app/interfaces/product-dose-details';

@Component({
  selector: 'app-dose-results',
  templateUrl: './dose-results.component.html',
  styleUrls: ['./dose-results.component.css']
})
export class DoseResultsComponent implements OnInit  {
  age :string = '' ;
  weight :string = '' ;
  id :string = '' ;
  productDetails! : ProductDoseDetails ;
  isLoading: boolean = true;

  doseMessage : string | undefined = '';

  constructor(private _ActivatedRoute: ActivatedRoute , private _PharmacyServices : PharmacyServices) { }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((params :any) => {
      this.age = params['age'];
      this.weight = params['weight'];
      this.id = params['id'];

    });

    this.getProductDoseDetails();
  }

  getProductDoseDetails (){
    this._PharmacyServices.getProductDoseDetails(this.age , this.weight , this.id).subscribe({
      next:(res :ProductDoseDetails)=> {
        this.productDetails = res ;
        this.doseMessage = res.message ;
        this.isLoading = false;
      },
      error:(err)=> console.log(err)

    })
    }

}
