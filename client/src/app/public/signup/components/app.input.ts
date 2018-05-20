import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-input",
  template: `
    <div class='form-control-group' [formGroup]="formGroup">
        <input formControlName="{{controlName}}" id="{{controlName}}" placeholder='{{placeHolder}}' name="{{controlName}}" type="{{type}}" required>
        <small class="form-text text-danger" 
            *ngIf="formGroup.get(controlName).hasError('required') && formGroup.get(controlName).touched">
            {{placeHolder}} is required!
        </small>
        </div>
    `
})

export class AppInput {
    @Input() formGroup: FormGroup;
    @Input() placeHolder: string;
    @Input() controlName: string;
    @Input() type: string;
  
}
