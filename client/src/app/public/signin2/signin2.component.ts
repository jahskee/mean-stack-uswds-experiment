import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-signin2',
  templateUrl: './signin2.component.html',
  styleUrls: ['./signin2.component.scss']
})
export class Signin2Component implements OnInit {

  public email: string;

  public constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        this.email = params["email"];       
    });
  }
  
  ngOnInit() {
  }

}
