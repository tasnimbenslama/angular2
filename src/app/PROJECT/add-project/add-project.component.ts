import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Service/project.service';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from 'src/app//Models/project';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit{

  project: Project=new Project(0,"");
  message:any;
  ajout=false;
  idT!:number;

  constructor(private service:ProjectService,private http: HttpClient) { }

  ngOnInit() {
  }
  
  public registerNow(){
let resp=this.service.doRegistration(this.project);
resp.subscribe((data)=>this.message=data);
    this.ajout=true;
  }
  
assignEventToAllTeams(id: number,idT:number) {
  const url = `http://localhost:8075/app0/assign project to team/${id}/${idT}`;
  this.http.put(url, {}).subscribe(
    () => {
      const message =('Project'+id+' assigned to Your team'+idT+' successfully.');
      alert(message);
    },
    (error) => {
      console.error('Error assigning event to teams:', error);
    }
  );
}
}
