import { Component, OnInit } from '@angular/core';
import { PharmacyServices } from 'src/app/services/pharmacy-services';
import { DomSanitizer } from '@angular/platform-browser';
import { Session } from 'src/app/interfaces/session';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit  {

  isLoading: boolean = true;
  allSession :Session[]=[]
  constructor(private _PharmacyServices : PharmacyServices , public  sanitizer: DomSanitizer ){}

  ngOnInit(): void {
    this.getAllSession();
  }

  getAllSession(){
    this._PharmacyServices.getAllSession().subscribe({
      next:(res:Session[])=> {
        this.allSession = res ;
        this.isLoading = false
      },
      error:(err)=> console.log(err)
    })
  }

}
