import { Component } from '@angular/core';
import { Paternship } from 'src/app/Models/Paternship';
import { PaternshipService } from 'src/app/Service/paternship.service';

@Component({
  selector: 'app-add-p',
  templateUrl: './add-p.component.html',
  styleUrls: ['./add-p.component.css']
})
export class AddPComponent {

  patern: Paternship=new Paternship(0,"","");
  message:any;
  ajout=false;


  constructor(private service:PaternshipService) { }

  ngOnInit() {
  }
  
  public registerNow(){
let resp=this.service.doRegistration(this.patern);
resp.subscribe((data)=>this.message=data);
    this.ajout=true;
  }


}
