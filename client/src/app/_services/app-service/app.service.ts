import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class AppService {
    
  constructor(private http: HttpClient) {}

  private apiurl = environment.apiurl;  

  getToken() { 
    
   const data = {key: 'hello'};
   return this.http.post("https://www.stratteos.us/token", data);
   //return this.http.post(`${this.apiurl}/token`, data, httpOptions);
  }
  
}