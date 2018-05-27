import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-signin2",
  templateUrl: "./signin2.component.html",
  styleUrls: ["./signin2.component.scss"]
})
export class Signin2Component implements OnInit {
  public email: string;

  public constructor() {}

  ngOnInit() {
    this.email = sessionStorage.getItem("email");
   
    $(document).ready(() => {
      $("#password-sign-in").focus();
    });
   
  }
}
