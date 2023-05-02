import { Component } from '@angular/core';
import { FollowedService } from 'src/app/Service/followed.service';
import { ProjectService } from 'src/app/Service/project.service';

import { Followed } from 'src/app/Models/followed';
import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app//Models/project';


@Component({
  selector: 'app-add-f',
  templateUrl: './add-f.component.html',
  styleUrls: ['./add-f.component.css']
})
export class AddFComponent {
  followed: Followed=new Followed(0,"","",0,new Date());
  project: Project=new Project(0,"");
message:any;
ajout=false;
id!:number;
  constructor(private service:FollowedService,private http: HttpClient,private projectService: ProjectService){ }

  public registerNow(){
    let resp=this.service.doRegistration(this.followed);
    resp.subscribe((data)=>this.message=data);
        this.ajout=true;
      }

      assignEventToAllTeams(id: number,idF:number) {
        const url = `http://localhost:8075/app0/assignfollowedProject/${id}/${idF}`;
        this.http.put(url, {}).subscribe
        (()=>{
            const message =('Followed assigned to this  Project successfully with ID '+idF);
            alert(message);
            
          },
          (error) => {
            console.error('Error assigning event to teams:', error);
          }
        );
      }

    
      ngOnInit(): void {
        this.fetchProject();
      }
      fetchProject(): void {
        this.projectService.retrieveProject().subscribe(
          (response: Project) => {
            this.project = response;
            // Faites ce que vous voulez avec le projet récupéré ici
          },
          (error) => {
            console.error(error);
          }
        );
      }
}
