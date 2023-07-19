import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/Accountant/user.service';

@Component({
  selector: 'app-sidebar-accountant',
  templateUrl: './sidebar-accountant.component.html',
  styleUrls: ['./sidebar-accountant.component.css']
})
export class SidebarAccountantComponent {

  constructor(private service : UserService , private router :Router){}
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
