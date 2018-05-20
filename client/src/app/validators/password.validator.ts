import { FormGroup } from "@angular/forms";

export function passwordMatchValidator(formGroup: FormGroup) {
  if (formGroup.get("password1").value !== formGroup.get("password2").value) {
    return { mismatch: true };
  }
  return null;
}
