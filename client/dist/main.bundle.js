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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/_common/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/_common/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/_common/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='my-header'>\n  <div class=\"usa-banner\">\n    <div class=\"usa-accordion\">\n      <header class=\"usa-banner-header\">\n        <div class=\"usa-grid usa-banner-inner\" style='width: 600px; margin-left:0; text-align: left'>\n          <img src=\"/assets/uswds-1.6.3/img/favicons/favicon-57.png\" alt=\"U.S. flag\">\n          <span>An official website of the United States government</span>\n          <button class=\"usa-accordion-button usa-banner-button\" aria-expanded=\"false\" aria-controls=\"gov-banner\">\n            <span class=\"usa-banner-button-text\">Here's how you know</span>\n          </button>\n        </div>\n      </header>\n      <div class=\"usa-banner-content usa-grid usa-accordion-content\" id=\"gov-banner\">\n        <div class=\"usa-banner-guidance-gov usa-width-one-half\">\n          <img class=\"usa-banner-icon usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/icon-dot-gov.svg\" alt=\"Dot gov\">\n          <div class=\"usa-media_block-body\">\n            <p>\n              <strong>The .gov means it’s official.</strong>\n              <br> Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you’re\n              on a federal government site.\n            </p>\n          </div>\n        </div>\n        <div class=\"usa-banner-guidance-ssl usa-width-one-half\">\n          <img class=\"usa-banner-icon usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/icon-https.svg\" alt=\"Https\">\n          <div class=\"usa-media_block-body\">\n            <p>\n              <strong>The site is secure.</strong>\n              <br> The\n              <strong>https://</strong> ensures that you are connecting to the official website and that any information you provide\n              is encrypted and transmitted securely.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <header id='my-header1' class=\"usa-header usa-header-basic\" role=\"banner\">\n\n    <form class=\"usa-search usa-search-small\" style=\"padding: 5px 5px 0 0\">\n      <div role=\"search\">\n        <label class=\"usa-sr-only\" for=\"basic-search-field-small\">Search small</label>\n        <input id=\"basic-search-field-small\" type=\"search\" name=\"search\">\n        <button type=\"submit\">\n          <span class=\"usa-sr-only\">Search</span>\n        </button>\n      </div>\n    </form>\n\n    <div id='my-top-menu'>\n\n      <div style='display: flex; flex-direction: row'>\n        <img src='/assets/images/logo/usda-circle.png' id='usda_logo'>\n        <div>\n          <h3 id='logo_text1'>U.S. Department of Agriculture (Prototype) </h3>\n          <h4 id='logo_text2'>eAuthentication Service</h4>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"usa-nav-container\">\n      <div class=\"usa-navbar\">\n\n        <button class=\"usa-menu-btn\">Menu</button>\n      </div>\n\n      <nav role=\"navigation\" class=\"usa-nav\">\n\n        <button class=\"usa-nav-close\">\n          <img src=\"/assets/uswds-1.6.3/img/close.svg\" alt=\"close\">\n        </button>\n        <ul class=\"usa-nav-primary usa-accordion\">\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/\">\n              <span>Home</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/service\">\n              <span>Services</span>\n            </a>\n\n          </li>\n          <!--\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/crud\">\n              <span>CRUD</span>\n            </a>\n          </li>\n          -->\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/contactus\">\n              <span>Contact Us</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/signin\">\n              <span>Sign In</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"usa-nav-link\" routerLink=\"/signup\">\n              <span>Sign Up</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </header>\n  <div class=\"usa-overlay\"></div>\n</div>\n\n\n<main id=\"main-content\"></main>"

/***/ }),

/***/ "./src/app/_common/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "my-logo {\n  margin: 0;\n  text-align: left; }\n\n#my_header {\n  margin: 0;\n  margin-bottom: 5rem; }\n\n#my-top-menu {\n  width: 100vw;\n  background-color: #006747;\n  color: white;\n  padding: 10px;\n  padding-left: 30px; }\n\n#usda_logo {\n  width: 80px;\n  height: 80px;\n  text-align: left;\n  margin-right: 10px;\n  vertical-align: middle; }\n\n#logo_text1 {\n  margin: 0;\n  text-align: left;\n  padding-top: 15px; }\n\n#logo_text2 {\n  margin: 0;\n  text-align: left;\n  padding-top: 5px; }\n"

