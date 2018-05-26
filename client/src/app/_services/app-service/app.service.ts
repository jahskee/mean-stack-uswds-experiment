import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable()
export class AppService {
    
  constructor(private http: HttpClient) {}

  private apiurl = environment.apiurl;  

  getToken() { 
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

   return this.http.post(`${this.apiurl}/token`, {key: 'hello'}, httpOptions);
  }
  
}