import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  //get All Data
  apiUrl='http://localhost:3000/user';

  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //create data
  createData(data:any):Observable<any>{
    console.log(data,'createapi=>');
    return this._http.post(`${this.apiUrl}`,data);
    
  }

  //delete Data
  deleteData(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //Update Data
  updateData(data:any,id:any):Observable<any>{
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`,data);
  }


  //Getting Sengle Date
  getSingleData(id:any):Observable<any>
  {
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }
}
