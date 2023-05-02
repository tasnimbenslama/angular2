import { Component } from '@angular/core';
import { AdmissionService } from '../admission.service';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { Regestriation } from '../MODELS/Regestriation';


@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})


export class AdmissionComponent {
  Admission:Regestriation=new Regestriation()
  constructor(private admissionService: AdmissionService) {}

  public firstNameError = 'First Name is required';
  public lastNameError = 'Last Name is required';
  public emailError= 'email must contains [a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}';

  public options = [
    { value: 'IT', label: 'IT' },
    { value: 'CIVIL_ENGINEERING', label: 'Civil Engineering' },
    { value: 'ELECTROMECHANICAL_ENGINEERING', label: 'Electromechanical Engineering' }
  ];
  public groups = [
    { value: 'PREPA1', label: 'PREPA1' },
    { value: 'PREPA2', label: 'PREPA2' },
    { value: 'A1', label: 'A1' },
    { value: 'A2', label: 'A2' },
    { value: 'A3', label: 'A3' },
    { value: 'A4', label: 'A4' },
    { value: 'B3', label: 'B3' }
  ];

  public optionsConfirmation = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' }
  ];

  public optionsConfirmations = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' }
  ];




  onSubmit(){
    const currentDate = new Date();
    this.Admission.registration_date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    console.log(this.Admission)
    this.SaveAdmission()

  }
  SaveAdmission(){
    this.admissionService.submitForm(this.Admission).subscribe(data=>{
      console.log(data)
    })
  }



}
