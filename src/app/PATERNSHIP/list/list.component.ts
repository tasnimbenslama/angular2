import { Component } from '@angular/core';
import { PaternshipService } from 'src/app/Service/paternship.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  
  constructor(private service:PaternshipService) { }
  paterns:any;
  affichage=false;


  ngOnInit() {
    let resp=this.service.getAllEquipes();
    resp.subscribe((data)=>this.paterns=data);
  }
}
