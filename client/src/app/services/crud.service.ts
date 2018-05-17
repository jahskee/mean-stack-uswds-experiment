import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// node express generic crud
// https://www.npmjs.com/package/node-express-crud-router

@Injectable()
export class CrudService {
    
  constructor(private http: HttpClient) {}

  private apiurl = environment.apiurl;
  
  token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaHNrZWVAeWFob28uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTI2MTU0ODA0LCJleHAiOjMxNTU1MjYxNTQ4MDR9.Sac4KgisLlJjknCVrPSK8YU5wusu0I69OlffwcEcJho';
  
  list(modelName){
    return this.http.get(`${this.apiurl}/api/${modelName.toLowerCase()}s?token=${this.token}`);
  }

  create(modelName, dataObj) { 
    const url = `${this.apiurl}/api/${modelName.toLowerCase()}s?token=${this.token}`;
    return this.http.post(url, dataObj);
  }

  read(modelName, id){
    return this.http.get(`${this.apiurl}/api/${modelName.toLowerCase()}s/${id}?token=${this.token}`);
  }
  
  // bulk update is possible, see documentation
  update(modelName, dataObj) {

    const url = `${this.apiurl}/api/${modelName.toLowerCase()}s/${dataObj._id}?token=${this.token}`;   
    return this.http.put(url, dataObj);
  }

  delete(modelName, id) {
    return this.http.delete(`${this.apiurl}/api/${modelName.toLowerCase()}s/${id}?token=${this.token}`);
  }

}