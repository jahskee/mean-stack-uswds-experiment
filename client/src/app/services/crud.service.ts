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
   // modelName = modelName.toLowerCase()
    return this.http.get(`${this.apiurl}/api/${modelName.toLowerCase()}s?token=${this.token}`);
  }

  create(modelName, dataObj) { 
    return this.http.post(`${this.apiurl}/api/${modelName.toLowerCase()}s?token=${this.token}`, dataObj);
  }

  read(modelName, id){
    return this.http.get(`${this.apiurl}/api/${modelName.toLowerCase()}s/${id}?token=${this.token}`);
  }
  
  // bulk update is possible, see documentation
  update(modelName, dataObj) {
    console.log(dataObj)
    let url = `${this.apiurl}/api/${modelName.toLowerCase()}s/${dataObj._id}`;   
    return this.http.put(url, dataObj);
  }

  delete(modelName, id) {
    return this.http.delete(`${this.apiurl}/api/${modelName.toLowerCase()}s/delete/${id}?token=${this.token}`);
  }

}