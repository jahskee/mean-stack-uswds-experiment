webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_common/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"usa-footer usa-footer-big\" role=\"contentinfo\">\n        \n        <div class=\"usa-footer-primary-section\">\n          <div class=\"usa-grid\">\n            <nav class=\"usa-footer-nav usa-width-two-thirds\">\n              <ul class=\"usa-unstyled-list usa-width-one-fourth usa-footer-primary-content\">\n                <li class=\"usa-footer-primary-link\">\n                  <h4>Footer</h4>\n                </li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link that's a bit longer than most of the others</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n              </ul>\n              <ul class=\"usa-unstyled-list usa-width-one-fourth usa-footer-primary-content\">\n                <li class=\"usa-footer-primary-link\">\n                    <h4>Footer</h4>\n                </li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link that's pretty long</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n              </ul>\n              <ul class=\"usa-unstyled-list usa-width-one-fourth usa-footer-primary-content\">\n                <li class=\"usa-footer-primary-link\">\n                    <h4>Footer</h4>\n                </li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n              </ul>\n              <ul class=\"usa-unstyled-list usa-width-one-fourth usa-footer-primary-content\">\n                <li class=\"usa-footer-primary-link\">\n                    <h4>Footer</h4>\n                </li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n                <li class=\"usa-footer-secondary-link\"><a href=\"javascript:void(0);\">Secondary link</a></li>\n              </ul>\n            </nav>\n      \n            <div class=\"usa-sign_up-block usa-width-one-third\">\n              <h3 class=\"usa-sign_up-header\">Sign up</h3>\n      \n              <label class=\"\" for=\"signup_email\" id=\"\">Your email address</label>\n              <input id=\"signup_email\" name=\"signup_email\" type=\"email\">\n      \n              <button type=\"submit\">Sign up</button>\n            </div>\n          </div>\n        </div>\n      \n        <div class=\"usa-footer-secondary_section usa-footer-big-secondary-section\" style='background-color: #006747'>\n          <div class=\"usa-grid\">\n            <div class=\"usa-footer-logo usa-width-one-half\">\n              <img class=\"usa-footer-big-logo-img\" src=\"/assets/img/logo-img.png\" alt=\"\">\n              <h3 class=\"usa-footer-big-logo-heading\">USDA</h3>\n            </div>\n            <div class=\"usa-footer-contact-links usa-width-one-half\">\n              <a class=\"usa-link-facebook\" href=\"javascript:void(0);\">\n                <span>Facebook</span>\n              </a>\n              <a class=\"usa-link-twitter\" href=\"javascript:void(0);\">\n                <span>Twitter</span>\n              </a>\n              <a class=\"usa-link-youtube\" href=\"javascript:void(0);\">\n                <span>YouTube</span>\n              </a>\n              <a class=\"usa-link-rss\" href=\"javascript:void(0);\">\n                <span>RSS</span>\n              </a>\n              <h3 class=\"usa-footer-contact-heading\">Agency Contact Center</h3>\n              <address>\n                <div class=\"usa-footer-primary-content usa-footer-contact_info\">\n                  <p>\n                    <a href=\"tel:1-800-555-5555\">(800) CALL-GOVT</a>\n                  </p>\n                </div>\n                <div class=\"usa-footer-primary-content usa-footer-contact_info\">\n                  <p><a href=\"mailto:info@agency.gov\">info@agency.gov</a></p>\n                </div>\n              </address>\n            </div>\n          </div>\n        </div>\n      </footer>"

/***/ }),

/***/ "./src/app/_common/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "/*\nfooter {  \n  //position:absolute;\n  bottom:0;\n  width:100%;\n  height:50px;\n  background:rgb(145, 199, 226);\n}\n\np {\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n*/\n"

/***/ }),

/***/ "./src/app/_common/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/_common/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/_common/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "./src/app/_common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"my-header\">\n  <div id='my-header-gov' class=\"usa-banner\">\n    <div class=\"usa-accordion\">\n      <header class=\"usa-banner-header\">\n        <div class=\"usa-grid usa-banner-inner\" style='width: 600px; margin-left:0; text-align: left'>\n          <img src=\"/assets/uswds-1.6.3/img/favicons/favicon-57.png\" alt=\"U.S. flag\">\n          <span>An official website of the United States government</span>\n          <button class=\"usa-accordion-button usa-banner-button\" aria-expanded=\"false\" aria-controls=\"gov-banner\">\n            <span class=\"usa-banner-button-text\">Here's how you know</span>\n          </button>\n        </div>\n      </header>\n      <div class=\"usa-banner-content usa-grid usa-accordion-content\" id=\"gov-banner\">\n        <div class=\"usa-banner-guidance-gov usa-width-one-half\">\n          <img class=\"usa-banner-icon usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/icon-dot-gov.svg\" alt=\"Dot gov\">\n          <div class=\"usa-media_block-body\">\n            <p>\n              <strong>The .gov means it’s official.</strong>\n              <br> Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you’re\n              on a federal government site.\n            </p>\n          </div>\n        </div>\n        <div class=\"usa-banner-guidance-ssl usa-width-one-half\">\n          <img class=\"usa-banner-icon usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/icon-https.svg\" alt=\"Https\">\n          <div class=\"usa-media_block-body\">\n            <p>\n              <strong>The site is secure.</strong>\n              <br> The\n              <strong>https://</strong> ensures that you are connecting to the official website and that any information you provide\n              is encrypted and transmitted securely.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<header id='my-header' class=\"usa-header usa-header-basic\" role=\"banner\">\n  <div id='my-header-logo'>   \n      <img id='my-logo-image'src='/assets/images/logo/usda-circle.png' >\n      <div>\n        <h2 id='my-logo-title1' class=\"usa-hero-callout-alt\">KickStart MEAN</h2>\n        <h4 id='my-logo-title2'>Scalability, Responsive Web Design</h4>\n      </div>     \n  </div>\n</header>\n\n<div id=\"my-menu-search\">\n     <button id=\"my-menu-mobile\" class=\"usa-menu-btn\" role=\"menu\">Menu</button>\n \n     <nav class=\"usa-nav\" role=\"navigation\">\n       <!-- <button class=\"usa-nav-close\">\n          <img src=\"/assets/uswds-1.6.3/img/close.svg\" alt=\"close\">\n        </button> -->\n        <ul class=\"usa-nav-primary usa-accordion\">\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/\">\n              <span>Home</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/service\">\n              <span>Services</span>\n            </a>\n    \n          </li>\n          <!--\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/crud\">\n              <span>CRUD</span>\n            </a>\n          </li>\n          -->\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/contactus\">\n              <span>Contact Us</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/signin\">\n              <span>Sign In</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/signup\">\n              <span>Sign Up</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n  <form id='my-search-box' class=\"usa-search usa-search-small\"  role=\"search\">   \n   \n      <input id=\"my-search-input\" type=\"search\" name=\"search\">\n      <button type=\"submit\">\n        <span class=\"usa-sr-only\">Search</span>\n      </button>\n   \n  </form>\n</div> <!-- end menu-search-->\n\n<div class=\"usa-overlay\"></div>\n<main id=\"main-content\"></main>\n"

/***/ }),

