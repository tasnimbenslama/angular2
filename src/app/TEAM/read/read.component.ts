import { Component,OnInit } from '@angular/core';
import { TeamService } from 'src/app/Service/team.service';
import { UserService } from 'src/app/Service/user.service';
import { Team } from 'src/app/Models/team';
import { User } from 'src/app/Models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  user :User =new User(0,"","","","");
  teams: any; // Assuming you have a Team interface defined
  users:any;
  team:Team=new Team(0,"");
  message:any;
ajout=false;


  constructor(private teamService: TeamService,private http: HttpClient) { }

  ngOnInit() {
   
  }
  effectuerAffectation() {
    this.teamService.affectationAutomatique().subscribe(
      () => {
        const message = 'Affectation automatique effectuée avec succès.';
       alert(message);

      },
      (error) => {
        console.error('Une erreur s\'est produite lors de l\'affectation automatique :', error);
      }
    );

  }
  
  generatePdf() {
    this.http.get('http://localhost:8075/app0/pdf', { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = 'Information About Teams.pdf';
        downloadLink.click();
        window.URL.revokeObjectURL(downloadLink.href);
      });
  }
}
