import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';


@Component( {
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
} )
export class NavbarComponent {
  showData: boolean = false;
  responseMsg:{ [key: string]: any } = {};
  isLogin : boolean = false ;
  cartNumbers: number  | null = 0 ;
  wishListtNumbers: number | null  = 0 ;

  constructor( private userService: UserService, private _CartService: CartService, private router: Router , private _AuthService  :AuthService ) {
    _CartService.numberOfCartItems.subscribe({
      next:(num:number | null)=> {
        this.cartNumbers = num
      }
    }) ,
    userService.numberOfWishListItems.subscribe({
      next:(num:number | null)=> {
        this.wishListtNumbers = num
      }
    })
  }

  ngOnInit(): void {

    this._AuthService.userData.subscribe({
      next:()=>{
        if(this._AuthService.userData.getValue() !== null ){
          this.isLogin = true ;
        }
        else {
          this.isLogin = false ;
        }
      }
    })
  }

    logOut(){
      this.userService.logOut().subscribe({
        next:(res : { [key: string]: any })=> {
          this.responseMsg = res  ;
          if ( this.responseMsg['message'] == "successfully signed out" ) {
              this.router.navigate( ['/home'] );
              localStorage.setItem( "access_token", "" );
              this._AuthService.userData.next(null) ;                      }
                },
                error:(err)=> console.log(err)
      })
    }

  getAuth() {
    const token = localStorage.getItem( 'access_token' );
    // when key is not local
    if ( token == null ) {
      localStorage.setItem( "access_token", "" ); //to initialize token if user don't login
      this.router.navigate( ['/login'] );
    }
    else if ( token == "" ) {
      this.router.navigate( ['/login'] );
    }
  }


}
