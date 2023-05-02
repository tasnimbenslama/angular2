import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Complaint } from 'src/app/MODELS/Complaint';
import { ComplaintService } from 'src/app/complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent {
  complaint: Complaint = new Complaint();

  constructor(private service: ComplaintService) {}
  public complainantNameError = 'Please enter your name';
  public complainantContactError='Please enter your Contact'
  public complaintDetailsError= 'Please provide us with Details'

  onSubmit(form: NgForm) {
    const currentDate = new Date();
    this.complaint.complaintDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), currentDate.getHours(), currentDate.getMinutes(),currentDate.getSeconds());
    // Create a new complaint object and assign the form values
    this.complaint.id = form.value.id;
    //this.complaint.complaintDate = form.value.complaintDate;
    //this.complaint.complaintDate = currentDate.toISOString().substring(0, 10);
    this.complaint.complainantName = form.value.complainantName;
    this.complaint.complainantContact = form.value.complainantContact;
    this.complaint.complaintDetails = form.value.complaintDetails;
    this.complaint.Status = form.value.status;
    // Call the createComplaint method to submit the complaint
    this.createComplaint(this.complaint);

}


createComplaint(complaint: Complaint) {
  this.service.submitForm(complaint).subscribe((data: any) => {
      console.log(data);
      // Clear the form after submitting the complaint
      this.complaint = new Complaint();
  });
}
}
