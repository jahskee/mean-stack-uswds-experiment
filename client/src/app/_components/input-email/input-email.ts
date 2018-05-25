import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
//import * as $ from "jquery";

@Component({
  selector: "app-input-email",
  styleUrls: ["./input-email.scss"],
  templateUrl: "./input-email.html"
})

export class InputEmail {
    @Input() formGroup: FormGroup;
    @Input() placeHolder: string;
    @Input() controlName: string;
    @Input() type: string;
    @Input() iconUrl: string;    
    @Input() maxlength: number;
    @Input() validationMsg: string;  

    ngOnInit() {
      $(document).ready(() => {
      
        /* click error icon image: 
           note must use arrow function to bind "this" to angular object instance 
        */
        $("body").on("click", '#'+this.controlName+"-error-img", () => {
          $('#'+this.controlName+"-error-img").hide();
          $('#'+this.controlName).focus();
        });

        $('#'+this.controlName).focusin(()=> {
          $('#'+this.controlName+"-error-img").hide();
        })

        $('#'+this.controlName).focusout(()=> {
          $('#'+this.controlName+"-error-img").show();
        })
      
      });
    }  
}
