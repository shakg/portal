import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private getCompanyInfoBaseUrl:string = "http://127.0.0.1:3000/company";

  constructor(private http:HttpClient) { }

  getCompanyInfo(id:number) : Observable<Object>{
    return this.http.get<Object>(`${this.getCompanyInfoBaseUrl}?id=${id}`)
  }
}