/***/ }),

/***/ "./src/app/_common/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.clickSignIn = function () {
        this.router.navigateByUrl('/login');
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/_common/header/header.component.html"),
            styles: [__webpack_require__("./src/app/_common/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Contacts App';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_header_header_component__ = __webpack_require__("./src/app/_common/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_footer_footer_component__ = __webpack_require__("./src/app/_common/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__public_crud_add_contact_form_add_contact_form_component__ = __webpack_require__("./src/app/public/crud/add-contact-form/add-contact-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__public_crud_contact_list_contact_list_component__ = __webpack_require__("./src/app/public/crud/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__public_page2_page2_component__ = __webpack_require__("./src/app/public/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_crud_service__ = __webpack_require__("./src/app/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__public_signin_signin_component__ = __webpack_require__("./src/app/public/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__public_servicepage_servicepage_component__ = __webpack_require__("./src/app/public/servicepage/servicepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__public_password_reset_password_reset_component__ = __webpack_require__("./src/app/public/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__public_home_home_component__ = __webpack_require__("./src/app/public/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__public_crud_crud_component__ = __webpack_require__("./src/app/public/crud/crud.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__public_signup_signup_component__ = __webpack_require__("./src/app/public/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__public_contactus_contactus_component__ = __webpack_require__("./src/app/public/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__public_signup_components_app_input__ = __webpack_require__("./src/app/public/signup/components/app.input.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_12__public_signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_17__public_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_18__public_contactus_contactus_component__["a" /* ContactusComponent */] },
    { path: 'service', component: __WEBPACK_IMPORTED_MODULE_13__public_servicepage_servicepage_component__["a" /* ServicepageComponent */] },
    { path: 'crud', component: __WEBPACK_IMPORTED_MODULE_16__public_crud_crud_component__["a" /* CrudComponent */] },
    { path: 'page2/:contactId', component: __WEBPACK_IMPORTED_MODULE_10__public_page2_page2_component__["a" /* Page2Component */] },
    { path: 'passwordreset', component: __WEBPACK_IMPORTED_MODULE_14__public_password_reset_password_reset_component__["a" /* PasswordResetComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_15__public_home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_15__public_home_home_component__["a" /* HomeComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__common_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__common_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__public_crud_add_contact_form_add_contact_form_component__["a" /* AddContactFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__public_crud_contact_list_contact_list_component__["a" /* ContactListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__public_page2_page2_component__["a" /* Page2Component */],
                __WEBPACK_IMPORTED_MODULE_12__public_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_13__public_servicepage_servicepage_component__["a" /* ServicepageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__public_password_reset_password_reset_component__["a" /* PasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_15__public_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__public_crud_crud_component__["a" /* CrudComponent */],
                __WEBPACK_IMPORTED_MODULE_17__public_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_18__public_contactus_contactus_component__["a" /* ContactusComponent */],
                __WEBPACK_IMPORTED_MODULE_19__public_signup_components_app_input__["a" /* AppInput */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_crud_service__["a" /* CrudService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contactus',
            template: __webpack_require__("./src/app/public/contactus/contactus.component.html"),
            styles: [__webpack_require__("./src/app/public/contactus/contactus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/public/crud/add-contact-form/add-contact-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"add-contact-form\" (click)='formClick()' style=\"margin-right: 1rem; margin-top: 1rem\">\n  \n    <div>\n        <form class=\"usa-form\" (ngSubmit)='onSubmit(contact)' [formGroup]='contact'>\n            \n            <fieldset>\n                <div>\n                    <div class='form-group'>\n                        <input type='text' placeholder=\"Firstname\" formControlName='firstname'  />\n                        <small class=\"form-text text-danger\" *ngIf=\"contact.get('firstname').hasError('required') && contact.get('firstname').touched\">\n                            Firstname is required!\n                        </small>\n                    </div>\n\n                    <div class='form-group'>\n                        <input type='text' placeholder=\"Lastname\" formControlName='lastname' class='form-control' />\n                        <small class=\"form-text text-danger\" *ngIf=\"contact.get('lastname').hasError('required') && contact.get('lastname').touched\">\n                            Lastname is required!\n                        </small>\n                    </div>\n\n                    <div class='form-group'>\n                        <input type='text' placeholder=\"Phone\" formControlName='phone' class='form-control' />\n                        <small class=\"form-text text-danger\" *ngIf=\"contact.get('phone').hasError('required') && contact.get('phone').touched\">\n                            Phone is required!\n                        </small>\n                    </div>\n                </div>\n                \n                <div class='alert alert-success' style='margin: 0;margin-bottom: 5px;' *ngIf=\"isShowMessage\">\n                    {{message}}\n                </div>\n                <button type='submit'> Add Contact </button>\n            </fieldset>\n        </form>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/public/crud/add-contact-form/add-contact-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/crud/add-contact-form/add-contact-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddContactFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_crud_service__ = __webpack_require__("./src/app/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddContactFormComponent = /** @class */ (function () {
    function AddContactFormComponent(crudService) {
        this.crudService = crudService;
        this.addContactEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.message = '';
        this.isShowMessage = false;
    }
    AddContactFormComponent.prototype.ngOnInit = function () {
        this.contact = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            firstname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddContactFormComponent.prototype, "addContactEvent", void 0);
    AddContactFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-contact-form',
            template: __webpack_require__("./src/app/public/crud/add-contact-form/add-contact-form.component.html"),
            styles: [__webpack_require__("./src/app/public/crud/add-contact-form/add-contact-form.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_crud_service__["a" /* CrudService */]])
    ], AddContactFormComponent);
    return AddContactFormComponent;
}());



/***/ }),

/***/ "./src/app/public/crud/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact-list\">\n       <table style='margin-top:1rem'>\n          <caption style='margin-bottom:5px'>Bordered table</caption>\n          <thead>\n              <tr>\n                  <th scope=\"col\">ID</th>\n                  <th scope=\"col\">First</th>\n                  <th scope=\"col\">Last</th>\n                  <th scope=\"col\">Phone</th>\n                  <th scope=\"col\">Action</th>\n                </tr>\n          \n          </thead>\n          <tbody>\n              <tr *ngFor='let contact of contacts' >\n                  <th scope=\"row\">{{contact._id}}</th>\n                  <td>{{contact.firstname}}</td>\n                  <td>{{contact.lastname}}</td>\n                  <td>{{contact.phone}}</td>\n                  <td><a routerLink='/page2/{{contact._id}}' routerLinkActive='active'>Edit/Del</a></td>\n              </tr>\n            </tbody>\n      </table>\n      \n</div>"

/***/ }),

/***/ "./src/app/public/crud/contact-list/contact-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/crud/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactListComponent = /** @class */ (function () {
    function ContactListComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ContactListComponent.prototype, "contacts", void 0);
    ContactListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-list',
            template: __webpack_require__("./src/app/public/crud/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("./src/app/public/crud/contact-list/contact-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/public/crud/crud.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page1\" >\n        <legend class=\"usa-drop_text\">New Contact</legend>\n    <app-add-contact-form (addContactEvent)=\"updateContactList()\"></app-add-contact-form>\n    <app-contact-list [contacts]=\"contacts\" > </app-contact-list>\n</div>\n<div class=\"usa-grid usa-footer-return-to-top\">\n    <a href=\"/crud#\">Return to top</a>\n</div>"

/***/ }),

/***/ "./src/app/public/crud/crud.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/crud/crud.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_crud_service__ = __webpack_require__("./src/app/services/crud.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-crud',
            template: __webpack_require__("./src/app/public/crud/crud.component.html"),
            styles: [__webpack_require__("./src/app/public/crud/crud.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_crud_service__["a" /* CrudService */]])
    ], CrudComponent);
    return CrudComponent;
}());



/***/ }),

/***/ "./src/app/public/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n    <div class=\"usa-overlay\"></div>\n\n\n    <main id=\"main-content\"></main>\n\n\n    <section class=\"usa-hero\">\n        <div class=\"usa-grid\">\n            <div class=\"usa-hero-callout usa-section-dark\">\n                <h2>\n\n                    <span class=\"usa-hero-callout-alt\">Hero callout:</span>\n\n                    Call attention to a current priority\n                </h2>\n\n\n                <p>Support the callout with some short explanatory text. You don't need more than a couple of sentences.</p>\n\n\n\n                <a class=\"usa-button\" href=\"javascript:void(0)\">Learn about what we do</a>\n\n            </div>\n        </div>\n    </section>\n\n\n    <section class=\"usa-grid usa-section\">\n        <div class=\"usa-width-one-third\">\n            <h2>A tagline highlights your approach.</h2>\n        </div>\n        <div class=\"usa-width-two-thirds\">\n            <p>The tagline should inspire confidence and interest, focusing on the value that your overall approach offers to\n                your audience. Use a heading typeface and keep your tagline to just a few words, and don’t confuse or mystify.</p>\n            <p>Use the right side of the grid to explain the tagline a bit more. What are your goals? How do you do your work?\n                Write in the present tense, and stay brief here. People who are interested can find details on internal pages.</p>\n        </div>\n    </section>\n\n\n    <section class=\"usa-section usa-section-dark usa-graphic_list\">\n        <div class=\"usa-grid usa-graphic_list-row\">\n            <div class=\"usa-width-one-half usa-media_block\">\n                <img class=\"usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n                <div class=\"usa-media_block-body\">\n                    <h3>Graphic headings can vary.</h3>\n                    <p>Graphic headings can be used a few different ways, depending on what your landing page is for. Highlight\n                        your values, specific program areas, or results.</p>\n                </div>\n            </div>\n            <div class=\"usa-width-one-half usa-media_block\">\n                <img class=\"usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n                <div class=\"usa-media_block-body\">\n                    <h3>Stick to 6 or fewer words.</h3>\n                    <p>Keep body text to about 30. They can be shorter, but try to be somewhat balanced across all four. It\n                        creates a clean appearance with good spacing.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"usa-grid usa-graphic_list-row\">\n            <div class=\"usa-width-one-half usa-media_block\">\n                <img class=\"usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n                <div class=\"usa-media_block-body\">\n                    <h3>Never highlight anything without a goal.</h3>\n                    <p>For anything you want to highlight here, understand what your users know now, and what activity or impression\n                        you want from them after they see it.</p>\n                </div>\n            </div>\n            <div class=\"usa-width-one-half usa-media_block\">\n                <img class=\"usa-media_block-img\" src=\"/assets/uswds-1.6.3/img/circle-124.png\" alt=\"Alt text\">\n                <div class=\"usa-media_block-body\">\n                    <h3>Could also have 2 or 6.</h3>\n                    <p>In addition to your goal, find out your users’ goals. What do they want to know or do that supports your\n                        mission? Use these headings to show those.</p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n\n    <section class=\"usa-section\">\n        <div class=\"usa-grid\">\n            <h2>Section heading</h2>\n            <p class=\"usa-font-lead\">Everything up to this point should help people understand your agency or project: who you are, your goal or mission,\n                and how you approach it. Use this section to encourage them to act. Describe why they should get in touch\n                here, and use an active verb on the button below. “Get in touch,” “Learn more,” and so on.</p>\n            <a class=\"usa-button usa-button-big\" href=\"#\">Call to action</a>\n        </div>\n    </section>\n</main>\n\n<div class=\"usa-grid usa-footer-return-to-top\">\n    <a href=\"/#\">Return to top</a>\n</div>"

/***/ }),

