import { Component ,OnInit} from '@angular/core';
import { ComplaintService } from 'src/app/complaint.service';
import { Complaint } from 'src/app/MODELS/Complaint';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
complaints:any;
  constructor(private complaintservice:ComplaintService) {}
    complaint :Complaint =new Complaint();
    ngOnInit()
    {
      let resp=this.complaintservice.getAll();
    resp.subscribe((data)=>this.complaints=data)

  }
}

