import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/Coordinator/user.service';
UserService

@Component( {
  selector: 'app-sidebar-coord',
  templateUrl: './sidebar-coord.component.html',
  styleUrls: ['./sidebar-coord.component.css']
} )
export class SidebarCoordComponent {
  constructor(private _UserService : UserService , private _Router :Router){ }


  logOut(){
    this._UserService.logout().subscribe({
      next:(res)=> {
        localStorage.removeItem('access_token') ;
        this._Router.navigate(['/login'])
      },
      error :(err)=> console.log(err)
    })
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
