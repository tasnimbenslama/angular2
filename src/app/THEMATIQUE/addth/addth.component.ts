import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thematique } from 'src/app/Models/thematique';
import { ThematiqueService } from 'src/app/Service/thematique.service';

@Component({
  selector: 'app-addth',
  templateUrl: './addth.component.html',
  styleUrls: ['./addth.component.css']
})
export class AddthComponent {
  idEv !:number;
  thematique :Thematique=new Thematique(0,"");

  constructor(private http: HttpClient,private service:ThematiqueService){}

  assignEventToAllTeams(idTH: number,idEv:number ) {
    const url = `http://localhost:8075/app0/assign thematic to event/${idTH}/${idEv}`;
    this.http.put(url, {}).subscribe(
      () => {
        const message =('THEME assigned to all teams successfully.');
        alert(message);
      },
      (error) => {
        console.error('Error assigning event to teams:', error);
      }
    );
  }
  thematiques:any;
  ngOnInit() {
    let resp=this.service.getAllEquipes();
    resp.subscribe((data)=>this.thematiques=data);
  }
  
}
