import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "input-password",
  template: `
    <div class='form-control-group' [formGroup]="formGroup">
        <input formControlName="password1" id="password1" placeholder='Password' name="password1" type="password" required>
       
    </div>
    `
})

export class InputPassword {
    @Input() formGroup: FormGroup;
    @Input() placeholder: string;

}
