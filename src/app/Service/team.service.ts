import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team} from '../Models/team';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TeamService {

  
  constructor(private http: HttpClient) { }
  url = "http://localhost:8075/app0";


   public doRegistration(team: Team){
    return this.http.post("http://localhost:8075/app0/createteam",team);
  }


  

 assignUserToTeam(id: number, idT: number, idEv: number): Observable<any> {
  const url = `${this.url}/AssignTeamToUserAndEvent/${id}/${idT}/${idEv}`;
    return this.http.put(url, {});
  }
 
  
  assignEventToAllTeams(idEv: number): Observable<string> {
    const url = `http://localhost:8075/app0/assignEventtoallteam12/${idEv}`;
    return this.http.put<string>(url,{});
  }

  assignUserToTeam1(userId: number, teamId: number) {
    const url = `${this.url}/assignusertoteam`;
    const body = { userId, teamId };

    return this.http.put(url, body);
  }

  endPoint_a="/readteam";

 getAllEquipes(){
  return this.http.get<Team[]>(this.url+this.endPoint_a);
 }

 assignUserToTeam12(id: number, idT: number) {
  const url = `${this.url}/assignusertoteam/${id}/${idT}`;

  return this.http.put(url, null);
}



assignUsersToTeam9(id: number[], idT: number) {
  const url = `${this.url}/team/assignUsers`;
  return this.http.post(url, { idT });
}
private apiUrl = 'http://localhost:8075/app0/automatique'; // Remplacez par l'URL de votre API Spring Boot


  affectationAutomatique() {
    return this.http.post(this.apiUrl, null);
  }
}

