import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { Account } from 'src/app/interfaces/account';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
} )
export class DashboardComponent {
  isLoading: boolean = true;
  user!: Account;
  constructor( private userService: UserService, private router: Router ) { }


  getUser() {
    this.userService.getUser().subscribe( ( data: any ) => {
      this.user = data;
      this.isLoading = false;
    } );
  }

  ngOnInit() {
    this.getUser();
  }


}
