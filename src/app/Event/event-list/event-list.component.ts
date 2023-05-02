import { Component } from '@angular/core';
import { Event } from 'src/app//Models/event';
import { EventService } from 'src/app/Service/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  contratList:Event[]=[];

  idEv!:Number ;
  
  name="";
  location="";
  materials="";
  budget=0;
  speaker="";
  messageAffectation="" ;
  messageStat="" ;

  affichageAff=false;
  nomE!:String;
  prenomE!:String;
  hide=true;
  hideS=true;
  hideTextStat=true;
  nbrV!: Number;
  affaire="";


  afficheraffc(){
    if(this.hide){
    this.hide=false;
    }
    else{
      this.hide=true;
    }

  }

  afficherStat(){
    if(this.hideS){
    this.hideS=false;
    }
    else{
      this.hideS=true;
    }

  }

  afficherTextStat(){
    if(this.hideTextStat){
    this.hideTextStat=false;
    }
    else{
      this.hideTextStat=true;
    }

  }


  constructor(private contratService:EventService) { }

  ngOnInit(): void {
    this.getContrats();
  }
  getContrats(){
    this.contratService.getAllEquipes().subscribe(data =>this.contratList=data);
  }

 
 
}
