import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CrudService } from "../../services/crud.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { passwordMatchValidator } from "../../validators/password.validator";
import { InputText } from "../../_components/input-text/input-text";
import { InputPhone } from "../../_components/input-phone/input-phone";
import { InputPasswordConfirm } from "../../_components/input-password-confirm/input-password-confirm";

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
        firstname: new FormControl(
          "",
          Validators.pattern("^[a-zA-z ,']{1,30}$")
        ),
        lastname: new FormControl(
          "",
          Validators.pattern("^[a-zA-z ,']{1,30}$")
        ),
        email: new FormControl(
          "",
          Validators.pattern(
            /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
          )
        ),
        phone: new FormControl(
          "",
          Validators.pattern(/^\(\d{3}\)\s\d{3}\-\d{4}$/)
        ),
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
      return false;
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
