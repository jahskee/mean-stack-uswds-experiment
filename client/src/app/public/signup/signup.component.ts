import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CrudService } from "../../services/crud.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { passwordMatchValidator } from "../../validators/password.validator";
import { InputPassword1 } from "./components/input.password1";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  constructor(private crudService: CrudService) {}

  @Output() addCustomerEvent = new EventEmitter();

  message = "";
  isShowSuccessMessage = false;
  isShowErrorMessage = false;

  customer: FormGroup;
  ngOnInit() {
    this.customer = new FormGroup(
      {
        firstname: new FormControl("", Validators.required),
        lastname: new FormControl("", Validators.required),
        email: new FormControl("", Validators.required),
        phone: new FormControl("", Validators.required),
        password1: new FormControl("", Validators.required),
        password2: new FormControl("", Validators.required)
      },
      passwordMatchValidator
    );
  }

  onSubmit() {
    this.clearMessages();

    if (!this.customer.valid) {
      this.message = "Customer creation error.";
      this.isShowErrorMessage = true;
      return;
    }

    // reshape customerObj obj literal
    let customerObj = this.customer.value;
    customerObj = {
      ...customerObj,
      password: customerObj.password1,
      createdAt: null,
      updatedAt: null
    };
    delete customerObj.password1;
    delete customerObj.password2;

    try {
      this.crudService.create("Customer", customerObj).subscribe(data => {
        this.addCustomerEvent.emit();
        console.log("create new customer success!");
        this.customer.reset();
      });
      this.message = "Customer created.";
      this.isShowSuccessMessage = true;    
    } catch (err) {
      // console.error(err);
      return false;
    }
  }

  formClick() {
    this.message = "";
    this.clearMessages();
  }

  clearMessages() {
    this.isShowSuccessMessage = false;
    this.isShowErrorMessage = false;
  }
}