/***/ "./src/app/_common/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_common/header/header.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
//import * as $ from "jquery";
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $(".usa-overlay, .usa-nav").click(function (event) {
                $(".usa-nav").attr("class", "usa-nav");
                $("body").attr("class", "vsc-initialized");
                $(".usa-overlay").attr("class", "usa-overlay");
                event.stopImmediatePropagation();
            });
        });
    };
    HeaderComponent.prototype.clickSignIn = function () {
        this.router.navigateByUrl('/login');
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/_common/header/header.component.html"),
            styles: [__webpack_require__("./src/app/_common/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/_components/input-email/input-email.html":
/***/ (function(module, exports) {

module.exports = "<div class='form-control-group' [formGroup]='formGroup' title=\"{{validationMsg}}\">\n\n    <div class=\"input-icon-container\">\n        <input class='input' formControlName='{{controlName}}' id='{{controlName}}' placeholder='{{placeHolder}}' name=\"{{controlName}}\"\n            type=\"{{type}}\" required aria-required='true' style=\"text-transform: lowercase;\" maxlength=\"{{maxlength}}\">\n        <span *ngIf=\"iconUrl\">\n            <img class=\"input-icon-img\" src=\"{{iconUrl}}\">\n        </span>\n\n        <span *ngIf=\"formGroup.get(controlName).valid && formGroup.get(controlName).touched\">\n            <img class=\"input-error-img\" src=\"https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/137/f-check_256-16.png\">\n\n        </span>\n        <span *ngIf=\"formGroup.get(controlName).invalid && formGroup.get(controlName).touched\">\n            <img \n                class=\"input-error-img\" \n                id=\"{{controlName}}-error-img\" \n                src=\"https://cdn0.iconfinder.com/data/icons/basic-ui-elements-colored/700/05_exclamation-3-16.png\"\n             >\n            <small style=\"padding-left: 1rem;\">\n                {{validationMsg}}\n            </small>\n        </span>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/input-email/input-email.scss":
/***/ (function(module, exports) {

module.exports = ".input-icon-container {\n  position: relative;\n  padding: 0;\n  margin: 0; }\n\n.input {\n  border-radius: 10px;\n  margin: 0;\n  padding-left: 35px; }\n\n.input-error {\n  border: 1px solid red; }\n\n.input-icon-img {\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  width: 14px;\n  height: 14px; }\n\n.input-error-img {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 16px;\n  height: 16px;\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n  /* For IE8 and earlier */ }\n\n.form-control-group {\n  padding-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/_components/input-email/input-email.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
//import * as $ from "jquery";
var InputEmail = /** @class */ (function () {
    function InputEmail() {
    }
    InputEmail.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () {
            /* click error icon image:
               note must use arrow function to bind "this" to angular object instance
            */
            $("body").on("click", '#' + _this.controlName + "-error-img", function () {
                $('#' + _this.controlName + "-error-img").hide();
                $('#' + _this.controlName).focus();
            });
            $('#' + _this.controlName).focusin(function () {
                $('#' + _this.controlName + "-error-img").hide();
            });
            $('#' + _this.controlName).focusout(function () {
                $('#' + _this.controlName + "-error-img").show();
            });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup)
    ], InputEmail.prototype, "formGroup", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputEmail.prototype, "placeHolder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputEmail.prototype, "controlName", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputEmail.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputEmail.prototype, "iconUrl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], InputEmail.prototype, "maxlength", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputEmail.prototype, "validationMsg", void 0);
    InputEmail = __decorate([
        core_1.Component({
            selector: "app-input-email",
            styles: [__webpack_require__("./src/app/_components/input-email/input-email.scss")],
            template: __webpack_require__("./src/app/_components/input-email/input-email.html")
        })
    ], InputEmail);
    return InputEmail;
}());
exports.InputEmail = InputEmail;


/***/ }),

/***/ "./src/app/_components/input-password-confirm/input-password-confirm.html":
/***/ (function(module, exports) {

module.exports = "<div class='form-control-group' [formGroup]='formGroup' title=\"{{validationMsg}}\">\n\n    <div class=\"input-icon-container\">\n        <input class='input' formControlName='{{controlName}}' id='{{controlName}}' placeholder='{{placeHolder}}' name=\"{{controlName}}\"\n            type=\"{{type}}\" required aria-required='true'>\n        <span *ngIf=\"iconUrl\">\n            <img class=\"input-icon-img\" src=\"{{iconUrl}}\">\n        </span>\n        <span *ngIf=\"(!formGroup.hasError('mismatch') || formGroup.get(controlName).valid) && formGroup.get(controlName).touched\">\n            <img class=\"input-error-img\" src=\"https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/137/f-check_256-16.png\">\n\n        </span>\n        <span *ngIf=\"(formGroup.hasError('mismatch') || (formGroup.get(controlName).invalid) && formGroup.get(controlName).touched)\">\n            <img \n                class=\"input-error-img\" \n                id=\"{{controlName}}-error-img\" \n                src=\"https://cdn0.iconfinder.com/data/icons/basic-ui-elements-colored/700/05_exclamation-3-16.png\"\n            >\n            <small style=\"padding-left: 1rem;\">\n                {{validationMsg}}\n            </small>\n        </span>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/_components/input-password-confirm/input-password-confirm.scss":
/***/ (function(module, exports) {

module.exports = ".input-icon-container {\n  position: relative;\n  padding: 0;\n  margin: 0; }\n\n.input {\n  border-radius: 10px;\n  margin: 0;\n  padding-left: 35px; }\n\n.input-error {\n  border: 1px solid red; }\n\n.input-icon-img {\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  width: 14px;\n  height: 14px; }\n\n.input-error-img {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 16px;\n  height: 16px;\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n  /* For IE8 and earlier */ }\n\n.form-control-group {\n  padding-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/_components/input-password-confirm/input-password-confirm.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
//import * as $ from "jquery";
var InputPasswordConfirm = /** @class */ (function () {
    function InputPasswordConfirm() {
    }
    InputPasswordConfirm.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () {
            /* click error icon image:
               note must use arrow function to bind "this" to angular object instance
            */
            $("body").on("click", '#' + _this.controlName + "-error-img", function () {
                //alert(this.controlName+" clicked");
            });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup)
    ], InputPasswordConfirm.prototype, "formGroup", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputPasswordConfirm.prototype, "placeHolder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputPasswordConfirm.prototype, "controlName", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputPasswordConfirm.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputPasswordConfirm.prototype, "iconUrl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputPasswordConfirm.prototype, "validationMsg", void 0);
    InputPasswordConfirm = __decorate([
        core_1.Component({
            selector: "app-input-password-confirm",
            styles: [__webpack_require__("./src/app/_components/input-password-confirm/input-password-confirm.scss")],
            template: __webpack_require__("./src/app/_components/input-password-confirm/input-password-confirm.html")
        })
    ], InputPasswordConfirm);
    return InputPasswordConfirm;
}());
exports.InputPasswordConfirm = InputPasswordConfirm;


/***/ }),

/***/ "./src/app/_components/input-phone/input-phone.html":
/***/ (function(module, exports) {

module.exports = "<div class='form-control-group' [formGroup]='formGroup' title=\"{{validationMsg}}\">\n\n    <div class=\"input-icon-container\">\n        <input class=\"input my-input-phone\" formControlName=\"{{controlName}}\" id=\"{{controlName}}\" placeholder=\"{{placeHolder}}\" name=\"{{controlName}}\"\n            type=\"{{type}}\" required aria-required=\"true\" maxlength=\"14\">\n        <span *ngIf=\"iconUrl\">\n            <img class=\"input-icon-img\" src=\"{{iconUrl}}\">\n        </span>\n\n        <span *ngIf=\"formGroup.get(controlName).valid && formGroup.get(controlName).touched\">\n            <img class=\"input-error-img\" src=\"https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/137/f-check_256-16.png\">\n\n        </span>\n        <span *ngIf=\"formGroup.get(controlName).invalid && formGroup.get(controlName).touched\">\n            <img \n                class=\"input-error-img\" \n                id=\"{{controlName}}-error-img\" \n                src=\"https://cdn0.iconfinder.com/data/icons/basic-ui-elements-colored/700/05_exclamation-3-16.png\"\n            >\n            \n            <small style=\"padding-left: 1rem;\">\n                {{validationMsg}}\n            </small>\n        </span>\n    </div>\n</div>\n<script src=\"/assets/javascript/script.js\"></script>\n\n"

/***/ }),

/***/ "./src/app/_components/input-phone/input-phone.scss":
/***/ (function(module, exports) {

module.exports = ".input-icon-container {\n  position: relative;\n  padding: 0;\n  margin: 0; }\n\n.input {\n  border-radius: 10px;\n  margin: 0;\n  padding-left: 35px; }\n\n.input-error {\n  border: 1px solid red; }\n\n.input-icon-img {\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  width: 14px;\n  height: 14px; }\n\n.input-error-img {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 16px;\n  height: 16px;\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n  /* For IE8 and earlier */ }\n\n.form-control-group {\n  padding-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/_components/input-phone/input-phone.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
//import * as $ from "jquery";
var InputPhone = /** @class */ (function () {
    function InputPhone() {
    }
    InputPhone.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () {
            /* CLICK ERROR ICON IMAGE:
               note must use arrow function to bind "this" to angular object instance
            */
            $("body").on("click", '#' + _this.controlName + "-error-img", function () {
                $('#' + _this.controlName + "-error-img").hide();
                $('#' + _this.controlName).focus();
            });
            $('#' + _this.controlName).focusin(function () {
                $('#' + _this.controlName + "-error-img").hide();
            });
            $('#' + _this.controlName).focusout(function () {
                $('#' + _this.controlName + "-error-img").show();
            });
            $('#' + _this.controlName).keyup(function () {
                var phone = $('#' + _this.controlName);
                var str = phone.val();
                if (str.toString().length === 1 && str !== '(') {
                    phone.val('(' + str);
                }
            });
            /* FORMAT PHONE NUMBER
               note must use arrow function to bind "this" to angular object instance
            */
            $(".my-input-phone")
                .keydown(function (e) {
                var key = e.charCode || e.keyCode || 0;
                var phone = $(this);
                // Auto-format- do not expose the mask as the user begins to type
                if (key !== 8 && key !== 9) {
                    if (phone.val().toString().length === 0) {
                        phone.val("(" + phone.val());
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
                return (key == 8 ||
                    key == 9 ||
                    key == 46 ||
                    (key >= 48 && key <= 57) ||
                    (key >= 96 && key <= 105));
            })
                .bind("focus click", function () {
                var phone = $(this);
                if (phone.val().toString().length === 0) {
                    phone.val("(");
                }
                else {
                    var val = phone.val();
                    phone.val("").val(val); // Ensure cursor remains at the end
                }
            })
                .blur(function () {
                var phone = $(this);
                if (phone.val() === "(") {
                    phone.val("");
                }
            });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup)
    ], InputPhone.prototype, "formGroup", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputPhone.prototype, "placeHolder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputPhone.prototype, "controlName", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputPhone.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputPhone.prototype, "iconUrl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputPhone.prototype, "validationMsg", void 0);
    InputPhone = __decorate([
        core_1.Component({
            selector: "app-input-phone",
            styles: [__webpack_require__("./src/app/_components/input-phone/input-phone.scss")],
            template: __webpack_require__("./src/app/_components/input-phone/input-phone.html")
        }),
        __metadata("design:paramtypes", [])
    ], InputPhone);
    return InputPhone;
}());
exports.InputPhone = InputPhone;


/***/ }),

/***/ "./src/app/_components/input-text/input-text.html":
/***/ (function(module, exports) {

module.exports = "<div class='form-control-group' [formGroup]='formGroup' title=\"{{validationMsg}}\">\n\n    <div class=\"input-icon-container\">\n        \n        <input class='input' formControlName='{{controlName}}' id='{{controlName}}' placeholder='{{placeHolder}}' name=\"{{controlName}}\"\n            type=\"{{type}}\" required aria-required='true' style=\"text-transform: capitalize;\" maxlength=\"{{maxlength}}\"\n            autocomplete=\"off\">\n        <span *ngIf=\"iconUrl\">\n            <img class=\"input-icon-img\" src=\"{{iconUrl}}\">\n        </span>\n\n\n        <span *ngIf=\"formGroup.get(controlName).valid && formGroup.get(controlName).touched\">\n            <img class=\"input-error-img\" src=\"https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/137/f-check_256-16.png\">\n\n        </span>\n        <span *ngIf=\"formGroup.get(controlName).invalid && formGroup.get(controlName).touched\">\n            <img class=\"input-error-img\" \n                 id=\"{{controlName}}-error-img\" \n                 src=\"https://cdn0.iconfinder.com/data/icons/basic-ui-elements-colored/700/05_exclamation-3-16.png\"\n            >\n\n            <small style=\"padding-left: 1rem;\">\n                {{validationMsg}}\n            </small>\n        </span>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/_components/input-text/input-text.scss":
/***/ (function(module, exports) {

module.exports = ".input-icon-container {\n  position: relative;\n  padding: 0;\n  margin: 0; }\n\n.input {\n  border-radius: 10px;\n  margin: 0;\n  padding-left: 35px; }\n\n.input-error {\n  border: 1px solid red; }\n\n.input-icon-img {\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  width: 14px;\n  height: 14px; }\n\n.input-error-img {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 16px;\n  height: 16px;\n  opacity: 0.7;\n  filter: alpha(opacity=70);\n  /* For IE8 and earlier */ }\n\n.form-control-group {\n  padding-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/_components/input-text/input-text.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
//import * as $ from "jquery";
var InputText = /** @class */ (function () {
    function InputText() {
    }
    InputText.prototype.ngOnInit = function () {
        var _this = this;
        $(document).ready(function () {
            /* click error icon image:
            note must use arrow function to bind "this" to angular object instance
            */
            $("body").on("click", '#' + _this.controlName + "-error-img", function () {
                $('#' + _this.controlName + "-error-img").hide();
                $('#' + _this.controlName).focus();
            });
            $('#' + _this.controlName).focusin(function () {
                $('#' + _this.controlName + "-error-img").hide();
            });
            $('#' + _this.controlName).focusout(function () {
                $('#' + _this.controlName + "-error-img").show();
            });
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", forms_1.FormGroup)
    ], InputText.prototype, "formGroup", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputText.prototype, "placeHolder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputText.prototype, "controlName", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputText.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputText.prototype, "iconUrl", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], InputText.prototype, "maxlength", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InputText.prototype, "validationMsg", void 0);
    InputText = __decorate([
        core_1.Component({
            selector: "app-input-text",
            styles: [__webpack_require__("./src/app/_components/input-text/input-text.scss")],
            template: __webpack_require__("./src/app/_components/input-text/input-text.html")
        })
    ], InputText);
    return InputText;
}());
exports.InputText = InputText;


/***/ }),

/***/ "./src/app/_services/_crud-service/crud.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
// node express generic crud
// https://www.npmjs.com/package/node-express-crud-router
var CrudService = /** @class */ (function () {
    function CrudService(http) {
        this.http = http;
        this.apiurl = environment_1.environment.apiurl;
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphaHNrZWVAeWFob28uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTI2MTU0ODA0LCJleHAiOjMxNTU1MjYxNTQ4MDR9.Sac4KgisLlJjknCVrPSK8YU5wusu0I69OlffwcEcJho';
    }
    CrudService.prototype.list = function (modelName) {
        return this.http.get(this.apiurl + "/api/" + modelName.toLowerCase() + "s?token=" + this.token);
    };
    CrudService.prototype.create = function (modelName, dataObj) {
        var url = this.apiurl + "/api/" + modelName.toLowerCase() + "s?token=" + this.token;
        return this.http.post(url, dataObj);
    };
    CrudService.prototype.read = function (modelName, id) {
        return this.http.get(this.apiurl + "/api/" + modelName.toLowerCase() + "s/" + id + "?token=" + this.token);
    };
    // bulk update is possible, see documentation
    CrudService.prototype.update = function (modelName, dataObj) {
        var url = this.apiurl + "/api/" + modelName.toLowerCase() + "s/" + dataObj._id + "?token=" + this.token;
        return this.http.put(url, dataObj);
    };
    CrudService.prototype.delete = function (modelName, id) {
        return this.http.delete(this.apiurl + "/api/" + modelName.toLowerCase() + "s/" + id + "?token=" + this.token);
    };
    CrudService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CrudService);
    return CrudService;
}());
exports.CrudService = CrudService;


/***/ }),

/***/ "./src/app/_services/app-service/app.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.apiurl = environment_1.environment.apiurl;
    }
    AppService.prototype.getToken = function () {
        var data = { key: 'hello' };
        return this.http.post("https://www.stratteos.us/token", data);
        //return this.http.post(`${this.apiurl}/token`, data, httpOptions);
    };
    AppService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;


/***/ }),

