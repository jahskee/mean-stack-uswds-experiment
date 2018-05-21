import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

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
}
