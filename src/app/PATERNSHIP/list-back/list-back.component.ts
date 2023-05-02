import { Component } from '@angular/core';
import { PaternshipService } from 'src/app/Service/paternship.service';

@Component({
  selector: 'app-list-back',
  templateUrl: './list-back.component.html',
  styleUrls: ['./list-back.component.css']
})
export class ListBackComponent {
  constructor(private service:PaternshipService) { }
  paterns:any;
  affichage=false;


  ngOnInit() {
    let resp=this.service.getAllEquipes();
    resp.subscribe((data)=>this.paterns=data);
  }
  public deleteUser(id:number){
  if (confirm('are you sure to delete ?')){

 let resp= this.service.deleteUser(id).subscribe(()=>this.service.getAllEquipes().subscribe(resp =>this.paterns=resp));

}
alert('L\'élément a été supprimé avec succès.');

  }

}
