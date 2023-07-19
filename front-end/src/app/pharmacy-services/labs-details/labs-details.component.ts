
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PharmacyServices } from 'src/app/services/pharmacy-services';
import { LabDetails } from 'src/app/interfaces/lab-details';
@Component({
  selector: 'app-labs-details',
  templateUrl: './labs-details.component.html',
  styleUrls: ['./labs-details.component.css']
})

export class LabsDetailsComponent implements OnInit {
  labId : string = ''  ;
  labDetails! : LabDetails ;
  isLoading: boolean = true;
  constructor(private _PharmacyServices : PharmacyServices , private _ActivatedRoute : ActivatedRoute){}


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params :any)=>{
      this.labId = params.get('id') ;
    })

    this._PharmacyServices.getLabsDetails( this.labId).subscribe({
      next : (response:LabDetails)=> {
        this.labDetails = response ;
        this.isLoading = false;

      } ,
    })
  }
}
