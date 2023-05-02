import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdmissionService {

  constructor(private http: HttpClient) { }
  submitForm(data: any) {
    return this.http.post('http://localhost:8075/addRegistration', data);
  }
}
