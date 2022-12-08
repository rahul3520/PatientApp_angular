import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addPatientData=(dataToSend:any)=>
  {
      return this.http.post("http://localhost:8080/add",dataToSend)
  }

  viewPatientData=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }

  searchPatient=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataToSend)
  }

  deletePatient=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/delete",dataToSend)
  }
}
