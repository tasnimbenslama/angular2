import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }
  url = "http://localhost:8075/app0";
  endPoint_a="/retreiveUser";

 getAllEquipes(){
  return this.http.get<User[]>(this.url+this.endPoint_a);
 }

 

}
