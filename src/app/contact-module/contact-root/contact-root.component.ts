import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-root',
  templateUrl: './contact-root.component.html',
  styleUrls: ['./contact-root.component.css']
})
export class ContactRootComponent implements OnInit {

  contactNameGroup: FormGroup;
  contactEmailGroup: FormGroup;
  contactMessageGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactNameGroup = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.contactEmailGroup = this.formBuilder.group({
      email: ['', Validators.email]
    });
    this.contactMessageGroup = this.formBuilder.group({
      message: ['', Validators.required]
    });
  }

  sendEmail($event) {
    document.location.href = "mailto:rushilrshah1@gmail.com";
  }

  submitFeedback() {
    //TODO:Logic to take input and send in email
    console.log("Feedback received");
  }


}