/***/ "./src/app/public/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "#page1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n"

/***/ }),

/***/ "./src/app/public/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.contacts = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/public/home/home.component.html"),
            styles: [__webpack_require__("./src/app/public/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crud_service__ = __webpack_require__("./src/app/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
                _this.contactForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
                    firstname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](_this.contact.firstname, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
                    lastname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](_this.contact.lastname, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
                    phone: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](_this.contact.phone, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page2',
            template: __webpack_require__("./src/app/public/page2/page2.component.html"),
            styles: [__webpack_require__("./src/app/public/page2/page2.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_crud_service__["a" /* CrudService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Page2Component);
    return Page2Component;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent() {
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
    };
    PasswordResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-password-reset',
            template: __webpack_require__("./src/app/public/password-reset/password-reset.component.html"),
            styles: [__webpack_require__("./src/app/public/password-reset/password-reset.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/public/servicepage/servicepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"usa-overlay\" style='margin-bottom: 5rem'></div>\n<main class=\"usa-grid usa-section usa-content usa-layout-docs\" id=\"main-content\">\n  <aside class=\"usa-width-one-fourth usa-layout-docs-sidenav\">\n    <ul class=\"usa-sidenav-list\">\n      <li>\n        <a href=\"javascript:void(0);\">Page title</a>\n      </li>\n      <li>\n        <a class=\"usa-current\" href=\"javascript:void(0);\">Page heading (h1)</a>\n        <ul class=\"usa-sidenav-sub_list\">\n          <li>\n            <a target=\"_self\" href=\"/service#section-heading-h2\">Section heading (h2)</a>\n          </li>\n          <li>\n            <a href=\"/service#section-heading-h3\">Subsection heading (h3)</a>\n          </li>\n          <li>\n            <a href=\"/service#section-heading-h4\">Subsection heading (h4)</a>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a href=\"javascript:void(0);\">Page title</a>\n      </li>\n    </ul>\n  </aside>\n  <div class=\"usa-width-three-fourths usa-layout-docs-main_content\">\n    <h1>Page heading (h1)</h1>\n    <p class=\"usa-font-lead\">The page heading communicates the main focus of the page. Make your page heading descriptive and keep it succinct.</p>\n    <h2 id=\"section-heading-h2\">Section heading (h2)</h2>\n    <p>These headings introduce, respectively, sections and subsections within your body copy. As you create these headings, follow the same guidelines that you use when writing section headings: Be succinct, descriptive, and precise.</p>\n    <h3 id=\"section-heading-h3\">Subsection heading (h3)</h3>\n    <p>The particulars of your body copy will be determined by the topic of your page. Regardless of topic, it’s a good practice to follow the inverted pyramid structure when writing copy: Begin with the information that’s most important to your users and then present information of less importance.</p>\n    <p>Keep each section and subsection focused — a good approach is to include one theme (topic) per section.</p>\n    <h4 id=\"section-heading-h4\">Subsection heading (h4)</h4>\n    <p>Use the side navigation menu to help your users quickly skip to different sections of your page. The menu is best suited to displaying a hierarchy with one to three levels and, as we mentioned, to display the sub-navigation of a given page.</p>\n    <p>Read the full documentation on our side navigation on the component page.</p>\n  </div>\n</main>\n<footer class=\"usa-footer usa-footer-medium\" role=\"contentinfo\">\n  <div class=\"usa-grid usa-footer-return-to-top\">\n    <a href=\"/service#\">Return to top</a>\n  </div>\n  <div class=\"usa-footer-primary-section\">\n    <div class=\"usa-grid-full\">\n      <nav class=\"usa-footer-nav\">\n        <ul class=\"usa-unstyled-list\">\n          <li class=\"usa-width-one-fourth usa-footer-primary-content\">\n            <a class=\"usa-footer-primary-link\" href=\"javascript:void(0);\">Primary link</a>\n          </li>\n          <li class=\"usa-width-one-fourth usa-footer-primary-content\">\n            <a class=\"usa-footer-primary-link\" href=\"javascript:void(0);\">Permanently relevant</a>\n          </li>\n          <li class=\"usa-width-one-fourth usa-footer-primary-content\">\n            <a class=\"usa-footer-primary-link\" href=\"javascript:void(0);\">Easy to understand</a>\n          </li>\n          <li class=\"usa-width-one-fourth usa-footer-primary-content\">\n            <a class=\"usa-footer-primary-link\" href=\"javascript:void(0);\">Site policies (example)</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/public/servicepage/servicepage.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/servicepage/servicepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServicepageComponent = /** @class */ (function () {
    function ServicepageComponent() {
    }
    ServicepageComponent.prototype.contructor = function () { };
    ServicepageComponent.prototype.ngOnInit = function () {
    };
    ServicepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-servicepage',
            template: __webpack_require__("./src/app/public/servicepage/servicepage.component.html"),
            styles: [__webpack_require__("./src/app/public/servicepage/servicepage.component.scss")]
        })
    ], ServicepageComponent);
    return ServicepageComponent;
}());



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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/public/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/public/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/public/signup/components/app.input.html":
/***/ (function(module, exports) {

module.exports = "<div class='form-control-group' [formGroup]='formGroup'>\n\n    <div class=\"input-icon-container\">\n        <input class='input-icon' formControlName='{{controlName}}' id='{{controlName}}' placeholder='{{placeHolder}}' name=\"{{controlName}}\"\n            type=\"{{type}}\" required aria-required='true'>\n        <span *ngIf=\"iconUrl\">\n            <img class=\"input-icon-img\" src=\"{{iconUrl}}\">\n        </span>\n        <span  *ngIf=\"formGroup.get(controlName).hasError('required') && formGroup.get(controlName).touched\">\n            <img class=\"input-error-img\" src=\"https://cdn1.iconfinder.com/data/icons/Koloria-Icon-Set/21/Error_Symbol.png\">\n        </span>\n        <span  *ngIf=\"!formGroup.get(controlName).hasError('required') && formGroup.get(controlName).touched\">\n                <img class=\"input-error-img\" src=\"https://cdn4.iconfinder.com/data/icons/icocentre-free-icons/137/f-check_256-16.png\">\n                \n            </span>\n    </div>\n    <!--\n        <small class=\"text-danger\" \n            *ngIf=\"formGroup.get(controlName).hasError('required') && formGroup.get(controlName).touched\">\n            {{placeHolder}} is required!\n        </small> -->\n</div>"

/***/ }),

