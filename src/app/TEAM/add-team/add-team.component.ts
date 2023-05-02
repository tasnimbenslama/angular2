import { Component } from '@angular/core';
import { TeamService } from 'src/app/Service/team.service';
import { Team } from 'src/app/Models/team';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {

  team:Team=new Team(0,"");
  message:any;
  ajout=false;
  idEv!:number;
  id!:number;

  teams:any;
  userId !:number;
  teamId !:number;
    hide=true;
  messageAffectation=""
  affichageAff=false;

  constructor(private http: HttpClient,private service:TeamService) { }

  ngOnInit() {
  }
  afficheraffc(){
    if(this.hide){
    this.hide=false;
    }
    else{
      this.hide=true;
    }

  }
  
  public registerNow(){
let resp=this.service.doRegistration(this.team);
resp.subscribe((data)=>this.message=data);
this.message='Contrat ajouté avec suucés !'
    this.ajout=true;
  }
  public assignUserToTeam(id: number, idT: number, idEv: number) {

    const resp = this.service.assignUserToTeam(id, idT, idEv);
    resp.subscribe(
      {
      next: () => {
        console.log("Assignment successful");
      },
      error: (err) => {
        console.log("Assignment failed: ",err);
      },
    });
   
}
affiche(){
  let resp=this.service.getAllEquipes();
  resp.subscribe((data)=>this.teams=data);   }

assignEventToAllTeams1(idEv: number): void {
  this.service.assignEventToAllTeams(idEv)
    .subscribe(
      response => {
        // Handle success response
        console.log(response); // Example: "ghghghghghg"
      },
      error => {
        // Handle error response
        console.error(error);
      }
    );
}




assignEventToAllTeams(id: number,idT:number) {
  const url = `http://localhost:8075/app0/assignusertoteam/${id}/${idT}`;
  this.http.put(url, {}).subscribe(
    () => {
      const message =('Event assigned to all teams successfully.');
      alert(message);
    },
    (error) => {
      console.error('Error assigning event to teams:', error);
    }
  );
}
createTeams() {
  this.http.post('http://localhost:8075/app0/create-teams', {}).subscribe(
    () => {
      const message =('Équipes créées avec succès !');
      alert(message);
    },
    (error) => {
      console.error('Erreur lors de la création des équipes :', error);
    }
  );
}



}
