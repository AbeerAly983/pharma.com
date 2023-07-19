import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PharmacyServices } from 'src/app/services/pharmacy-services';
import { DoctorDetails } from 'src/app/interfaces/doctor-details';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doctorId : string = ''  ;
  doctorDetails! : DoctorDetails ;
  isLoading: boolean = true;
  constructor(private _PharmacyServices : PharmacyServices , private _ActivatedRoute : ActivatedRoute){}


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params : any )=>{
      this.doctorId = params.get('id') ;
    })

    this._PharmacyServices.getDoctorsDetails( this.doctorId).subscribe({
      next : (response : DoctorDetails )=> {
        this.doctorDetails = response;
        this.isLoading = false;
      } ,
    })

  }
}
