import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Followed} from '../Models/followed';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FollowedService {

  constructor(private http: HttpClient) { }


  public doRegistration(followed: Followed){
   return this.http.post("http://localhost:8075/app0/createfollowed",followed,{responseType:'text' as 'json'});
  
  }}
