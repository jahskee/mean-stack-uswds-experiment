import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
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
