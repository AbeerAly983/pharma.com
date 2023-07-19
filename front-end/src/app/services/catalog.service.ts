import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  getcategory() {
    return this.http.get(environment.baseUrl+'/types');
  }
  getCategoryById(id: number) {
    return this.http.get(environment.baseUrl+'/showProductsByType/' + id);
  }
}
