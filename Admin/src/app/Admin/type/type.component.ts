import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from 'src/app/interfaces/Admin/product_type';
import { TypeService } from 'src/app/services/Admin/type.service';
@Component( {
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
} )
export class TypeComponent implements OnInit {

  category: Type[] = [];

  constructor( private service: TypeService, private router: Router ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.service.getCategory().subscribe( ( res: any ) => {
      this.category = res;
    }, ( error ) => {
      if ( error.status == 401 ) {
        this.router.navigate( ['/login'] );
      }
    } );
  }
}
