import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  customer: FormGroup;

  ngOnInit() {
    this.customer = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
    });
  }

  onSubmit() {   
    const customerObj = this.customer.value;
    /*
    this.contactService.createContact(contactObj).subscribe(data => {
      this.addContactEvent.emit();
      console.log('create new contact success!');
      this.contact.reset();
    });
    this.message = 'Contact created.'
    this.isShowMessage = true;
    console.log('contact: '+JSON.stringify(contactObj))
    */
  }
}
