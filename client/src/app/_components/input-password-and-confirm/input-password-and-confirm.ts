import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
//import * as $ from "jquery";

@Component({
  selector: "app-input-password-and-confirm",
  styleUrls: ["./input-password-and-confirm.scss"],
  templateUrl: "./input-password-and-confirm.html",
})
export class InputPasswordAndConfirm {
  @Input() formGroup: FormGroup;
  @Input() type: string;
  @Input() iconUrl: string;

  @Input() password1: string;
  @Input() validationMsg1: string;
  @Input() placeHolder1: string;

  @Input() password2: string;
  @Input() validationMsg2: string;
  @Input() placeHolder2: string;

  isTouchedPassword2 = false;

  ngOnInit() {
    $(document).ready(() => {
      /* click error icon image: 
           note must use arrow function to bind "this" to angular object instance 
        */
      $("#"+this.password1).focus(() => {
        if (!this.isTouchedPassword2) {
          $("#"+this.password2).focus();
          $("#"+this.password1).focus();
          this.isTouchedPassword2 = true;
        }
      });   
    });
  }
}
