import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Account } from 'src/app/interfaces/account';

@Component( {
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
} )
export class AccountComponent {
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
