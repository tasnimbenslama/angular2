import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Complaint } from 'src/app/MODELS/Complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http: HttpClient) { }

  submitForm(complaint: Complaint) {
    return this.http.post('http://localhost:8075/complaints/', complaint);
  }
  url="http://localhost:8075/complaints";
  endPoint_a="/"
  getAll(){
    return this.http.get<Complaint>(this.url+this.endPoint_a);}

}
