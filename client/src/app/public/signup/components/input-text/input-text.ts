import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

declare var $:JQueryStatic;

@Component({
  selector: "app-input-text",
  styleUrls: ["./input-text.scss"],
  templateUrl: "./input-text.html"
})

export class InputText {
    @Input() formGroup: FormGroup;
    @Input() placeHolder: string;
    @Input() controlName: string;
    @Input() type: string;
    @Input() iconUrl: string;    
    @Input() maxlength: number;
    @Input() validationMsg: string;  
}
