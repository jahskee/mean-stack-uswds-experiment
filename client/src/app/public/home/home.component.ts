import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
