import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CrudService } from "../_crud-service/crud.service";

@Injectable()
export class AppService {
    
  constructor(private http: HttpClient, private crudService: CrudService) {}

  private apiurl = environment.apiurl;  

  getToken() {
    return this.http.get(`${this.apiurl}/token`)
  }
  
}