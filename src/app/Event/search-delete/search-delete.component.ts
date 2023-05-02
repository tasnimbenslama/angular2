import { Component,OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';
import { Event } from 'src/app//Models/event';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit{
  events:any;
  message:any;
  affichage=false;
  event: Event=new Event(0,"","","",0,"",new Date(),new Date());
  ajout=false;
  constructor(private service:EventService,private http: HttpClient) { }


public delteUser(id:number){
  if (confirm('are you sure to delete this event ?')){

 let resp= this.service.deleteUser(id).subscribe(()=>this.service.getAllEquipes().subscribe(resp =>this.events=resp));
}

}

   
 


ngOnInit() {
  let resp=this.service.getAllEquipes();
  resp.subscribe((data)=>this.events=data);
}
onFileSelected(event: any) {
  const selectedFile = event.target.files[0];
}
public registerNow(){
  let resp=this.service.doRegistration(this.event);
  resp.subscribe((data)=>this.message=data);
 
      this.ajout=true;
    }
    assignEventToAllTeams(idEv: number) {
      const url = `http://localhost:8075/app0/assignEventtoallteam12/${idEv}`;
      this.http.put(url, {}).subscribe(
        () => {
          console.log('Event assigned to all teams successfully.');
        },
        (error) => {
          console.error('Error assigning event to teams:', error);
        }
      );
    }
    assignEventToAllTeams1(idEv: number) {
      const url = `http://localhost:8075/app0/events/users/${idEv}`;
      this.http.post(url, {}).subscribe(
        () => {
          console.log('Event assigned to all teams successfully.');
        },
        (error) => {
          console.error('Error assigning event to teams:', error);
        }
      );
    }



    
}