/***/ "./src/app/_validators/password.validator.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function passwordMatchValidator(formGroup) {
    if (formGroup.get("password1").value !== formGroup.get("password2").value) {
        return { mismatch: true };
    }
    return null;
}
exports.passwordMatchValidator = passwordMatchValidator;


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center;\" class='container-fluid'>\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>  \n\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding: 0; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Contacts App";
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var cookies_service_1 = __webpack_require__("./node_modules/angular2-cookie/services/cookies.service.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var header_component_1 = __webpack_require__("./src/app/_common/header/header.component.ts");
var footer_component_1 = __webpack_require__("./src/app/_common/footer/footer.component.ts");
var add_contact_form_component_1 = __webpack_require__("./src/app/public/_crud/add-contact-form/add-contact-form.component.ts");
var contact_list_component_1 = __webpack_require__("./src/app/public/_crud/contact-list/contact-list.component.ts");
var page2_component_1 = __webpack_require__("./src/app/public/page2/page2.component.ts");
var crud_service_1 = __webpack_require__("./src/app/_services/_crud-service/crud.service.ts");
var app_service_1 = __webpack_require__("./src/app/_services/app-service/app.service.ts");
var forms_2 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var signin_component_1 = __webpack_require__("./src/app/public/signin/signin.component.ts");
var servicepage_component_1 = __webpack_require__("./src/app/public/servicepage/servicepage.component.ts");
var password_reset_component_1 = __webpack_require__("./src/app/public/password-reset/password-reset.component.ts");
var home_component_1 = __webpack_require__("./src/app/public/home/home.component.ts");
var crud_component_1 = __webpack_require__("./src/app/public/_crud/crud.component.ts");
var signup_component_1 = __webpack_require__("./src/app/public/signup/signup.component.ts");
var contactus_component_1 = __webpack_require__("./src/app/public/contactus/contactus.component.ts");
var input_text_1 = __webpack_require__("./src/app/_components/input-text/input-text.ts");
var input_email_1 = __webpack_require__("./src/app/_components/input-email/input-email.ts");
var input_phone_1 = __webpack_require__("./src/app/_components/input-phone/input-phone.ts");
var input_password_confirm_1 = __webpack_require__("./src/app/_components/input-password-confirm/input-password-confirm.ts");
var routes = [
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'contactus', component: contactus_component_1.ContactusComponent },
    { path: 'service', component: servicepage_component_1.ServicepageComponent },
    { path: 'crud', component: crud_component_1.CrudComponent },
    { path: 'page2/:contactId', component: page2_component_1.Page2Component },
    { path: 'passwordreset', component: password_reset_component_1.PasswordResetComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '**', component: home_component_1.HomeComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                add_contact_form_component_1.AddContactFormComponent,
                contact_list_component_1.ContactListComponent,
                page2_component_1.Page2Component,
                signin_component_1.SigninComponent,
                servicepage_component_1.ServicepageComponent,
                password_reset_component_1.PasswordResetComponent,
                home_component_1.HomeComponent,
                crud_component_1.CrudComponent,
                signup_component_1.SignupComponent,
                contactus_component_1.ContactusComponent,
                input_text_1.InputText, input_phone_1.InputPhone, input_password_confirm_1.InputPasswordConfirm, input_email_1.InputEmail,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_2.ReactiveFormsModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes),
            ],
            providers: [cookies_service_1.CookieService, crud_service_1.CrudService, app_service_1.AppService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/public/_crud/add-contact-form/add-contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"add-contact-form\" (click)='formClick()' style=\"margin-right: 1rem; margin-top: 1rem\">\n  \n    <div>\n        <form class=\"usa-form\" (ngSubmit)='onSubmit(contact)' [formGroup]='contact'>\n            \n            <fieldset>\n                <div>\n                    <div class='form-group'>\n                        <input type='text' placeholder=\"Firstname\" formControlName='firstname'  />\n                        <small class=\"form-text text-danger\" *ngIf=\"contact.get('firstname').hasError('required') && contact.get('firstname').touched\">\n                            Firstname is required!\n                        </small>\n                    </div>\n\n                    <div class='form-group'>\n                        <input type='text' placeholder=\"Lastname\" formControlName='lastname' class='form-control' />\n                        <small class=\"form-text text-danger\" *ngIf=\"contact.get('lastname').hasError('required') && contact.get('lastname').touched\">\n                            Lastname is required!\n                        </small>\n                    </div>\n\n                    <div class='form-group'>\n                        <input type='text' placeholder=\"Phone\" formControlName='phone' class='form-control' />\n                        <small class=\"form-text text-danger\" *ngIf=\"contact.get('phone').hasError('required') && contact.get('phone').touched\">\n                            Phone is required!\n                        </small>\n                    </div>\n                </div>\n                \n                <div class='alert alert-success' style='margin: 0;margin-bottom: 5px;' *ngIf=\"isShowMessage\">\n                    {{message}}\n                </div>\n                <button type='submit'> Add Contact </button>\n            </fieldset>\n        </form>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/public/_crud/add-contact-form/add-contact-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/_crud/add-contact-form/add-contact-form.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var crud_service_1 = __webpack_require__("./src/app/_services/_crud-service/crud.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var AddContactFormComponent = /** @class */ (function () {
    function AddContactFormComponent(crudService) {
        this.crudService = crudService;
        this.addContactEvent = new core_1.EventEmitter();
        this.message = '';
        this.isShowMessage = false;
    }
    AddContactFormComponent.prototype.ngOnInit = function () {
        this.contact = new forms_1.FormGroup({
            firstname: new forms_1.FormControl('', forms_1.Validators.required),
            lastname: new forms_1.FormControl('', forms_1.Validators.required),
            phone: new forms_1.FormControl('', forms_1.Validators.required),
        });
    };
    AddContactFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.contact.valid) {
            this.message = "Contact creation error.";
            this.isShowMessage = true;
            console.log(this.message);
            return;
        }
        var contactObj = this.contact.value;
        try {
            this.crudService.create('Contact', contactObj).subscribe(function (data) {
                _this.addContactEvent.emit();
                console.log('create new contact success!');
                _this.contact.reset();
            });
            this.message = 'Contact created.';
            this.isShowMessage = true;
            console.log('contact: ' + JSON.stringify(contactObj));
        }
        catch (err) {
            console.error(err);
        }
    };
    AddContactFormComponent.prototype.formClick = function () {
        this.message = '';
        this.isShowMessage = false;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AddContactFormComponent.prototype, "addContactEvent", void 0);
    AddContactFormComponent = __decorate([
        core_1.Component({
            selector: 'app-add-contact-form',
            template: __webpack_require__("./src/app/public/_crud/add-contact-form/add-contact-form.component.html"),
            styles: [__webpack_require__("./src/app/public/_crud/add-contact-form/add-contact-form.component.scss")],
        }),
        __metadata("design:paramtypes", [crud_service_1.CrudService])
    ], AddContactFormComponent);
    return AddContactFormComponent;
}());
exports.AddContactFormComponent = AddContactFormComponent;