/***/ "./src/app/public/signup/components/app.input.scss":
/***/ (function(module, exports) {

module.exports = ".input-icon-container {\n  position: relative;\n  padding: 0;\n  margin: 0; }\n\n.input-icon {\n  border-radius: 10px;\n  margin: 0;\n  padding-left: 35px; }\n\n.input-icon-img {\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  width: 14px;\n  height: 14px; }\n\n.input-error-img {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  width: 14px;\n  height: 14px; }\n\n.form-control-group {\n  padding-bottom: 5px; }\n"

/***/ }),

/***/ "./src/app/public/signup/components/app.input.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppInput = /** @class */ (function () {
    function AppInput() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */])
    ], AppInput.prototype, "formGroup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AppInput.prototype, "placeHolder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AppInput.prototype, "controlName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AppInput.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AppInput.prototype, "iconUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AppInput.prototype, "isInvalid", void 0);
    AppInput = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-input",
            styles: [__webpack_require__("./src/app/public/signup/components/app.input.scss")],
            template: __webpack_require__("./src/app/public/signup/components/app.input.html")
        })
    ], AppInput);
    return AppInput;
}());



/***/ }),

/***/ "./src/app/public/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"usa-form\" style=\"margin: 0 auto\" (ngSubmit)='onSubmit(customer)' [formGroup]='customer'>\n  <fieldset>\n  \n    <legend class=\"usa-drop_text\">Sign Up</legend>\n    <div id='grp1'>\n      <app-input [formGroup]=\"customer\" [controlName]=\"'firstname'\" [placeHolder]=\"'First Name'\"  [type]=\"'text'\"  [iconUrl]=\"'https://cdn3.iconfinder.com/data/icons/faticons/32/user-01-20.png'\" > </app-input> \n      <app-input [formGroup]=\"customer\" [controlName]=\"'lastname'\" [placeHolder]=\"'Last Name'\"  [type]=\"'text'\" [iconUrl]=\"''\"> </app-input> \n      <app-input [formGroup]=\"customer\" [controlName]=\"'email'\" [placeHolder]=\"'Email'\"  [type]=\"'email'\" [iconUrl]=\"'https://cdn3.iconfinder.com/data/icons/multi-media-set-2-2/65/77-20.png'\"> </app-input> \n      <app-input [formGroup]=\"customer\" [controlName]=\"'phone'\" [placeHolder]=\"'Phone'\"  [type]=\"'text'\" [iconUrl]=\"'https://cdn4.iconfinder.com/data/icons/social-communication/142/phone-20.png'\"> </app-input>      \n    </div>\n\n    <div id='grp2' style='margin: 2rem 0'>      \n      <app-input [formGroup]=\"customer\" [controlName]=\"'password1'\" [placeHolder]=\"'Password'\"  [type]=\"'password'\" [iconUrl]=\"'https://cdn2.iconfinder.com/data/icons/oxygen/22x22/apps/preferences-desktop-cryptography.png'\"> </app-input>      \n      <app-input [formGroup]=\"customer\" [controlName]=\"'password2'\" [placeHolder]=\"'Confirm Password'\" [type]=\"'password'\"> </app-input>     \n    </div>\n\n    <button type='submit'> Submit </button>\n    <div>\n      <div class=\"usa-alert usa-alert-success\" *ngIf=\"isShowSuccessMessage\">\n        <div class=\"usa-alert-body\">\n          <h3 class=\"usa-alert-heading\"> {{message}}</h3>\n        </div>\n      </div>\n      <div class=\"usa-alert usa-alert-error\" *ngIf=\"isShowErrorMessage\">\n        <div class=\"usa-alert-body\">\n          <h3 class=\"usa-alert-heading\"> {{message}}</h3>\n        </div>\n      </div>\n    </div>\n\n  </fieldset>\n\n</form>\n\n\n<div class=\"usa-grid usa-footer-return-to-top\">\n  <a href=\"/signup#\">Return to top</a>\n</div>"

