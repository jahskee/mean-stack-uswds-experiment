import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-input",
  styleUrls: ["./input.text.scss"],
  templateUrl: "./input.text.html"
})

export class AppInput {
    @Input() formGroup: FormGroup;
    @Input() placeHolder: string;
    @Input() controlName: string;
    @Input() type: string;
    @Input() iconUrl: string; 
    @Input() validationMsg: string;  
}