/***/ }),

/***/ "./src/app/public/_crud/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact-list\">\n       <table style='margin-top:1rem'>\n          <caption style='margin-bottom:5px'>Bordered table</caption>\n          <thead>\n              <tr>\n                  <th scope=\"col\">ID</th>\n                  <th scope=\"col\">First</th>\n                  <th scope=\"col\">Last</th>\n                  <th scope=\"col\">Phone</th>\n                  <th scope=\"col\">Action</th>\n                </tr>\n          \n          </thead>\n          <tbody>\n              <tr *ngFor='let contact of contacts' >\n                  <th scope=\"row\">{{contact._id}}</th>\n                  <td>{{contact.firstname}}</td>\n                  <td>{{contact.lastname}}</td>\n                  <td>{{contact.phone}}</td>\n                  <td><a routerLink='/page2/{{contact._id}}' routerLinkActive='active'>Edit/Del</a></td>\n              </tr>\n            </tbody>\n      </table>\n      \n</div>"

/***/ }),

/***/ "./src/app/public/_crud/contact-list/contact-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/_crud/contact-list/contact-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ContactListComponent = /** @class */ (function () {
    function ContactListComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ContactListComponent.prototype, "contacts", void 0);
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-list',
            template: __webpack_require__("./src/app/public/_crud/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("./src/app/public/_crud/contact-list/contact-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;


/***/ }),

