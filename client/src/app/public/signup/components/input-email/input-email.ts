import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

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
}
