import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project} from '../Models/project';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }


   public doRegistration(project: Project){
    return this.http.post("http://localhost:8075/app0/createproject",project,{responseType:'text' as 'json'});
  }

  retrieveProject(): Observable<Project> {
    return this.http.get<Project>('http://localhost:8075/app0/retreiveWinnerProject');
  }
}
