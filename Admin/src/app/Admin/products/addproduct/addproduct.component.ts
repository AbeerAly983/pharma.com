import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, Type } from 'src/app/interfaces/Admin/product_type';
import { ProductService } from 'src/app/services/Admin/product.service';
import { TypeService } from 'src/app/services/Admin/type.service';


@Component( {
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
} )
export class AddproductComponent implements OnInit {

  responseMsg: any;
  valid: boolean = false;
  inValid: boolean = false;
  exist: boolean = false;
  category: Type[] = [];
  selectedPhoto: Blob | undefined;
  selectedPhoto1: Blob | undefined;
  selectedPhoto2: Blob | undefined;
  selectedPhoto3: Blob | undefined;
  selectedPhoto4: Blob | undefined;

  constructor( private service: ProductService, private type: TypeService, private router: Router ) { }

  ngOnInit() {
    this.getCategory()
  }


  onMainPhotoSelected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto = file;
    }
  }
  onPhoto1Selected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto1 = file;
    }
  }
  onPhoto2Selected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto2 = file;
    }
  }
  onPhoto3Selected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto3 = file;
    }
  }
  onPhoto4Selected( event: Event ) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if ( file ) {
      this.selectedPhoto4 = file;
    }
  }



  getCategory() {
    this.type.getCategory().subscribe( ( res: any ) => {
      this.category = res
    } )
  }


  // send data
  onsubmit( data: Product ) {
    const formData = new FormData();
    if ( this.selectedPhoto1 != undefined ) {
      formData.append( 'photo_1', this.selectedPhoto1 as Blob );
    }
    if ( this.selectedPhoto2 != undefined ) {
      formData.append( 'photo_2', this.selectedPhoto2 as Blob );
    }
    if ( this.selectedPhoto3 != undefined ) {
      formData.append( 'photo_3', this.selectedPhoto3 as Blob );
    }
    if ( this.selectedPhoto4 != undefined ) {
      formData.append( 'photo_4', this.selectedPhoto4 as Blob );
    }
    formData.append( 'qrCode', data.qrCode.toString() );
    formData.append( 'name', data.name );
    formData.append( 'price', data.price );
    formData.append( 'currency', data.currency );
    formData.append( 'quantity', data.quantity.toString() );
    formData.append( 'description', data.description );
    formData.append( 'type_id', data.type_id.toString() );
    formData.append( 'ingredients', data.ingredients );
    formData.append( 'howToUSe', data.howToUSe );
    formData.append( 'brandCountry', data.brandCountry );
    formData.append( 'company_name', data.company_name );
    formData.append( 'characteristics', data.characteristics );
    formData.append( 'app_area', data.app_area );
    formData.append( 'for_whom', data.for_whom );
    formData.append( 'purpose', data.purpose );
    formData.append( 'production_date', data.production_date || '' );
    formData.append( 'expiry_date', data.expiry_date || '' );
    formData.append( 'reorder_point', data.reorder_point.toString() );
    formData.append( 'photo', this.selectedPhoto as Blob );
    this.service.addProduct( formData ).subscribe( ( data: any ) => {
      this.responseMsg = data;
      if ( this.responseMsg.sucess == true ) {
        this.valid = true;
        setTimeout( () => {
          this.valid = false;
        }, 2500 );
        this.clearData();
      }
      else {
        this.inValid = true;
        setTimeout( () => {
          this.inValid = false;
        }, 2500 );
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