/***/ "./src/app/public/_crud/crud.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page1\" >\n        <legend class=\"usa-drop_text\">New Contact</legend>\n    <app-add-contact-form (addContactEvent)=\"updateContactList()\"></app-add-contact-form>\n    <app-contact-list [contacts]=\"contacts\" > </app-contact-list>\n</div>\n<div class=\"usa-grid usa-footer-return-to-top\">\n    <a href=\"/crud#\">Return to top</a>\n</div>"

/***/ }),

/***/ "./src/app/public/_crud/crud.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/_crud/crud.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var crud_service_1 = __webpack_require__("./src/app/_services/_crud-service/crud.service.ts");
var CrudComponent = /** @class */ (function () {
    function CrudComponent(crudService) {
        this.crudService = crudService;
        this.contacts = null;
    }
    CrudComponent.prototype.ngOnInit = function () {
        this.updateContactList();
    };
    CrudComponent.prototype.updateContactList = function () {
        var _this = this;
        this.crudService.list('Contact').subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    CrudComponent = __decorate([
        core_1.Component({
            selector: 'app-crud',
            template: __webpack_require__("./src/app/public/_crud/crud.component.html"),
            styles: [__webpack_require__("./src/app/public/_crud/crud.component.scss")]
        }),
        __metadata("design:paramtypes", [crud_service_1.CrudService])
    ], CrudComponent);
    return CrudComponent;
}());
exports.CrudComponent = CrudComponent;


/***/ }),

/***/ "./src/app/public/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"usa-form\" style=\"margin: 0 auto\" (ngSubmit)='onSubmit(contactus)' [formGroup]='contactus'>\n  <fieldset>\n      <legend class=\"usa-drop_text\">Contact Us</legend>\n      <input formControlName='firstname' id=\"first-name\" placeholder='First Name' name=\"first-name\" type=\"text\" required aria-required=\"true\">\n      <input formControlName='lastname' id=\"last-name\" placeholder='Last Name' name=\"last-name\" type=\"text\" required aria-required=\"true\">\n      <input formControlName='email' id=\"email\" name=\"email\" placeholder='Email' type=\"text\">\n      <input formControlName='phone' id=\"phone\" placeholder='Phone' name=\"phone\" type=\"text\" required aria-required=\"true\">   \n  </fieldset>\n  <input type=\"submit\" value=\"Submit\">\n</form>\n<div class=\"usa-grid usa-footer-return-to-top\">\n  <a href=\"/contactus#\">Return to top</a>\n</div>"

/***/ }),

/***/ "./src/app/public/contactus/contactus.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/contactus/contactus.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        core_1.Component({
            selector: 'app-contactus',
            template: __webpack_require__("./src/app/public/contactus/contactus.component.html"),
            styles: [__webpack_require__("./src/app/public/contactus/contactus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());
exports.ContactusComponent = ContactusComponent;


/***/ }),

