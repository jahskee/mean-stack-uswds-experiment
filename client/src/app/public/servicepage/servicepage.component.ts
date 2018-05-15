import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.component.html',
  styleUrls: ['./servicepage.component.scss']
})
export class ServicepageComponent implements OnInit {

  contacts = null;
  constructor(private contactService: ContactService) { }
  
  ngOnInit() {
    this.updateContactList();
  }

  updateContactList() {
    this.contactService.listContacts().subscribe(contacts => {
      this.contacts = contacts;
    });  
  }
}
