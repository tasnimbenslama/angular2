import { Component } from '@angular/core';
import { ProjectService } from 'src/app/Service/project.service';

import { HttpClient } from '@angular/common/http';
import { Project } from 'src/app//Models/project';
@Component({
  selector: 'app-aff',
  templateUrl: './aff.component.html',
  styleUrls: ['./aff.component.css']
})
export class AffComponent {
  project: Project=new Project(0,"");

  constructor(private http: HttpClient,private projectService: ProjectService){ }

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
