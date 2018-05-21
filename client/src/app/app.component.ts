import { Component, OnInit } from "@angular/core";

declare var $: JQueryStatic;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Contacts App";

  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
      console.log("Jquery 3.3.1 Initialized...");
    });
  }
}
