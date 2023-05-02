import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { Event} from'src/app/Models/event';
import { UserService } from 'src/app/Service/user.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  user :User =new User(0,"","","","");
  message:any;
  ajout=false;
  users:any;

  constructor(private service:UserService) { }

  ngOnInit() {
    let resp=this.service.getAllEquipes();
  resp.subscribe((data)=>this.users=data); {
  }
  }

}