import { Component, OnInit } from '@angular/core';
//import { Registration } from '../models/registration';
import {Registration} from '../models/registration';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrations: Registration[] = [];
    regModel: Registration;
    showNew: Boolean ;
    //showNew: Boolean = false;
    submitType: string = "Save";
    selectedRow: number;
    // companies: string[] = ["Sr-Developer", "Jr-Developer", "Application-Support"];
    positions: string[] = ["Sr-Developer", "Jr-Developer", "Application-Support"];
  constructor() {
      this.registrations.push(
      new Registration(
        "RAJKUMAR",
        "Bhatt",
        { year: 2021, month: 4, day: 1 },
        { year: 2021, month: 4, day: 1},
        "rajkumar@gmail.com",
        "pass123",
        "Sr-Develope"
      )
    );

    this.registrations.push(
      new Registration(
        "ABC",
        "PQR",
        { year: 2021, month: 4, day: 1 },
        { year: 2021, month: 4, day: 1},
        "abc@gmail.com",
        "pass123",
        "SR Developer"
      )
    );

    this.registrations.push(
      new Registration(
        "PQR",
        "xyz",
        { year: 2021, month: 4, day: 1 },
        { year: 2021, month: 4, day: 1},
        "pqr@gmail.com",
        "pass123",
        "jr Support"
      )
    );
  }

  
onNew() {
  this.regModel = new Registration();
  this.submitType = 'Save';
  this.showNew = true;
  }

onSave() {
  if (this.submitType === 'Save') {
    this.registrations.push(this.regModel);
  } else {
  
  // Update existing 
  
  this.registrations[this.selectedRow].firstName = this.regModel.firstName;  
  this.registrations[this.selectedRow].lastName = this.regModel.lastName;  
  this.registrations[this.selectedRow].dob = this.regModel.dob;
  this.registrations[this.selectedRow].doj = this.regModel.doj;  
  this.registrations[this.selectedRow].email = this.regModel.email;  
  this.registrations[this.selectedRow].password = this.regModel.password;  
  this.registrations[this.selectedRow].position= this.regModel.position;
}
  
  this.showNew = false;
  
}

onEdit(index: number) {
  this.selectedRow = index;
  this.regModel = new Registration();
  // Retrieve selected 
  this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
  this.submitType = 'Update';
  this.showNew = true;
  
}

onDelete(index: number) {
  this.registrations.splice(index, 1);
}

onCancel() {
  this.showNew = false;
}

onChangePosition(position: string) {
  this.regModel.position = position;
}
  ngOnInit() {}
}
