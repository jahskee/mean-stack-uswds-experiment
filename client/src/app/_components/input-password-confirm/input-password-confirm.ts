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

    ngOnInit() {
      $(document).ready(() => {
      
        /* click error icon image: 
           note must use arrow function to bind "this" to angular object instance 
        */
        $("body").on("click", '#'+this.controlName+"-error-img", () => {
            //alert(this.controlName+" clicked");
        });

               
      });
    }  
}
