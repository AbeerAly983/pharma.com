import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationExpire, NotificationReorder } from 'src/app/interfaces/Owner/notification';
import { NotificationService } from 'src/app/services/Owner/notification.service';
import { OwnerService } from 'src/app/services/Owner/owner.service';

@Component( {
  selector: 'app-sidebar-owner',
  templateUrl: './sidebar-owner.component.html',
  styleUrls: ['./sidebar-owner.component.css']
} )
export class SidebarOwnerComponent {
  expire:NotificationExpire[]=[];
  reorder:NotificationReorder[]=[];
  constructor(private notification:NotificationService, private service: OwnerService, private router: Router ) { }
  ngOnInit(){
    this.getReorder()
    this.getExpire()
  }
  getReorder(){
    this.notification.getReorder().subscribe({
      next : (res:any)=> {
        this.reorder = res[0] ;
        console.log(this.reorder)
      } ,
      error: (err)=> console.log(err)
    })
  }

  getExpire(){
    this.notification.getExpir().subscribe({
      next : (res:any)=> {
        this.expire = res[0] ;

      } ,
      error: (err)=> console.log(err)
    })
  }

  logOut() {
    this.service.logout().subscribe( ( res: any ) => {
      localStorage.removeItem( 'access_token' );
      this.router.navigate( ['/login'] )
    },
      ( error ) => {
        console.log( error )
      } );
  }

  droplist() {
    let arrow = document.querySelector( '.fa-circle-chevron-left' );

    let arrowp = document.querySelector( '.sidebar' );

    arrow?.addEventListener( 'click', () => {
      arrowp?.classList.toggle( 'showList' );
    } );
  }

  close() {
    let arrow = document.querySelector( '.fa-xmark' );
    
    let arrowp = document.querySelector( '.showList' );

    arrow?.addEventListener( 'click', () => {
      arrowp?.classList.toggle( 'close' );
      arrowp?.classList.toggle( 'showList' );
    } );
  }
}
