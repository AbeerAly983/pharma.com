import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/Coordinator/orders.service';
import { Users } from 'src/app/interfaces/Coordinator/users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  allUsers : Users[] = [] ;

  constructor(private _OrdersService : OrdersService){}

  ngOnInit(): void {
    this.getAllUsers() ;
  }

  getAllUsers(){
    this._OrdersService.getUsers().subscribe({
      next:(res:Users[])=> {
        console.log(res);

        this.allUsers = res ;
      },
      error:(err)=> console.log(err)
    })
  }

}
