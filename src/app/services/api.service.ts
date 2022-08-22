import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  base_url:string = "http://localhost:3000/productList/";
  postProduct(data : any){
    return this.http.post<any>(this.base_url ,data);
  }

  getProduct(){
    return this.http.get<any>(this.base_url);
  }

  putProduct(data:any , id:number){
     return this.http.put<any>(this.base_url + id , data);
  }

  deleteProduct(id:number , ){
     return this.http.delete<any>(this.base_url + id);
  }
}
