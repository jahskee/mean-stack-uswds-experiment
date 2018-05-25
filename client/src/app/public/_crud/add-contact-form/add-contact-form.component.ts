import { Component, Output, EventEmitter } from '@angular/core';
import { CrudService } from '../../../_services/_crud-service/crud.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact-form',
  templateUrl: './add-contact-form.component.html',
  styleUrls: ['./add-contact-form.component.scss'],
})

export class AddContactFormComponent {

  constructor(private crudService: CrudService) { }

  @Output() addContactEvent = new EventEmitter();

  message = '';
  isShowMessage = false;

  contact: FormGroup;
  ngOnInit() {
    this.contact = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
  }
  
  onSubmit() {   

    if (!this.contact.valid) {
      this.message = "Contact creation error.";
      this.isShowMessage = true;
      console.log(this.message);
      return 
    }

    const contactObj = this.contact.value;
    try {
      this.crudService.create('Contact', contactObj).subscribe(data => {
        this.addContactEvent.emit();
        console.log('create new contact success!');
        this.contact.reset();
      });
      this.message = 'Contact created.'
      this.isShowMessage = true;
      console.log('contact: '+JSON.stringify(contactObj))
    } catch (err) {
      console.error(err)
    }    
  }

  formClick(){
    this.message = '';
    this.isShowMessage = false;
  }

}
