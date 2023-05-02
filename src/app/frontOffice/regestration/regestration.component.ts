import { Component, OnInit } from '@angular/core';
import { RegistriationService } from 'src/app/shared/registriation.service';
import { Regestriation } from 'src/app/MODELS/Regestriation';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {
regestration :Regestriation =new Regestriation()

message :any;
regest : any;

  constructor(private service:RegistriationService) { }

  ngOnInit() {
    let resp=this.service.getRegistriation();
    resp.subscribe((data)=>this.regest=data);
  }
     public deleteRegistriation(id:number){
      if (confirm('are you sure to delete regestration ?')){
      let resp= this.service.deleteRegistriation(id).subscribe(()=>this.service.getRegistriation().subscribe(resp=>this.regest=resp));

     }


    }




  }




