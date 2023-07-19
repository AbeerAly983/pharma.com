import { Component, OnInit } from '@angular/core';
import { PharmacyServices } from 'src/app/services/pharmacy-services';
import { Doctor } from 'src/app/interfaces/doctor';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctorsList : Doctor[]=[] ;
  doctorName: string = '';
  doctorSpcilaize: string = '';
  isLoading: boolean = true;
  noDataFound: boolean = false;
  showSearchResults: boolean = false;

  constructor (private _PharmacyServices : PharmacyServices ){}

  ngOnInit(): void {
    this.getDoctors();
  }

  getDoctors(){
    this._PharmacyServices.getDoctors().subscribe( {
      next:(res : Doctor[] )=>{
        this.doctorsList =res  ,
        this.isLoading = false;
        if (this.doctorsList.length === 0 && this.doctorName !== '' && this.doctorSpcilaize !== '') {
          this.noDataFound = true;
        } else {
          this.noDataFound = false;
        }
    },
      error:(err : any)=> console.log(err),

    })
  }

}