/***/ "./src/app/public/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n    <!-- <div class=\"usa-overlay\"></div> -->\n\n    <main id=\"main-content\"></main>\n\n    <section class=\"usa-hero\">\n        <div class=\"usa-grid\">\n            <div class=\"usa-hero-callout usa-section-dark\">\n                <h2>\n                <span class=\"usa-hero-callout-alt\">Hero callout:</span>\n                    Call attention to a current priority\n                </h2>\n                <p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p>\n                <a class=\"usa-button\" href=\"javascript:void(0)\">Learn about what we do</a>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"usa-grid usa-section\">\n        <div class=\"usa-width-one-third\">\n            <h2>A tagline highlights your approach.</h2>\n        </div>\n        <div class=\"usa-width-two-thirds\">\n            <p>The tagline should inspire confidence and interest, focusing on the value that your overall approach offers to\n                your audience. Use a heading typeface and keep your tagline to just a few words, and don’t confuse or mystify.</p>\n            <p>Use the right side of the grid to explain the tagline a bit more. What are your goals? How do you do your work?\n                Write in the present tense, and stay brief here. People who are interested can find details on internal pages.</p>\n        </div>\n    </section>\n\n\n    <section class=\"usa-section usa-section-dark usa-graphic_list\">\n        <div class=\"usa-grid usa-graphic_list-row\">\n            <div class=\"usa-width-one-half usa-media_block\">\n                <img class=\"usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n                <div class=\"usa-media_block-body\">\n                    <h3>Graphic headings can vary.</h3>\n                    <p>Graphic headings can be used a few different ways, depending on what your landing page is for. Highlight\n                        your values, specific program areas, or results.</p>\n                </div>\n            </div>\n            <div class=\"usa-width-one-half usa-media_block\">\n                <img class=\"usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n                <div class=\"usa-media_block-body\">\n                    <h3>Stick to 6 or fewer words.</h3>\n                    <p>Keep body text to about 30. They can be shorter, but try to be somewhat balanced across all four. It\n                        creates a clean appearance with good spacing.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"usa-grid usa-graphic_list-row\">\n            <div class=\"usa-width-one-half usa-media_block\">\n                <img class=\"usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n                <div class=\"usa-media_block-body\">\n                    <h3>Never highlight anything without a goal.</h3>\n                    <p>For anything you want to highlight here, understand what your users know now, and what activity or impression\n                        you want from them after they see it.</p>\n                </div>\n            </div>\n            <div class=\"usa-width-one-half usa-media_block\">\n                <img class=\"usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n                <div class=\"usa-media_block-body\">\n                    <h3>Could also have 2 or 6.</h3>\n                    <p>In addition to your goal, find out your users’ goals. What do they want to know or do that supports your\n                        mission? Use these headings to show those.</p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n\n    <section class=\"usa-section\">\n        <div class=\"usa-grid\">\n            <h2>Section heading</h2>\n            <p class=\"usa-font-lead\">Everything up to this point should help people understand your agency or project: who you are, your goal or mission,\n                and how you approach it. Use this section to encourage them to act. Describe why they should get in touch\n                here, and use an active verb on the button below. “Get in touch,” “Learn more,” and so on.</p>\n            <a class=\"usa-button usa-button-big\" href=\"#\">Call to action</a>\n        </div>\n    </section>\n</main>\n\n<div class=\"usa-grid usa-footer-return-to-top\">\n    <a href=\"/#\">Return to top</a>\n</div>"

/***/ }),

/***/ "./src/app/public/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "#page1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n"

/***/ }),

/***/ "./src/app/public/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.contacts = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/public/home/home.component.html"),
            styles: [__webpack_require__("./src/app/public/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/public/page2/page2.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='page2' style='margin-top: 0'>\n  \n  <div id='contact-view'  class=\"card\">\n      <div class='card-header'>\n          <h4>View Contact</h4>\n      </div>\n      <div class='card-body'>\n          <div id='row2'>\n              <div id='photo'>\n                <img src='/assets/images/blank-face.jpeg'>\n              </div>\n              <div id='info' *ngIf='isEditMode'>\n                <form (ngSubmit)='onSubmitSave(contact.id)' [formGroup]='contactForm' >\n                  <table>\n                    <tr>\n                      <td id='label'>ID</td>               \n                      \n                      <td id='input'>\n                        <span>{{contact._id}}</span>                 \n                      </td>\n                    </tr>\n                    <tr>\n                      <td>Firstname</td>\n                      <td class='form-group'>\n                        <input type='text' formControlName='firstname' placeholder=\"Firstname\" class='form-control' />\n                        <small class=\"form-text text-danger\" *ngIf=\"contactForm.get('firstname').hasError('required') && contactForm.get('firstname').touched\">\n                            Firstname is required!\n                        </small>      \n                      </td>\n                    </tr>\n                    <tr>\n                      <td>Lastname</td>\n                      <td class='form-group'>\n                        <input type='text' formControlName='lastname' placeholder=\"Lastname\"  class='form-control'  />\n                        <small class=\"form-text text-danger\" *ngIf=\"contactForm.get('lastname').hasError('required') && contactForm.get('lastname').touched\">\n                            Lastname is required!\n                        </small> \n                      </td>\n                    </tr>\n                    <tr>\n                      <td>Phone</td>\n                      <td class='form-group'>\n                        <input type='text' formControlName='phone' placeholder=\"Phone\"  class='form-control' />\n                        <small class=\"form-text text-danger\" *ngIf=\"contactForm.get('phone').hasError('required') && contactForm.get('phone').touched\">\n                            Phone is required!\n                        </small> \n                      </td>\n                    </tr>\n                  </table>\n                  <div id='buttons'>\n                      <button class=\"btn btn-secondary\" [disabled]=\"contactForm.invalid\" >Save</button>\n                      <button class=\"btn btn-secondary\" (click)='clickCancel()' >Cancel</button>\n                    \n                  </div>\n                </form>\n            </div>\n      \n            <div id='info' *ngIf='!isEditMode' >             \n                    <table>\n                        <tr>\n                          <td id='label'>ID</td>\n                          <td id='input'>{{contact._id}}</td>\n                        </tr>\n                        <tr>\n                          <td>Firstname</td>\n                          <td>{{contact.firstname}}</td>\n                        </tr>\n                        <tr>\n                          <td>Lastname</td>\n                          <td>{{contact.lastname}}</td>\n                        </tr>\n                        <tr>\n                          <td>Phone</td>\n                          <td>{{contact.phone}}</td>\n                        </tr>\n                      </table>\n                      <div class='alert alert-success' style='margin: 0;margin-top: 5px;' *ngIf=\"isShowMessage\">\n                          {{message}}         \n                      </div>\n\n                      <div id='buttons' *ngIf=\"isShowButtons\">\n                          <button class=\"btn btn-secondary\" (click)='clickEdit()'>Edit</button>  \n                          <button class=\"btn btn-secondary\" (click)='deleteContact(contact._id)'>Delete</button>                           \n                      </div>\n                     \n            \n        </div>\n      </div>\n  </div> \n \n</div>\n<a style='width: 100px; text-align: center; margin-top: 10px' routerLink='/crud' routerLinkActive='active' class='btn btn-secondary'>Back</a>\n<div class=\"usa-grid usa-footer-return-to-top\">\n    <a href=\"/page2#\">Return to top</a>\n</div>"

/***/ }),

/***/ "./src/app/public/page2/page2.component.scss":
/***/ (function(module, exports) {

module.exports = "#page2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 100px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  #page2 .nav {\n    padding: 10px 0; }\n  #page2 #contactId {\n    padding-left: 10px; }\n  #contact-view #info {\n  padding: 20px; }\n  #contact-view #photo img {\n  width: 200px; }\n  #contact-view table {\n  text-align: left;\n  margin: 10px; }\n  #contact-view table #label {\n    width: 100px; }\n  #contact-view table #input {\n    width: 200px; }\n  #contact-view table input {\n    width: 300px;\n    margin-bottom: 5px; }\n  #contact-view #buttons {\n  margin-top: 20px; }\n  #contact-view #row2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  #contact-view #btn-update {\n  margin-right: 20px; }\n"

/***/ }),

