import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
//import * as $ from "jquery";

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

  constructor() {}
  
  ngOnInit() {
    $(document).ready(() => {
    
      /* CLICK ERROR ICON IMAGE: 
         note must use arrow function to bind "this" to angular object instance 
      */
      $("body").on("click", '#'+this.controlName+"-error-img", () => {
        $('#'+this.controlName+"-error-img").hide();
        $('#'+this.controlName).focus();
      });


      $('#'+this.controlName).focusin(()=> {
        $('#'+this.controlName+"-error-img").hide();
      })

      $('#'+this.controlName).focusout(()=> {
        $('#'+this.controlName+"-error-img").show();
      })
    
      $('#'+this.controlName).keyup(() => {
        let phone = $('#'+this.controlName)

         let str = phone.val()
         if(str.toString().length === 1 && str !== '(') {      
            phone.val( '('+str);
         }
      })
      /* FORMAT PHONE NUMBER 
         note must use arrow function to bind "this" to angular object instance 
      */
      $(".my-input-phone")
        .keydown(function (e) {
       
          var key = e.charCode || e.keyCode || 0;
          let phone = $(this);
  
          // Auto-format- do not expose the mask as the user begins to type
          if (key !== 8 && key !== 9) {
            if (phone.val().toString().length === 0) {
              phone.val("("+phone.val());
            }
            if (phone.val().toString().length === 4) {
              phone.val(phone.val() + ")");
            }
            if (phone.val().toString().length === 5) {
              phone.val(phone.val() + " ");
            }
            if (phone.val().toString().length === 9) {
              phone.val(phone.val() + "-");
            }        
          }
  
          // Allow numeric (and tab, backspace, delete) keys only
          return (
            key == 8 ||
            key == 9 ||
            key == 46 ||
            (key >= 48 && key <= 57) ||
            (key >= 96 && key <= 105)
          );
        })
  
        .bind("focus click", function () {
          let phone = $(this);
  
          if (phone.val().toString().length === 0) {
            phone.val("(");
          } else {
            var val = phone.val();
            phone.val("").val(val); // Ensure cursor remains at the end
          }
        })
  
        .blur(function () {
          let phone = $(this);
          
          if (phone.val() === "(") {
            phone.val("");
          }
        });
    });
  }
}
