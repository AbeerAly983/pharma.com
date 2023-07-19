import { Component, OnInit } from '@angular/core';
import { NotificationExpire, NotificationReorder } from 'src/app/interfaces/Admin/notification';
import { NotificationService } from 'src/app/services/Admin/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  expire:NotificationExpire[]=[]
  reorder:NotificationReorder[]=[]
  showReorder: boolean = false;
  showExpire: boolean = false;
  showVerification: boolean = false;
  showEditProfile: boolean = true;
  showBack: boolean = false;
  constructor( private service : NotificationService){
  }
  ngOnInit(){
    this.getReorder()
    this.getExpire()
  }


  showReorderPoint() {
    this.showReorder = true;
    this.showExpire = false;
    this.showVerification = false;
    this.showEditProfile = false;
    this.showBack = true;
  }
  showExpireDate() {
    this.showExpire = true;
    this.showVerification = false;
    this.showReorder = false;
    this.showEditProfile = false;
    this.showBack = true;
  }

  getReorder(){
    this.service.getReorder().subscribe({
      next : (res:any)=> {
        this.reorder = res[0] ;
      } ,
      error: (err)=> console.log(err)
    })
  }

  getExpire(){
    this.service.getExpir().subscribe({
      next : (res:any)=> {
        this.expire = res[0] ;

      } ,
      error: (err)=> console.log(err)
    })
  }
}
