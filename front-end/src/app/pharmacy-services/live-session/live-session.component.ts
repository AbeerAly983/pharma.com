import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PharmacyServices } from 'src/app/services/pharmacy-services';
import { DomSanitizer } from '@angular/platform-browser';
import { Session } from 'src/app/interfaces/session';

@Component({
  selector: 'app-live-session',
  templateUrl: './live-session.component.html',
  styleUrls: ['./live-session.component.css']
})
export class LiveSessionComponent  implements OnInit {

  id :string ='' ;
  liveDetails!:Session
  isLoading: boolean = true;
  comment: string = '';
  showButtons: boolean = false;
  allComments : any ;
  showSuccessMessage = false;

  constructor(private _ActivatedRoute : ActivatedRoute , private _PharmacyServices : PharmacyServices , public  sanitizer: DomSanitizer , private _Router : Router  ){
    this._ActivatedRoute.paramMap.subscribe((params :any)=>{
      this.id = params.get('id') ;
    })


  }

  ngOnInit(): void {
    this.showLiveSession()
    this.getComment();
  }

  showLiveSession(){
    this._PharmacyServices.showLiveSession(this.id).subscribe({
    next:(res:Session)=> {
      this.liveDetails = res ;
      this.isLoading = false
    },
    error:(err)=> console.log(err)
    })
  }

  addComment(content: string) {

    console.log(content);
    console.log(this.id);
    this._PharmacyServices.addComment(this.id, content).subscribe({
      next: (res) => {
        this.getComment()
        this.comment = ''
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 2000);
      },
      error: (err) => console.log(err)
    });
  }

  getComment(){
    this._PharmacyServices.getComment(this.id).subscribe({
      next:(res)=>{
        this.allComments = res ;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
