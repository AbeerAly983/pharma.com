import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountService } from 'src/app/services/Admin/discount.service';
import { DiscountProduct } from 'src/app/interfaces/Admin/discount';

@Component( {
  selector: 'app-edit-discount',
  templateUrl: './edit-discount.component.html',
  styleUrls: ['./edit-discount.component.css']
} )
export class EditDiscountComponent {
  responseMsg: any;
  valid: boolean = false;
  discount!: DiscountProduct;
  id = '';

  constructor( private service: DiscountService, private router: Router, private route: ActivatedRoute ) {
    this.id = this.route.snapshot.paramMap.get( 'id' )!;

  }

  ngOnInit(): void {
    this.getDiscountById();
  }

  getDiscountById() {
    this.service.getDiscountById( this.id ).subscribe( ( result: any ) => {
      this.discount = result;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    }
    );
  }

  // send updating data
  onsubmit( data: DiscountProduct ) {
    this.service.editDiscount( this.id, data ).subscribe( ( data ) => {
      this.responseMsg = data;
      if ( this.responseMsg.success == true ) {
        this.valid = true;
        setTimeout( () => { this.valid = false; }, 2000 );
      }
    },
      ( error ) => {
        if ( error.status == 401 ) {
          this.router.navigate( ['/login'] );
        }
      }
    );
  }

}
