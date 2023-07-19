import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/Owner/notification.service';
import { NotificationExpire, NotificationReorder } from 'src/app/interfaces/Owner/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

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
