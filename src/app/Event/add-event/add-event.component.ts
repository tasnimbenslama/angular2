import { Component,OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';
import { HttpClient } from '@angular/common/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from 'src/app//Models/event';
import { TeamService } from 'src/app/Service/team.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {


  event: Event=new Event(0,"","","",0,"",new Date(),new Date());
  message:any;
  ajout=false;
  idEv!:number;

  constructor(private service:EventService,private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }
  
  public registerNow(){
let resp=this.service.doRegistration(this.event);
resp.subscribe((data)=>this.message=data);
    this.ajout=true;
    this.router.navigateByUrl('/user/app-search-delete');

  }
  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
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


 