/***/ }),

/***/ "./src/app/public/signup/signup.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_crud_service__ = __webpack_require__("./src/app/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__ = __webpack_require__("./src/app/validators/password.validator.ts");
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




var SignupComponent = /** @class */ (function () {
    function SignupComponent(crudService) {
        this.crudService = crudService;
        this.addCustomerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.message = "";
        this.isShowSuccessMessage = false;
        this.isShowErrorMessage = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.customer = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            firstname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            password1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required),
            password2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required)
        }, __WEBPACK_IMPORTED_MODULE_3__validators_password_validator__["a" /* passwordMatchValidator */]);
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.clearMessages();
        if (!this.customer.valid) {
            this.message = "Customer creation error.";
            this.isShowErrorMessage = true;
            return;
        }
        // reshape customerObj obj literal
        var customerObj = this.customer.value;
        customerObj = __assign({}, customerObj, { password: customerObj.password1, createdAt: null, updatedAt: null });
        delete customerObj.password1;
        delete customerObj.password2;
        try {
            this.crudService.create("Customer", customerObj).subscribe(function (data) {
                _this.addCustomerEvent.emit();
                console.log("create new customer success!");
                _this.customer.reset();
            });
            this.message = "Customer created.";
            this.isShowSuccessMessage = true;
        }
        catch (err) {
            // console.error(err);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "addCustomerEvent", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-signup",
            template: __webpack_require__("./src/app/public/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/public/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_crud_service__["a" /* CrudService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/services/crud.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// node express generic crud
// https://www.npmjs.com/package/node-express-crud-router
var CrudService = /** @class */ (function () {
    function CrudService(http) {
        this.http = http;
        this.apiurl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CrudService);
    return CrudService;
}());



/***/ }),

/***/ "./src/app/validators/password.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = passwordMatchValidator;
function passwordMatchValidator(formGroup) {
    if (formGroup.get("password1").value !== formGroup.get("password2").value) {
        return { mismatch: true };
    }
    return null;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiurl: 'https://localhost'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map