/***/ "./src/app/public/page2/page2.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var crud_service_1 = __webpack_require__("./src/app/_services/_crud-service/crud.service.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var Page2Component = /** @class */ (function () {
    function Page2Component(crudService, route) {
        this.crudService = crudService;
        this.route = route;
        this.isEditMode = false;
        this.isShowMessage = false;
        this.isShowButtons = true;
        this.message = '';
        this.contact = {};
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var contactId = params['contactId'];
            _this.crudService.read('Contact', contactId).subscribe(function (contact) {
                _this.contact = contact;
                _this.contactForm = new forms_1.FormGroup({
                    firstname: new forms_1.FormControl(_this.contact.firstname, forms_1.Validators.required),
                    lastname: new forms_1.FormControl(_this.contact.lastname, forms_1.Validators.required),
                    phone: new forms_1.FormControl(_this.contact.phone, forms_1.Validators.required),
                });
            });
        });
    };
    Page2Component.prototype.onSubmitSave = function () {
        var _this = this;
        this.isEditMode = false;
        var contactObj = __assign({ _id: this.contact._id }, this.contactForm.value);
        this.crudService.update('Contact', contactObj).subscribe(function (data) {
            _this.contact = contactObj;
            console.log('Contact updated!');
        });
        this.isShowMessage = true;
        this.isShowButtons = true;
        this.message = 'Contact successfully updated.';
    };
    Page2Component.prototype.deleteContact = function (contactId) {
        var yes = confirm('Are you sure you want to delete this contact?');
        if (yes) {
            this.crudService.delete('Contact', contactId).subscribe(function () {
                return console.log('deleted contact._id = ' + contactId);
            });
            this.isShowMessage = true;
            this.isShowButtons = false;
            this.message = 'Contact successfully deleted.';
        }
    };
    Page2Component.prototype.clickEdit = function () {
        this.isEditMode = true;
    };
    Page2Component.prototype.clickCancel = function () {
        this.isEditMode = false;
        //shallow clone
        var contactObj = __assign({}, this.contact);
        delete contactObj._id;
        delete contactObj.__v;
        this.contactForm.setValue(contactObj);
    };
    Page2Component = __decorate([
        core_1.Component({
            selector: 'app-page2',
            template: __webpack_require__("./src/app/public/page2/page2.component.html"),
            styles: [__webpack_require__("./src/app/public/page2/page2.component.scss")],
        }),
        __metadata("design:paramtypes", [crud_service_1.CrudService,
            router_1.ActivatedRoute])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;


/***/ }),

/***/ "./src/app/public/password-reset/password-reset.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  password-reset works!\n</p>\n"

/***/ }),

/***/ "./src/app/public/password-reset/password-reset.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/password-reset/password-reset.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent() {
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
    };
    PasswordResetComponent = __decorate([
        core_1.Component({
            selector: 'app-password-reset',
            template: __webpack_require__("./src/app/public/password-reset/password-reset.component.html"),
            styles: [__webpack_require__("./src/app/public/password-reset/password-reset.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());
exports.PasswordResetComponent = PasswordResetComponent;


/***/ }),

/***/ "./src/app/public/servicepage/servicepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div style='margin-bottom: 5rem'></div>\n<!-- <div class=\"usa-overlay\" style='margin-bottom: 5rem'></div> -->\n<main class=\"usa-grid usa-section usa-content usa-layout-docs\" id=\"main-content\">\n  <aside class=\"usa-width-one-fourth usa-layout-docs-sidenav\">\n    <ul class=\"usa-sidenav-list\">\n      <li>\n        <a href=\"javascript:void(0);\">Page title</a>\n      </li>\n      <li>\n        <a class=\"usa-current\" href=\"javascript:void(0);\">Page heading (h1)</a>\n        <ul class=\"usa-sidenav-sub_list\">\n          <li>\n            <a target=\"_self\" href=\"/service#section-heading-h2\">Section heading (h2)</a>\n          </li>\n          <li>\n            <a href=\"/service#section-heading-h3\">Subsection heading (h3)</a>\n          </li>\n          <li>\n            <a href=\"/service#section-heading-h4\">Subsection heading (h4)</a>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a href=\"javascript:void(0);\">Page title</a>\n      </li>\n    </ul>\n  </aside>\n  <div class=\"usa-width-three-fourths usa-layout-docs-main_content\">\n    <h1>Page heading (h1)</h1>\n    <p class=\"usa-font-lead\">The page heading communicates the main focus of the page. Make your page heading descriptive and keep it succinct.</p>\n    <h2 id=\"section-heading-h2\">Section heading (h2)</h2>\n    <p>These headings introduce, respectively, sections and subsections within your body copy. As you create these headings, follow the same guidelines that you use when writing section headings: Be succinct, descriptive, and precise.</p>\n    <h3 id=\"section-heading-h3\">Subsection heading (h3)</h3>\n    <p>The particulars of your body copy will be determined by the topic of your page. Regardless of topic, it’s a good practice to follow the inverted pyramid structure when writing copy: Begin with the information that’s most important to your users and then present information of less importance.</p>\n    <p>Keep each section and subsection focused — a good approach is to include one theme (topic) per section.</p>\n    <h4 id=\"section-heading-h4\">Subsection heading (h4)</h4>\n    <p>Use the side navigation menu to help your users quickly skip to different sections of your page. The menu is best suited to displaying a hierarchy with one to three levels and, as we mentioned, to display the sub-navigation of a given page.</p>\n    <p>Read the full documentation on our side navigation on the component page.</p>\n  </div>\n</main>\n<footer class=\"usa-footer usa-footer-medium\" role=\"contentinfo\">\n  <div class=\"usa-grid usa-footer-return-to-top\">\n    <a href=\"/service#\">Return to top</a>\n  </div>\n  <div class=\"usa-footer-primary-section\">\n    <div class=\"usa-grid-full\">\n      <nav class=\"usa-footer-nav\">\n        <ul class=\"usa-unstyled-list\">\n          <li class=\"usa-width-one-fourth usa-footer-primary-content\">\n            <a class=\"usa-footer-primary-link\" href=\"javascript:void(0);\">Primary link</a>\n          </li>\n          <li class=\"usa-width-one-fourth usa-footer-primary-content\">\n            <a class=\"usa-footer-primary-link\" href=\"javascript:void(0);\">Permanently relevant</a>\n          </li>\n          <li class=\"usa-width-one-fourth usa-footer-primary-content\">\n            <a class=\"usa-footer-primary-link\" href=\"javascript:void(0);\">Easy to understand</a>\n          </li>\n          <li class=\"usa-width-one-fourth usa-footer-primary-content\">\n            <a class=\"usa-footer-primary-link\" href=\"javascript:void(0);\">Site policies (example)</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/public/servicepage/servicepage.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/servicepage/servicepage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ServicepageComponent = /** @class */ (function () {
    function ServicepageComponent() {
    }
    ServicepageComponent.prototype.contructor = function () { };
    ServicepageComponent.prototype.ngOnInit = function () {
    };
    ServicepageComponent = __decorate([
        core_1.Component({
            selector: 'app-servicepage',
            template: __webpack_require__("./src/app/public/servicepage/servicepage.component.html"),
            styles: [__webpack_require__("./src/app/public/servicepage/servicepage.component.scss")]
        })
    ], ServicepageComponent);
    return ServicepageComponent;
}());
exports.ServicepageComponent = ServicepageComponent;


/***/ }),

/***/ "./src/app/public/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<form id='sign-in-form' class=\"usa-form\" style='margin: 0 auto; margin-bottom: 5rem'>\n    <fieldset  >\n      <legend class=\"usa-drop_text\" >Sign in</legend>\n      <span>or  <a class=\"usa-nav-link\" routerLink=\"/signup\">create an account</a></span>  \n     \n      <input id=\"username\" placeholder=\"Username\" name=\"username\" type=\"text\" autocapitalize=\"off\" autocorrect=\"off\">\n  \n    \n      <input id=\"password-sign-in\" placeholder=\"Password\" name=\"password\" type=\"password\">\n      <p class=\"usa-form-note\">\n        <a title=\"Show password\" href=\"javascript:void(0);\"\n          class=\"usa-show_password\"\n          aria-controls=\"password-sign-in\">Show password</a>\n      </p>\n  \n      <input type=\"submit\" value=\"Sign in\">\n      <p>\n      \n        <a class=\"usa-nav-link\"  title=\"Password Reset\" routerLink=\"/passwordreset\">Forgot Password</a></p>\n     \n    </fieldset>\n  </form>\n  <div class=\"usa-grid usa-footer-return-to-top\">\n      <a href=\"/signin#\">Return to top</a>\n  </div>"

