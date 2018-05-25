import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AppService {
    
  constructor(
    private http: HttpClient) {}

  private apiurl = environment.apiurl;  

  getToken() {
    alert(`${this.apiurl}/token`)
    return this.http.get(`${this.apiurl}/token`)
  }
  
}