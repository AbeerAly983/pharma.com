import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoseCalc, calculator, dose_of_products, indication } from 'src/app/interfaces/Admin/dose-calc';
import { environment } from 'src/environments/coordinator';

@Injectable( {
  providedIn: 'root'
} )
export class DoseCalcService {

  constructor( private http: HttpClient ) { }

  getDoseCal(): Observable<DoseCalc[]> {
    return this.http.get<DoseCalc[]>( environment.otherbaseUrl + "/showProductDose" )

  }
  getProductCase( id: any ): Observable<DoseCalc> {

    return this.http.get<DoseCalc>( environment.baseUrl + `/dose/edit_productCase/${id}`, {} )
  }

  getproductDose( id: any ): Observable<calculator> {

    return this.http.get<calculator>( environment.baseUrl + `/dose/show_productDose/${id}`, {} )
  }

  getIndication( id: any ): Observable<indication> {

    return this.http.get<indication>( environment.baseUrl + `/dose/storeProductIndication/${id}`, {} )
  }

  getAllIndication(): Observable<indication[]> {

    return this.http.get<indication[]>( environment.baseUrl + `/dose/products/indication`, {} )
  }


  addProduct( product: any ): Observable<string> {

    return this.http.post<string>( environment.baseUrl + "/dose/storeProduct", product, {} )
  }

  addIndication( id: any, indication: any ): Observable<string> {

    return this.http.post<string>( environment.baseUrl + `/dose/storeProductIndication/${id}`, indication, {} )
  }

  addDose( id: any, dose: any ): Observable<dose_of_products> {

    return this.http.post<dose_of_products>( environment.baseUrl + `/dose/storeProductDose/${id}`, dose, {} )
  }

  getProductCaseId( id: any ): Observable<string> {

    return this.http.get<string>( environment.baseUrl + `/dose/edit_productCase/${id}`, {} );
  }

  editProductCase( id: any, product: any ): Observable<string> {

    return this.http.post<string>( environment.baseUrl + `/dose/update_productCase/${id}`, product, {} )
  }

  getProductIndicationId( id: any ): Observable<indication> {

    return this.http.get<indication>( environment.baseUrl + `/dose/edit_productIndication/${id}`, {} );
  }

  editProductIndication( id: any, product: any ): Observable<indication> {

    return this.http.post<indication>( environment.baseUrl + `/dose/update_productIndication/${id}`, product, {} )
  }

  getProductDoseId( id: any ): Observable<dose_of_products> {

    return this.http.get<dose_of_products>( environment.baseUrl + `/dose/edit_productDose/${id}`, {} );
  }

  editProductDose( id: any, product: any ): Observable<dose_of_products> {

    return this.http.post<dose_of_products>( environment.baseUrl + `/dose/update_productDose/${id}`, product, {} )
  }

  deleteProductCase( id: any, data: any ): Observable<string> {

    return this.http.post<string>( environment.baseUrl + `/dose/destroy_productCase/${id}`, data, {} )
  }

  deleteProductIndication( id: any, data: any ): Observable<string> {

    return this.http.post<string>( environment.baseUrl + `/dose/destroy_productIndication/${id}`, data, {} )
  }

  deleteDose( id: any, data: any ): Observable<string> {

    return this.http.post<string>( environment.baseUrl + `/dose/destroy_productDose/${id}`, data, {} )
  }

}