/***/ }),

/***/ "./src/app/public/signin/signin.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/signin/signin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/public/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/public/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;


/***/ }),

/***/ "./src/app/public/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"usa-form\" style=\"margin: 0 auto\" (ngSubmit)='onSubmit(customer)' [formGroup]='customer'>\n  <fieldset>\n \n    <legend class=\"usa-drop_text\">Sign Up</legend>\n    <div id='grp1'>\n\n      <!-- firstname -->\n      <app-input-text\n        [validationMsg]=\"'Letters, min 1, max 30 chars.'\"\n        [formGroup]=\"customer\" \n        [controlName]=\"'firstname'\" \n        [placeHolder]=\"'First Name'\"         \n        [type]=\"'text'\"        \n        [maxlength] = \"'30'\"\n        [iconUrl]=\"'https://cdn3.iconfinder.com/data/icons/faticons/32/user-01-20.png'\">\n      </app-input-text>\n\n      <!-- lastname -->\n      <app-input-text\n        [validationMsg]=\"'Letters, min 1, max 30 chars.'\"\n        [formGroup]=\"customer\" \n        [controlName]=\"'lastname'\" \n        [placeHolder]=\"'Last Name'\" \n        [type]=\"'text'\" \n        [maxlength] = \"'30'\"\n        [iconUrl]=\"''\">\n      </app-input-text>\n     \n      <!-- email -->\n      <app-input-email\n        [validationMsg]=\"'Must be user@domain.com'\"\n        [formGroup]=\"customer\" \n        [controlName]=\"'email'\" \n        [placeHolder]=\"'Email'\" \n        [type]=\"'email'\" \n        [maxlength] = \"'50'\"\n        [iconUrl]=\"'https://cdn3.iconfinder.com/data/icons/multi-media-set-2-2/65/77-20.png'\">\n      </app-input-email>\n\n      <!-- phone -->\n      <app-input-phone\n        [validationMsg]=\"'Required.'\"\n        [formGroup]=\"customer\" \n        [controlName]=\"'phone'\" \n        [placeHolder]=\"'Phone'\" \n        [type]=\"'tel'\" \n        [iconUrl]=\"'https://cdn4.iconfinder.com/data/icons/social-communication/142/phone-20.png'\">\n      </app-input-phone>\n    </div>\n   \n     <!-- password -->\n    <div id='grp2' style='margin: 2rem 0'>\n      <app-input-password-confirm\n        [validationMsg]=\"'Required, must match Confirm Password.'\"\n        [formGroup]=\"customer\" \n        [controlName]=\"'password1'\" \n        [placeHolder]=\"'Password'\" \n        [type]=\"'password'\" \n        [iconUrl]=\"'https://cdn2.iconfinder.com/data/icons/oxygen/22x22/apps/preferences-desktop-cryptography.png'\">\n      </app-input-password-confirm>\n\n      <!-- confirm password -->\n      <app-input-password-confirm\n        [validationMsg]=\"'Required, must match Password.'\" \n        [formGroup]=\"customer\" \n        [controlName]=\"'password2'\" \n        [placeHolder]=\"'Confirm Password'\" \n        [type]=\"'password'\"> \n      </app-input-password-confirm>\n    </div>\n\n    <button type='submit'> Submit </button>\n    <div>\n      <div class=\"usa-alert usa-alert-success\" *ngIf=\"isShowSuccessMessage\">\n        <div class=\"usa-alert-body\">\n          <h3 class=\"usa-alert-heading\"> {{message}}</h3>\n        </div>\n      </div>\n      <div class=\"usa-alert usa-alert-error\" *ngIf=\"isShowErrorMessage\">\n        <div class=\"usa-alert-body\">\n          <h3 class=\"usa-alert-heading\"> {{message}}</h3>\n        </div>\n      </div>\n    </div>\n\n  </fieldset>\n\n</form>\n\n\n<div class=\"usa-grid usa-footer-return-to-top\">\n  <a href=\"/signup#\">Return to top</a>\n</div>\n\n"

/***/ }),

/***/ "./src/app/public/signup/signup.component.scss":
/***/ (function(module, exports) {

module.exports = "button[type=submit] {\n  text-align: center;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/public/signup/signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var password_validator_1 = __webpack_require__("./src/app/_validators/password.validator.ts");
var cookies_service_1 = __webpack_require__("./node_modules/angular2-cookie/services/cookies.service.js");
var crud_service_1 = __webpack_require__("./src/app/_services/_crud-service/crud.service.ts");
var app_service_1 = __webpack_require__("./src/app/_services/app-service/app.service.ts");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(_cookieService, _crudService, appService) {
        this._cookieService = _cookieService;
        this._crudService = _crudService;
        this.appService = appService;
        this.addCustomerEvent = new core_1.EventEmitter();
        this.message = "";
        this.isShowSuccessMessage = false;
        this.isShowErrorMessage = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.customer = new forms_1.FormGroup({
            firstname: new forms_1.FormControl("", forms_1.Validators.pattern("^[a-zA-z ,']{1,30}$")),
            lastname: new forms_1.FormControl("", forms_1.Validators.pattern("^[a-zA-z ,']{1,30}$")),
            email: new forms_1.FormControl("", forms_1.Validators.pattern(/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)),
            phone: new forms_1.FormControl("", forms_1.Validators.pattern(/^\(\d{3}\)\s\d{3}\-\d{4}$/)),
            password1: new forms_1.FormControl("", forms_1.Validators.required),
            password2: new forms_1.FormControl("", forms_1.Validators.required)
        }, password_validator_1.passwordMatchValidator);
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        try {
            this.appService.getToken().subscribe(function (data) {
                alert(JSON.stringify(data));
            }, function (error) {
                alert(JSON.stringify(error));
            });
            this.clearMessages();
            if (!this.customer.valid) {
                this.message = "Customer creation error.";
                this.isShowErrorMessage = true;
                return false;
            }
            // reshape customerObj obj literal
            var customerObj = this.customer.value;
            customerObj = __assign({}, customerObj, { password: customerObj.password1, createdAt: null, updatedAt: null });
            delete customerObj.password1;
            delete customerObj.password2;
            this._crudService.create("Customer", customerObj).subscribe(function (data) {
                _this.addCustomerEvent.emit();
                console.log("create new customer success!");
                _this.customer.reset();
            });
            this.message = "Customer create success.";
            this.isShowSuccessMessage = true;
            //localStorage.setItem("hello", "world")
        }
        catch (err) {
            this.message = "Customer create failed.";
            return false;
        }
    };
    SignupComponent.prototype.formClick = function () {
        this.message = "";
        this.clearMessages();
    };
    SignupComponent.prototype.clearMessages = function () {
        this.isShowSuccessMessage = false;
        this.isShowErrorMessage = false;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "addCustomerEvent", void 0);
    SignupComponent = __decorate([
        core_1.Component({
            selector: "app-signup",
            template: __webpack_require__("./src/app/public/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/public/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [cookies_service_1.CookieService,
            crud_service_1.CrudService,
            app_service_1.AppService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    apiurl: 'https://www.stratteos.us' //always use www since rest api will complain
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map