import { Component, OnInit } from '@angular/core';
import { Regestriation } from 'src/app/MODELS/Regestriation';
import { RegistriationService } from 'src/app/shared/registriation.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  regest: Regestriation = new Regestriation();
  constructor(private service: RegistriationService, private ac: ActivatedRoute, private router: Router) { }
  Admission: any;
  id!: number;

  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id']
    this.service.getRegistrationById(this.id).subscribe(data => {
      this.Admission = data
      console.log(this.Admission)
    })
  }

  //constructor(private admissionService: AdmissionService) {}
  public firstNameError = 'First Name is required';
  public lastNameError = 'Last Name is required';

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


  onUpdate(): void {
    this.service.updateRegistration(this.Admission)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['/admin/regestration']);
      });

  }



}

