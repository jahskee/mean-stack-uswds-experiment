import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";


declare var $: any;

@Component({
  selector: "app-input-phone",
  styleUrls: ["./input-phone.scss"],
  templateUrl: "./input-phone.html"
})

export class InputPhone {
    @Input() formGroup: FormGroup;
    @Input() placeHolder: string;
    @Input() controlName: string;
    @Input() type: string;
    @Input() iconUrl: string; 
    @Input() validationMsg: string;  
}
