
import { Component, OnInit } from '@angular/core';
import { PharmacyServices } from 'src/app/services/pharmacy-services';
import { Lab } from 'src/app/interfaces/lab';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit{

  labsList : Lab [] =[] ;
  labName: string = '';
  labTests: string = '';
  isLoading: boolean = true;
  showSearchResults: boolean = false;

  constructor (private _PharmacyServices : PharmacyServices ){}
  ngOnInit(): void {
    this.getLabs();
  }

  getLabs(){
    this._PharmacyServices.getLabs().subscribe( {
      next:(res : Lab [] )=>{
        this.labsList = res ;
        this.isLoading = false;
      },
      error:(err  )=> console.log(err),
    })
  }

}
