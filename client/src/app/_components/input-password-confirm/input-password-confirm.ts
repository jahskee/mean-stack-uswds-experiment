import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
//import * as $ from "jquery";

@Component({
  selector: "app-input-password-confirm",
  styleUrls: ["./input-password-confirm.scss"],
  templateUrl: "./input-password-confirm.html"
})
export class InputPasswordConfirm {
  @Input() formGroup: FormGroup;
  @Input() placeHolder: string;
  @Input() controlName: string;
  @Input() type: string;
  @Input() iconUrl: string;
  @Input() validationMsg: string;

  isTouchedPassword2 = false;

  ngOnInit() {
    $(document).ready(() => {
      /* click error icon image: 
           note must use arrow function to bind "this" to angular object instance 
        */
      $("#password1").focus(() => {
        if (!this.isTouchedPassword2) {
          $("#password2").focus();
          $("#password1").focus();
          this.isTouchedPassword2 = true;
        }
      });
      $("body").on("click", "#" + this.controlName + "-error-img", () => {
        //alert(this.controlName+" clicked");
      });
    });
  }
}
