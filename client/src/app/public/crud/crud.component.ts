import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  contacts = null;
  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.updateContactList();
  }

  updateContactList() {
    this.crudService.list('Contact').subscribe(contacts => {
      this.contacts = contacts;
    });  
  }

}
