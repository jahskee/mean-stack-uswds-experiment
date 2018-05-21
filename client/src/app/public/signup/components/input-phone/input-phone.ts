import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-input-phone",
  styleUrls: ["./app.input.scss"],
  templateUrl: "./app.input.html"
})

export class InputPhone {
    @Input() formGroup: FormGroup;
    @Input() placeHolder: string;
    @Input() controlName: string;
    @Input() type: string;
    @Input() iconUrl: string; 
    @Input() validationMsg: string;  
}
