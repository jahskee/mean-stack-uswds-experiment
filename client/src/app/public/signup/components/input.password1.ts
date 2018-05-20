import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "input-password1",
  template: `
    <div class='form-control-group' [formGroup]="group">
        <input formControlName="password1" id="password1" placeholder='Password' name="password1" type="password" required>
       
    </div>
    `
})

export class InputPassword1 {
    @Input() group: FormGroup;

}
