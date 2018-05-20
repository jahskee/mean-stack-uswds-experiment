import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "input-password",
  template: `
    <div class='form-control-group' [formGroup]="formGroup">
        <input formControlName="{{controlName}}" id="{{controlName}}" placeholder='{{placeholder}}' name="{{controlName}}" type="{{type}}" required>
    </div>
    `
})

export class InputPassword {
    @Input() formGroup: FormGroup;
    //@Input() placeHolder1: string;
    placeHolder: string ='Password wee';
    @Input() placeholder: string;
    @Input() controlName: string;
    @Input() type: string;
  
}
