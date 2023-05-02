import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event} from '../Models/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor(private http: HttpClient) { }


   public doRegistration(event: Event){
    return this.http.post("http://localhost:8075/app0/createEvent",event,{responseType:'text' as 'json'});
  }
  url = "http://localhost:8075/app0";
  endPoint_a="/readEvent";

 getAllEquipes(){
  return this.http.get<Event[]>(this.url+this.endPoint_a);
 }
 public deleteUser(id:number){
  return this.http.delete("http://localhost:8075/app0/deleteEvent/"+id);
}
assignEventToAllTeam(idEv: number): Observable<any> {
  const url = `${this.url}/assignEventtoallteam12/${idEv}`;
  return this.http.put<any>(url, null);
}
endPoint_g="/updateEvent";
 updateContrat(event:Event){
  return this.http.put<Event>(this.url+this.endPoint_g,event);
 }
  }
