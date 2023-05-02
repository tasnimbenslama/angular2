import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paternship} from '../Models/Paternship';

@Injectable({
  providedIn: 'root'
})
export class PaternshipService {

  constructor(private http: HttpClient) { }


  url = "http://localhost:8075/app0";
  endPoint_a="/readpaternship";

 getAllEquipes(){
  return this.http.get<Paternship[]>(this.url+this.endPoint_a);
 
}

public doRegistration(patern: Paternship){
  return this.http.post("http://localhost:8075/app0/createpaternship",patern);
}
public deleteUser(id:number){
  return this.http.delete("http://localhost:8075/app0/deletepaternship/"+id);

}

}