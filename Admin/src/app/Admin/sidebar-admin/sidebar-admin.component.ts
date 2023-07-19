import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/Admin/notification.service';
import { UserService } from 'src/app/services/Admin/user.service';

@Component( {
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
} )

export class SidebarAdminComponent implements OnInit {
  expire:any[]=[]
  reorder:any[]=[]
  constructor(private notification:NotificationService, private service : UserService , private router :Router){}
  ngOnInit(){
    this.getReorder()
    this.getExpire()
  }
  getReorder(){
    this.notification.getReorder().subscribe({
      next : (res:any)=> {
        this.reorder = res[0] ;
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


  logOut(){
    this.service.logout().subscribe( ( res: any ) => {
      localStorage.removeItem('access_token') ;
      this.router.navigate(['/login'])
    },
      ( error ) => {
        console.log(error)
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
