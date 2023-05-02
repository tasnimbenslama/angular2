import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thematique } from '../Models/thematique';

@Injectable({
  providedIn: 'root'
})
export class ThematiqueService {

  constructor(private http: HttpClient) { }


  
 url = "http://localhost:8075/app0";
 endPoint_a="/readthematic";

getAllEquipes(){
 return this.http.get<Thematique[]>(this.url+this.endPoint_a);
}}
