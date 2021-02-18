(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start Header section -->\n<app-header></app-header>\n<!--End Header section -->\n\n<!-- <div class='container'> -->\n<router-outlet></router-outlet>\n<!-- </div> -->\n\n<!-- Start Footer section -->\t\t\n<app-footer></app-footer>\n<!-- End footer Area -->\t\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageTitle = 'TrekEasy';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _treks_trek_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./treks/trek.module */ "./src/app/treks/trek.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _home_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/error.component */ "./src/app/home/error.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: _home_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"] }
                ]
                //, {useHash: false, anchorScrolling: 'enabled'}
                //, {onSameUrlNavigation: 'reload'}
                ),
                _treks_trek_module__WEBPACK_IMPORTED_MODULE_7__["TrekModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/about-us.component.css":
/*!*********************************************!*\
  !*** ./src/app/home/about-us.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/about-us.component.html":
/*!**********************************************!*\
  !*** ./src/app/home/about-us.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start banner Area -->\n<app-banner [title]='pageTitle'></app-banner>\n<!-- End banner Area -->\n\n<!-- Start about-info Area -->\n<section class=\"about-info-area section-gap\">\n\t<div class=\"container\">\n\t\t<div class=\"row align-items-center\">\n\t\t\t<div class=\"col-lg-6 info-left\">\n\t\t\t\t<img class=\"img-fluid\" src=\"../../assets/img/about/info-img.jpg\" alt=\"\">\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-6 info-right\">\n\t\t\t\t<h6>About Us</h6>\n\t\t\t\t<h1>Who We Are?</h1>\n\t\t\t\t<p>\n\t\t\t\t\tHere, I focus on a range of items and features that we use in life without giving them a second\n\t\t\t\t\tthought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n\t\t\t\t\tincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n\t\t\t\t\tullamco.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- End about-info Area -->\n\n<!-- Start other-issue Area -->\n<section class=\"other-issue-area section-gap\">\n\t<div class=\"container\">\n\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t<div class=\"menu-content pb-70 col-lg-9\">\n\t\t\t\t<div class=\"title text-center\">\n\t\t\t\t\t<h1 class=\"mb-10\">Other issues we can help you with</h1>\n\t\t\t\t\t<p>We all live in an age that belongs to the young at heart. Life that is.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t<div class=\"single-other-issue\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"../../assets/img/o1.jpg\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<h4>Rent a Car</h4>\n\t\t\t\t\t</a>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe preservation of human life is the ultimate value, a pillar of ethics and the foundation.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t<div class=\"single-other-issue\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"../../assets/img/o2.jpg\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<h4>Cruise Booking</h4>\n\t\t\t\t\t</a>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tI was always somebody who felt quite sorry for myself, what I had not got compared.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t<div class=\"single-other-issue\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"../../assets/img/o3.jpg\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<h4>To Do List</h4>\n\t\t\t\t\t</a>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThe following article covers a topic that has recently moved to center stage–at least it seems.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-3 col-md-6\">\n\t\t\t\t<div class=\"single-other-issue\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"../../assets/img/o4.jpg\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t<h4>Food Features</h4>\n\t\t\t\t\t</a>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tThere are many kinds of narratives and organizing principles. Science is driven by evidence.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- End other-issue Area -->\n\n<!-- Start testimonial Area -->\n<section class=\"testimonial-area section-gap\">\n\t<div class=\"container\">\n\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t<div class=\"menu-content pb-70 col-lg-8\">\n\t\t\t\t<div class=\"title text-center\">\n\t\t\t\t\t<h1 class=\"mb-10\">Testimonial from our Clients</h1>\n\t\t\t\t\t<p>The French Revolution constituted for the conscience of the dominant aristocratic class a fall\n\t\t\t\t\t\tfrom </p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"active-testimonial\">\n\t\t\t\t<div class=\"single-testimonial item d-flex flex-row\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"../../assets/img/elements/user1.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tDo you want to be even more successful? Learn to love learning and growth. The more effort\n\t\t\t\t\t\t\tyou put into improving your skills, the bigger the payoff you.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<h4>Harriet Maxwell</h4>\n\t\t\t\t\t\t<div class=\"star\">\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"single-testimonial item d-flex flex-row\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"../../assets/img/elements/user2.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tA purpose is the eternal condition for success. Every former smoker can tell you just how\n\t\t\t\t\t\t\thard it is to stop smoking cigarettes. However.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<h4>Carolyn Craig</h4>\n\t\t\t\t\t\t<div class=\"star\">\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"single-testimonial item d-flex flex-row\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"../../assets/img/elements/user1.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tDo you want to be even more successful? Learn to love learning and growth. The more effort\n\t\t\t\t\t\t\tyou put into improving your skills, the bigger the payoff you.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<h4>Harriet Maxwell</h4>\n\t\t\t\t\t\t<div class=\"star\">\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"single-testimonial item d-flex flex-row\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"../../assets/img/elements/user2.png\" alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"desc\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tA purpose is the eternal condition for success. Every former smoker can tell you just how\n\t\t\t\t\t\t\thard it is to stop smoking cigarettes. However.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<h4>Carolyn Craig</h4>\n\t\t\t\t\t\t<div class=\"star\">\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star checked\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t\t<span class=\"fa fa-star\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- End testimonial Area -->"

/***/ }),

/***/ "./src/app/home/about-us.component.ts":
/*!********************************************!*\
  !*** ./src/app/home/about-us.component.ts ***!
  \********************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.pageTitle = 'About Us';
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/home/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/home/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/home/contact-us.component.css":
/*!***********************************************!*\
  !*** ./src/app/home/contact-us.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/contact-us.component.html":
/*!************************************************!*\
  !*** ./src/app/home/contact-us.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start banner Area -->\n<app-banner [title]='pageTitle'></app-banner>\n<!-- End banner Area -->\n\n<!-- Start contact-page Area -->\n<section class=\"contact-page-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row d-flex justify-content-center\">\n\t\t\t<div class=\"menu-content pb-70 col-lg-8\">\n\t\t\t\t<div class=\"title text-center\">\n\t\t\t\t\t<h1 class=\"mb-10\">We Address All Queries</h1>\n\t\t\t\t\t<p>Well educated, intellectual people, especially scientists at all times demonstrate considerably.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n    <div class=\"row\">\n      <!-- <div class=\"map-wrap\" style=\"width:100%; height: 445px;\" id=\"map\"></div> -->\n      <div class=\"col-lg-4 d-flex flex-column address-wrap\">\n        <div class=\"single-contact-address d-flex flex-row\">\n          <div class=\"icon\">\n            <span class=\"lnr lnr-home\"></span>\n          </div>\n          <div class=\"contact-details\">\n            <h5>Badlapur, Maharashtra</h5>\n            <p>\n              Sai Shraddha Complex, Katrap\n            </p>\n          </div>\n        </div>\n        <div class=\"single-contact-address d-flex flex-row\">\n          <div class=\"icon\">\n            <span class=\"lnr lnr-phone-handset\"></span>\n          </div>\n          <div class=\"contact-details\">\n            <h5>(989) 0438 982</h5>\n            <p>Mon to Fri 9am to 6 pm</p>\n          </div>\n        </div>\n        <div class=\"single-contact-address d-flex flex-row\">\n          <div class=\"icon\">\n            <span class=\"lnr lnr-envelope\"></span>\n          </div>\n          <div class=\"contact-details\">\n            <h5>trekeasy@asia.com</h5>\n            <p>Send us your query anytime!</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8\">\n        <form class=\"form-area contact-form text-right\" id=\"myForm\" action=\"mail.php\" method=\"post\">\n          <div class=\"row\">\n            <div class=\"col-lg-6 form-group\">\n              <input name=\"name\" placeholder=\"Enter your name\" onfocus=\"this.placeholder = ''\"\n                onblur=\"this.placeholder = 'Enter your name'\" class=\"common-input mb-20 form-control\" required=\"\"\n                type=\"text\">\n\n              <input name=\"email\" placeholder=\"Enter email address\"\n                pattern=\"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$\" onfocus=\"this.placeholder = ''\"\n                onblur=\"this.placeholder = 'Enter email address'\" class=\"common-input mb-20 form-control\" required=\"\"\n                type=\"email\">\n\n              <input name=\"subject\" placeholder=\"Enter subject\" onfocus=\"this.placeholder = ''\"\n                onblur=\"this.placeholder = 'Enter subject'\" class=\"common-input mb-20 form-control\" required=\"\"\n                type=\"text\">\n            </div>\n            <div class=\"col-lg-6 form-group\">\n              <textarea class=\"common-textarea form-control\" name=\"message\" placeholder=\"Enter Message\"\n                onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Enter Messege'\" required=\"\"></textarea>\n            </div>\n            <div class=\"col-lg-12\">\n              <div class=\"alert-msg\" style=\"text-align: left;\"></div>\n              <button class=\"genric-btn primary\" style=\"float: right;\">Send Message</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- End contact-page Area -->"

/***/ }),

/***/ "./src/app/home/contact-us.component.ts":
/*!**********************************************!*\
  !*** ./src/app/home/contact-us.component.ts ***!
  \**********************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
        this.pageTitle = 'Contact Us';
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/home/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/home/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/home/error.component.css":
/*!******************************************!*\
  !*** ./src/app/home/error.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/error.component.html":
/*!*******************************************!*\
  !*** ./src/app/home/error.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start banner Area -->\r\n<app-banner [title]='pageTitle'></app-banner>\r\n<!-- End banner Area -->\r\n\r\n\r\n<!-- Start destinations Area -->\r\n<section class=\"destinations-area section-gap\">\r\n    <div class=\"container\">\r\n        <div class=\"row d-flex justify-content-center\">\r\n            <div class=\"menu-content pb-40 col-lg-8\">\r\n                <div class=\"title text-center\">\r\n                    <h1 class=\"mb-10\">{{errorTitle}}</h1>\r\n                    <p>{{errorMessage}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/error.component.ts":
/*!*****************************************!*\
  !*** ./src/app/home/error.component.ts ***!
  \*****************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.pageTitle = 'Error';
        this.errorTitle = 'Page not found';
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/home/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/home/error.component.css")]
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-area relative\">\n  <div class=\"overlay overlay-bg\"></div>\t\t\t\t\n  <div class=\"container\">\n    <div class=\"row fullscreen align-items-center justify-content-between\" style=\"height: 625px;\">\n      <div class=\"col-lg-7 col-md-6 banner-left\">\n        <h6 class=\"text-white\">Away from monotonous life</h6>\n        <h1 class=\"text-white\">Dream Adventure</h1>\n        <p class=\"text-white\">\n          If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.\n        </p>\n        <a class=\"primary-btn text-uppercase\" [routerLink]='[\"/treks\"]'>Get Started</a>\n      </div>\n    </div>\n  </div>\t\t\t\t\t\n</section>\n\n<!-- Start other-issue Area -->\n<section class=\"other-issue-area section-gap\">\n\t<div class=\"container\">\n\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t<div class=\"menu-content pb-40 col-lg-9\">\n\t\t\t\t<div class=\"title text-center\">\n\t\t\t\t\t<h1 class=\"mb-10\">Activities of your interest</h1>\n\t\t\t\t\t<p>We all live in an age that belongs to the young at heart. Life that is.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\" *ngIf='activities && activities.length'>\n\t\t\t<div class=\"col-lg-3 col-md-6\" *ngFor='let activity of activities'>\n\t\t\t\t<div class=\"single-other-issue\" [routerLink]=\"['/treks/', activity.name]\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img class=\"img-fluid\" [src]='activity.imageURL' [title]='activity.name' alt=\"\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4>{{activity.name | titlecase}}</h4>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t{{activity.description}}\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t</div>\n</section>\n<!-- End other-issue Area -->\n\n<!-- Start popular-destination Area -->\n<section class=\"popular-destination-area section-gap\">\n  <div class=\"container\">\n          <div class=\"row d-flex justify-content-center\">\n              <div class=\"menu-content pb-40 col-lg-8\">\n                  <div class=\"title text-center\">\n                      <h1 class=\"mb-10\">Upcoming Events</h1>\n                      <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, day.</p>\n                  </div>\n              </div>\n          </div>\t\t\t\t\t\t\n    <div class=\"row\" *ngIf='treks && treks.length'>\n      <div class=\"col-lg-4 pb-40\" *ngFor='let trek of treks'>\n        <div class=\"single-destination relative\" [routerLink]=\"['/trek', trek.id]\">\n          <div class=\"thumb relative\">\n            <div class=\"overlay overlay-bg\"></div>\n            <img class=\"img-fluid\" [src] = 'trek.imageURL' [title] = 'trek.name' style=\"height:250px!important\">\n          </div>\n          <div class=\"desc\">\t\n            <a class=\"price-btn\">{{trek.eventDate | date:'mediumDate'}}</a>\t\t\t\n            <h4>{{trek.name}}</h4>\n            <p>{{trek.location}}</p>\t\t\t\n          </div>\n        </div>\n      </div>\t\t\t\t\t\t\t\t\t\t\t\n    </div>\n    <div class='row'>\n      <div class=\"col-lg-12\">\n        <div class=\"alert-msg\" style=\"text-align: left;\"></div>\n        <a class=\"primary-btn text-uppercase\" [routerLink]='[\"/treks\"]' style=\"float: right;\">More Events</a>\n        <!-- <button [routerLink]='[\"/treks\"]' class=\"genric-btn primary\" style=\"float: right;\">More Events</button>\t\t\t\t\t\t\t\t\t\t\t -->\n      </div>\n    </div>\n  </div>\t\n  \n</section>\n<!-- End popular-destination Area -->\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _treks_trek_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../treks/trek.service */ "./src/app/treks/trek.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(trekService) {
        this.trekService = trekService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getUpcomingTreks();
        this.getActivities();
        window.scrollTo(0, 0);
    };
    HomeComponent.prototype.getUpcomingTreks = function () {
        var _this = this;
        this.trekService.getUpcomingTreks().subscribe({
            next: function (treks) { _this.treks = treks; },
            error: function (err) { _this.errorMessage = err; }
        });
    };
    HomeComponent.prototype.getActivities = function () {
        var _this = this;
        this.trekService.getActivities().subscribe({
            next: function (activities) { _this.activities = activities; },
            error: function (err) { _this.errorMessage = err; }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_treks_trek_service__WEBPACK_IMPORTED_MODULE_1__["TrekService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.component */ "./src/app/home/about-us.component.ts");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/home/contact-us.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error.component */ "./src/app/home/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'about-us', component: _about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"] },
                    { path: 'contact-us', component: _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"] }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"],
                _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"],
                _error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"],
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/layout/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-banner relative\">\n  <div class=\"overlay overlay-bg\"></div>\n  <div class=\"container\">\n      <div class=\"row d-flex align-items-center justify-content-center\">\n          <div class=\"about-content col-lg-12\">\n              <h1 class=\"text-white\">\n                  {{title}}\n              </h1>\n              <!-- <p class=\"text-white link-nav\">\n                <a [routerLink]=\"['/home']\">Home </a> \n                <span class=\"lnr lnr-arrow-right\"></span> \n                <a [routerLink]=\"['/treks']\"> Treks</a></p> -->\n          </div>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/layout/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BannerComponent.prototype, "title", void 0);
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/layout/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/layout/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-area section-gap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3  col-md-6 col-sm-6\">\n        <div class=\"single-footer-widget\">\n          <h6>About Agency</h6>\n          <p>\n            The world has become so fast paced that people don’t want to stand by reading a page of information, they would much rather look at a presentation and understand the message. It has come to a point \n          </p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-6 col-sm-6\">\n        <div class=\"single-footer-widget\">\n          <h6>Navigation Links</h6>\n          <div class=\"row\">\n            <div class=\"col\">\n              <ul>\n                <li><a [routerLink]='[\"/home\"]'>Home</a></li>\n                <li><a [routerLink]='[\"/treks\"]'>Events</a></li>\n                <li><a [routerLink]=\"['/packages']\">Packages</a></li>\n                <li><a href=\"#\">Portfolio</a></li>\n              </ul>\n            </div>\n            <div class=\"col\">\n              <ul>\n                <li><a [routerLink]='[\"/about-us\"]'>About us</a></li>\n                <li><a href=\"#\">Pricing</a></li>\n                <li><a href=\"#\">Blog</a></li>\n                <li><a [routerLink]='[\"/contact-us\"]'>Contact</a></li>\n              </ul>\n            </div>\t\t\t\t\t\t\t\t\t\t\n          </div>\t\t\t\t\t\t\t\n        </div>\n      </div>\t\t\t\t\t\t\t\n      <div class=\"col-lg-3  col-md-6 col-sm-6\">\n        <div class=\"single-footer-widget\">\n          <h6>Newsletter</h6>\n          <p>\n            For business professionals caught between high OEM price and mediocre print and graphic output.\t\t\t\t\t\t\t\t\t\n          </p>\t\t\t\t\t\t\t\t\n          <div id=\"mc_embed_signup\">\n            <form target=\"_blank\" action=\"\" method=\"get\" class=\"subscription relative\">\n              <div class=\"input-group d-flex flex-row\">\n                <input name=\"EMAIL\" placeholder=\"Email Address\" onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Email Address '\" required=\"\" type=\"email\">\n                <button class=\"btn bb-btn\"><span class=\"lnr lnr-location\"></span></button>\t\t\n              </div>\t\t\t\t\t\t\t\t\t\n              <div class=\"mt-10 info\"></div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3  col-md-6 col-sm-6\">\n        <div class=\"single-footer-widget mail-chimp\">\n          <h6 class=\"mb-20\">InstaFeed</h6>\n          <ul class=\"instafeed d-flex flex-wrap\">\n            <li><img src=\"assets/img/i1.jpg\" alt=\"\"></li>\n            <li><img src=\"assets/img/i2.jpg\" alt=\"\"></li>\n            <li><img src=\"assets/img/i3.jpg\" alt=\"\"></li>\n            <li><img src=\"assets/img/i4.jpg\" alt=\"\"></li>\n            <li><img src=\"assets/img/i5.jpg\" alt=\"\"></li>\n            <li><img src=\"assets/img/i6.jpg\" alt=\"\"></li>\n            <li><img src=\"assets/img/i7.jpg\" alt=\"\"></li>\n            <li><img src=\"assets/img/i8.jpg\" alt=\"\"></li>\n          </ul>\n        </div>\n      </div>\t\t\t\t\t\t\n    </div>\n    <div class=\"row footer-bottom d-flex justify-content-between align-items-center\">\n      <p class=\"col-lg-8 col-sm-12 footer-text m-0\"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->\nCopyright &copy;{{year}} All rights reserved | This template is made with <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i> by <a href=\"https://colorlib.com\" target=\"_blank\">Colorlib</a>\n<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>\n      <div class=\"col-lg-4 col-sm-12 footer-social\">\n        <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-behance\"></i></a>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/layout/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.year = new Date().getFullYear();
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\n  <div class=\"header-top\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-6 col-sm-6 col-6 header-top-left\">\n          <!-- <ul>\n            <li><a href=\"#\">Visit Us</a></li>\n            <li><a href=\"#\">Buy Tickets</a></li>\n          </ul>\t\t\t -->\n        </div>\n        <div class=\"col-lg-6 col-sm-6 col-6 header-top-right\">\n        <div class=\"header-social\">\n          <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n          <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n          <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\n          <a href=\"#\"><i class=\"fa fa-behance\"></i></a>\n          <!-- <a (click)=\"doLogin()\">Login / Register </a> -->\n          <app-login></app-login>\n        </div>\n        </div>\n      </div>\t\t\t  \t\t\t\t\t\n    </div>\n  </div>\n   <div class=\"container main-menu\">\n    <div class=\"row align-items-center justify-content-between d-flex\">\n        <div id=\"logo\">\n          <a href=\"index.html\"><img src=\"assets/img/logo.png\" alt=\"\" title=\"\" /></a>\n        </div>\n        <nav id=\"nav-menu-container\">\n          <ul class=\"nav-menu\">\n            <li><a [routerLink]=\"['/home']\">Home</a></li>\n            <li><a [routerLink]=\"['/treks']\">Events</a></li>\n            <li class=\"menu-has-children\"><a [routerLink]=\"['/treks']\" class=\"sf-with-ul\">Activities</a>\n              <ul style=\"display: none;\" *ngIf='activities && activities.length'>\n                <li *ngFor='let activity of activities'><a [routerLink]=\"['/treks/', activity.name]\" >{{activity.name | titlecase | convertToSpaces:'-'}}</a></li>\n              </ul>\n            </li>\n            <li><a [routerLink]=\"['/packages']\">Packages</a></li>\n            <li><a [routerLink]=\"['/about-us']\">About</a></li>\t\t\t\t          \t\t\t\t\t          \t\t          \n            <li><a [routerLink]=\"['/contact-us']\">Contact</a></li>\n          </ul>\n        </nav><!-- #nav-menu-container -->\t\t\t\t\t      \t\t  \n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/layout/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _treks_trek_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../treks/trek.service */ "./src/app/treks/trek.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {LoginComponent} from '../shared/components/login.component'
var HeaderComponent = /** @class */ (function () {
    // @ViewChild(LoginComponent)
    // private loginComponent: LoginComponent
    function HeaderComponent(trekService) {
        this.trekService = trekService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getActivities();
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
    };
    HeaderComponent.prototype.getActivities = function () {
        var _this = this;
        this.trekService.getActivities().subscribe({
            next: function (activities) { _this.activities = activities; },
            error: function (err) { _this.errorMessage = err; }
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header.component.css")]
        }),
        __metadata("design:paramtypes", [_treks_trek_service__WEBPACK_IMPORTED_MODULE_1__["TrekService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/layout/header.component.ts");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/layout/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [
                _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ],
            exports: [
                _header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/shared/components/gallery.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/gallery.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/gallery.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/gallery.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"grid-item\"\n  *ngFor=\"let item of items; let i = index\" [attr.lightbox]=\"i\">\n  <img [src]=\"item.data.thumbnail\">\n</div> -->\n\n\n<!-- The Modal -->\n<div class=\"modal\" [style.display]=\"showModal ? 'block' : 'none'\">\n\n  <!-- The Close Button -->\n  <span class=\"close\" (click)=\"hide()\">&times;</span>\n\n  <!-- Modal Content (The Image) -->\n  <!-- <img class=\"modal-content\" [src]=\"imageUrl\"> -->\n\n  <div id=\"details\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div *ngFor='let imgUrl of imageUrls; let i = index' [ngClass] ='i == 0 ? \"carousel-item active\" : \"carousel-item\"'>\n        <img class=\"modal-content\" [src]=\"imgUrl\">\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" *ngIf=\"imageUrls.length > 1\" (click)=\"moveSlides(-1)\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" *ngIf=\"imageUrls.length > 1\" (click)=\"moveSlides(1)\" role=\"button\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n\n\n  <!-- Modal Caption (Image Text) -->\n  <div id=\"caption\"></div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/gallery.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/gallery.component.ts ***!
  \********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Gallery, GalleryItem } from '@ngx-gallery/core';
// import { Lightbox } from '@ngx-gallery/lightbox';
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        // items: GalleryItem[];
        // @Input() images: string[];
        // galleryId = 'myLightbox';
        this.imageUrls = [""];
        this.slideIndex = 1;
    }
    // constructor(public gallery: Gallery, private lightbox: Lightbox) { }
    GalleryComponent.prototype.ngOnInit = function () {
        //   // Load items into gallery
        //   const galleryRef = this.gallery.ref(this.galleryId);
        //   galleryRef.load(this.items);
    };
    // openInFullScreen(index: number) {
    //   this.lightbox.open(index, this.galleryId, {
    //     panelClass: 'fullscreen'
    //   });
    // }
    GalleryComponent.prototype.moveSlides = function (n) {
        this.showSlides(this.slideIndex += n);
    };
    GalleryComponent.prototype.showSlides = function (n) {
        var slides = document.getElementsByClassName("carousel-item");
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].className = slides[i].className.replace(" active", "");
        }
        //console.log("slide index: ", this.slideIndex);
        slides[this.slideIndex - 1].className += " active";
    };
    GalleryComponent.prototype.show = function () {
        this.showModal = true;
        //this.slideIndex = 1;
    };
    GalleryComponent.prototype.hide = function () {
        this.showModal = false;
        //this.slideIndex = 1;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GalleryComponent.prototype, "showModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GalleryComponent.prototype, "imageUrls", void 0);
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/shared/components/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/shared/components/gallery.component.css")]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login{\r\n    text-align: left;\r\n    vertical-align: middle;\r\n    background-color: white;\r\n    width: 30%;\r\n    margin: 0 auto;\r\n    padding: 20px 20px;\r\n    box-shadow: 0px 10px 30px 0px rgba(60, 64, 143, 0.2);\r\n}\r\n\r\n.login-link{\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/shared/components/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <a *ngIf=\"!currentUser\" class=\"login-link\" (click)=\"show()\">Login / Register </a>\n    <span *ngIf=\"isLoggedIn && currentUser\"> Welcome, {{ currentUser.firstName}} <a class=\"login-link\" (click)=\"logout()\">Logout</a></span>\n\n\n\n<!-- The Modal -->\n<div class=\"modal\" [style.display]=\"showModal ? 'block' : 'none'\">\n\n    <!-- The Close Button -->\n    <span class=\"close\" (click)=\"hide()\">&times;</span>\n\n    <!-- Modal Caption (Image Text) -->\n    <div class='login'>\n        <h2>Login</h2>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <button type=\"submit\" [disabled]=\"loading\" class=\"primary-btn text-uppercase\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Login\n                </button>\n                <a routerLink=\"/register\" class=\"primary-btn text-uppercase\" style=\"background: #222;\">Register</a>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/components/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.isLoggedIn = false;
        if (this.authenticationService.currentUser) {
            this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
            this.isLoggedIn = true;
            //this.router.navigate(["/"]);
        }
        else {
            this.isLoggedIn = false;
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("submitted");
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            console.log("invalid");
            return;
        }
        this.loading = true;
        this.authenticationService
            .login(this.f.username.value, this.f.password.value)
            .subscribe(function (data) {
            if (data && data.token) {
                _this.isLoggedIn = true;
                _this.hide();
                console.log(JSON.stringify(data));
                // this.router.navigate([this.returnUrl]);
            }
        }, function (error) {
            // this.alertService.error(error);
            _this.errorMessage = error;
            console.log(error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.isLoggedIn = false;
        window.location.reload();
    };
    LoginComponent.prototype.show = function () {
        this.showModal = true;
    };
    LoginComponent.prototype.hide = function () {
        this.showModal = false;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/shared/components/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/shared/components/login.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/star.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/components/star.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .crop {\r\n    overflow:hidden;\r\n}\r\n\r\ndiv {\r\n    cursor: pointer;\r\n} */\r\n.score {\r\n    display: block;\r\n    font-size: 16px;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n.score-wrap {\r\n    display: inline-block;\r\n    position: relative;\r\n    height: 19px;\r\n  }\r\n.score .stars-active {\r\n    color: #EEBD01;\r\n    position: relative;\r\n    z-index: 10;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n  }\r\n.score .stars-inactive {\r\n    color: grey;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-text-stroke: initial;\r\n    /* overflow: hidden; */\r\n  }\r\n "

/***/ }),

/***/ "./src/app/shared/components/star.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/components/star.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class='star' [style.width.px] = 'starWidth' [title] = 'rating' (click)='onClick()'>\n  <div style='width:75px'>\n    <span class='fa fa-star'></span>\n    <span class='fa fa-star'></span>\n    <span class='fa fa-star'></span>\n    <span class='fa fa-star'></span>\n    <span class='fa fa-star'></span>\n  </div>\n</div> -->\n\n<span class=\"score\">\n  <div class=\"score-wrap\">\n      <span class=\"stars-active\" [style.width.%] = 'starWidth' [title] = 'rating'>\n          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n      </span>\n<span class=\"stars-inactive\">\n          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n      </span>\n</div>\n</span>\n"

/***/ }),

/***/ "./src/app/shared/components/star.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/components/star.component.ts ***!
  \*****************************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.ratingClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = (this.rating * 100) / 5;
    };
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-star',
            template: __webpack_require__(/*! ./star.component.html */ "./src/app/shared/components/star.component.html"),
            styles: [__webpack_require__(/*! ./star.component.css */ "./src/app/shared/components/star.component.css")]
        })
    ], StarComponent);
    return StarComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/timeline.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/timeline.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* Timeline */\r\n.timeline-tl-container{\r\n    width:100%;\r\n    display:block;\r\n    position:relative;\r\n  }\r\n.timeline-tl-container ul.tl{\r\n      margin:20px 0;\r\n      padding:0;\r\n      display:inline-block;\r\n  \r\n  }\r\n.timeline-tl-container ul.tl li{\r\n      list-style: none;\r\n      margin-left:200px;\r\n      min-height:50px;\r\n      /*background: rgba(255,255,0,0.1);*/\r\n      border-left:2px dashed #86D6FF;\r\n      padding:0 0 30px 30px;\r\n      position:relative;\r\n  }\r\n.timeline-tl-container ul.tl li:last-child{ border-left:0;}\r\n.timeline-tl-container ul.tl li::before{\r\n      position: absolute;\r\n      left: -18px;\r\n      top: -5px;\r\n      content: \" \";\r\n      border: 8px solid rgba(255, 255, 255, 0.74);\r\n      border-radius: 500%;\r\n      background: #258CC7;\r\n      height: 30px;\r\n      width: 30px;\r\n      transition: all 500ms ease-in-out;\r\n  \r\n  }\r\n.timeline-tl-container ul.tl li:hover::before{\r\n      border-color:  #258CC7;\r\n      transition: all 1000ms ease-in-out;\r\n  }\r\nul.tl li .item-title{\r\n     /* font-weight: bold;*/\r\n  }\r\nul.tl li .item-detail{\r\n      color:rgba(0,0,0,0.5);\r\n      font-size:12px;\r\n  }\r\nul.tl li .timestamp{\r\n      color: #8D8D8D;\r\n      position: absolute;\r\n    width:100px;\r\n      left: -50%;\r\n      text-align: right;\r\n      font-size: 12px;\r\n  }\r\n.timeline-tl-container span {\r\n  font-weight: bold;\r\n  font-size: large;\r\n  margin-left: 40px;\r\n  float: left;\r\n  }\r\n.panel-title{\r\n    margin-bottom: 20px;\r\n}\r\n.panel-title a{\r\n      width: 100%;\r\n    color: white!important;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/timeline.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/timeline.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start Timeline Area -->\n<div class=\"timeline-tl-container\">\n    <div class=\"panel-group\" id=\"accordion\">\n        <div class=\"panel panel-default\" *ngFor='let day of schedule.schedule'>\n            <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                    <a class=\"primary-btn text-uppercase\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"{{'#collapse' + day.id}}\">\n                        {{ 'Day ' + day.id}}\n                    </a>\n                </h4>\n            </div>\n            <div id=\"{{'collapse'+ day.id}}\" class=\"panel-collapse collapse in\">\n                <div class=\"panel-body\">\n                    <ul class=\"tl\">\n                        <li class=\"tl-item\" *ngFor='let todo of day.todo'>\n                            <div class=\"timestamp\">\n                                {{todo.time}}\n                            </div>\n                            <div class=\"item-title\">{{todo.activity}}</div>\n                            <!-- <div class=\"item-detail\">Don't forget the ring</div>  -->\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- End Timeline Area-->"

/***/ }),

/***/ "./src/app/shared/components/timeline.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/timeline.component.ts ***!
  \*********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _treks_trek_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../treks/trek.service */ "./src/app/treks/trek.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineComponent = /** @class */ (function () {
    function TimelineComponent(trekService) {
        this.trekService = trekService;
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TimelineComponent.prototype, "schedule", void 0);
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/shared/components/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/shared/components/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [_treks_trek_service__WEBPACK_IMPORTED_MODULE_1__["TrekService"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/shared/guards/identifier.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/guards/identifier.guard.ts ***!
  \***************************************************/
/*! exports provided: IdentifierGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentifierGuard", function() { return IdentifierGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IdentifierGuard = /** @class */ (function () {
    function IdentifierGuard(router) {
        this.router = router;
    }
    IdentifierGuard.prototype.canActivate = function (next, state) {
        var id = +next.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid Id');
            this.router.navigate(['/treks']);
            return false;
        }
        return true;
    };
    IdentifierGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IdentifierGuard);
    return IdentifierGuard;
}());



/***/ }),

/***/ "./src/app/shared/level.ts":
/*!*********************************!*\
  !*** ./src/app/shared/level.ts ***!
  \*********************************/
/*! exports provided: Level */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level", function() { return Level; });
var Level;
(function (Level) {
    Level[Level["Easy"] = 0] = "Easy";
    Level[Level["Moderate"] = 1] = "Moderate";
    Level[Level["Hard"] = 2] = "Hard";
})(Level || (Level = {}));


/***/ }),

/***/ "./src/app/shared/pipes/convert-to-spaces.pipe.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/convert-to-spaces.pipe.ts ***!
  \********************************************************/
/*! exports provided: ConvertToSpacesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToSpacesPipe", function() { return ConvertToSpacesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConvertToSpacesPipe = /** @class */ (function () {
    function ConvertToSpacesPipe() {
    }
    ConvertToSpacesPipe.prototype.transform = function (value, character) {
        return value.replace(character, ' ');
    };
    ConvertToSpacesPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'convertToSpaces'
        })
    ], ConvertToSpacesPipe);
    return ConvertToSpacesPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/authentication.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/authentication.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
        this.loginUrl = "assets/data/users.json";
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "getCurrentUser", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.getUser = function (username, password) {
        return this.httpClient.get(this.loginUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) { return users.find(function (u) { return u.username == username && u.password == password; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.getUser(username, password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = "Client side or Network Error Occured " + err.error.message;
        }
        else {
            errorMessage = "Server returned code " + err.status + ", error message " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_star_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/star.component */ "./src/app/shared/components/star.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/timeline.component */ "./src/app/shared/components/timeline.component.ts");
/* harmony import */ var _layout_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/banner.component */ "./src/app/layout/banner.component.ts");
/* harmony import */ var _components_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/gallery.component */ "./src/app/shared/components/gallery.component.ts");
/* harmony import */ var _pipes_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/convert-to-spaces.pipe */ "./src/app/shared/pipes/convert-to-spaces.pipe.ts");
/* harmony import */ var _components_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login.component */ "./src/app/shared/components/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [
                _components_star_component__WEBPACK_IMPORTED_MODULE_3__["StarComponent"],
                _components_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"],
                _layout_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
                _components_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"],
                _components_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _pipes_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_8__["ConvertToSpacesPipe"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _components_star_component__WEBPACK_IMPORTED_MODULE_3__["StarComponent"],
                _components_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"],
                _layout_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
                _components_gallery_component__WEBPACK_IMPORTED_MODULE_7__["GalleryComponent"],
                _components_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _pipes_convert_to_spaces_pipe__WEBPACK_IMPORTED_MODULE_8__["ConvertToSpacesPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/treks/packages.component.css":
/*!**********************************************!*\
  !*** ./src/app/treks/packages.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/treks/packages.component.html":
/*!***********************************************!*\
  !*** ./src/app/treks/packages.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start banner Area -->\n<app-banner [title]='pageTitle'></app-banner>\n<!-- End banner Area -->\n\n<!-- Start price Area -->\n<section class=\"price-area section-gap\">\n\t<div class=\"container\">\n\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t<div class=\"menu-content pb-70 col-lg-8\">\n\t\t\t\t<div class=\"title text-center\">\n\t\t\t\t\t<h1 class=\"mb-10\">We Provide Affordable Prices</h1>\n\t\t\t\t\t<p>Well educated, intellectual people, especially scientists at all times demonstrate considerably.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"single-price\">\n\t\t\t\t\t<h4>Corporate Packages</h4>\n\t\t\t\t\t<ul class=\"price-list\">\n\t\t\t\t\t\t<li class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t<span>Treks</span>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">10% Off</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t<span>Camps</span>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">15% Off</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t<span>Tours</span>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">5% Off</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"single-price\">\n\t\t\t\t\t<h4>Student Packages</h4>\n\t\t\t\t\t<ul class=\"price-list\">\n\t\t\t\t\t\t<li class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t<span>Treks</span>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">20% Off</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t<span>Camps</span>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">15% Off</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t<span>Tours</span>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">10% Off</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t<div class=\"single-price\">\n\t\t\t\t\t<h4>Family Packages</h4>\n\t\t\t\t\t<ul class=\"price-list\">\n\t\t\t\t\t\t<li class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t<span>Treks</span>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">10% Off</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t<span>Camps</span>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">20% Off</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"d-flex justify-content-between align-items-center\">\n\t\t\t\t\t\t\t<span>Tours</span>\n\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">5% Off</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!-- End price Area -->\n"

/***/ }),

/***/ "./src/app/treks/packages.component.ts":
/*!*********************************************!*\
  !*** ./src/app/treks/packages.component.ts ***!
  \*********************************************/
/*! exports provided: PackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesComponent", function() { return PackagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PackagesComponent = /** @class */ (function () {
    function PackagesComponent() {
        this.pageTitle = 'Packages';
    }
    PackagesComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    PackagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-packages',
            template: __webpack_require__(/*! ./packages.component.html */ "./src/app/treks/packages.component.html"),
            styles: [__webpack_require__(/*! ./packages.component.css */ "./src/app/treks/packages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PackagesComponent);
    return PackagesComponent;
}());



/***/ }),

/***/ "./src/app/treks/trek-detail.component.css":
/*!*************************************************!*\
  !*** ./src/app/treks/trek-detail.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inclusions {\r\nmargin-bottom: 20px;\r\n}\r\n\r\n.inclusions li::before{\r\n border-color:  #27c25a!important;\r\n}\r\n\r\n.exclusions li::before{\r\n  border-color:  #e63232!important;\r\n   }\r\n\r\n.inclusions-background{\r\n    box-shadow: 0px 10px 30px 0px rgba(60, 64, 143, 0.2);\r\n    padding: 20px 20px;\r\n}\r\n\r\n.sticky{\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 100px;\r\n  z-index: 1000;\r\n}\r\n\r\n.book-now {\r\n  width: 200px;\r\n  float: right;\r\n  box-shadow: 0px 10px 30px 0px rgba(60, 64, 143, 0.2);\r\n  padding: 20px 20px;\r\n  margin-top: 20px;\r\n  margin-right: 30px;\r\n  text-align: center;\r\n  background-color: #FFF;\r\n}\r\n\r\n.book-now .old-price{\r\n  text-decoration: line-through;\r\n  padding: 2px;\r\n}\r\n\r\n.book-now .new-price{\r\n  font-weight: bold;\r\n  padding: 2px;\r\n}"

/***/ }),

/***/ "./src/app/treks/trek-detail.component.html":
/*!**************************************************!*\
  !*** ./src/app/treks/trek-detail.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start banner Area -->\n<app-banner [title]='pageTitle'></app-banner>\n<!-- End banner Area -->\n\n<div class=\"sticky\">\n    <div class=\"book-now\" *ngIf='trek.eventDate'>\n        <span class='old-price'>{{ trek.price | currency:'INR' }}</span>\n        <span class='new-price'>{{ trek.price - 200 | currency:'INR' }}</span>\n        <a class=\"primary-btn text-uppercase\"> Book Now </a>\n    </div> \n</div>   \n\n<!-- Start Content Area -->\n<section class=\"insurence-one-area section-gap\">\n    <div class=\"container\">  \n        <div class=\"row align-items-center\" *ngIf='trek'>\n            <div class=\"col-lg-6 insurence-left\">\n                <img class=\"img-fluid img-one\" [src]='trek.imageURL' [title]='trek.name'>\n                <a id='viewGallery' *ngIf='trek.gallery.length' (click)=\"showGallery()\" class=\"primary-btn text-uppercase mt-10 mb-10\">View Gallery</a>\n            </div>\n            <div class=\"col-lg-6 insurence-right\">\n                <!-- <a class=\"primary-btn text-uppercase\" (click)='onBack()' style=\"float: right;\">Back</a> -->\n                <h6 class=\"text-uppercase\">Need to know</h6>\n                <h1>{{trek.name}}</h1>\n                <app-star [rating]='trek.rating'>\n                </app-star>\n                <p>\n                    {{trek.description}}\n                </p>\n                <h5>Key Attractions</h5>\n                <div class=\"list-wrap\" *ngIf='trek.attractions.length'>\n                    <ul>\n                        <li *ngFor='let attraction of trek.attractions'>{{attraction.toString()}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End Content Area -->\n\n<!--Start Timeline Area-->\n<section class=\"insurence-one-area section-gap section-top-border\" *ngIf='tripSchedule && tripSchedule.schedule'>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 insurence-left\">\n                    <h3 class=\"mb-30\">Schedule</h3>\n                    <app-timeline [schedule]='tripSchedule'></app-timeline>\n            </div>\n            <div class=\"col-lg-4 insurence-right inclusions-background\" *ngIf='tripSchedule.inclusions || tripSchedule.exclusions'>\n                        <div class=\"inclusions\" *ngIf='tripSchedule.inclusions'>\n                            <h3 class=\"mb-20\">Inclusions</h3>\n                            <ul class=\"unordered-list\">\n                                <li *ngFor='let inclusion of tripSchedule.inclusions'>{{inclusion}}</li>\n                            </ul>\n                        </div>\n                        <div class=\"exclusions\" *ngIf='tripSchedule.exclusions'>\n                            <h3 class=\"mb-20\">Exclusions</h3>\n                            <ul class=\"unordered-list\">\n                                <li *ngFor='let exclusion of tripSchedule.exclusions'>{{exclusion}}</li>                         \n                            </ul>\n                        </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--End Timeline Area-->\n\n<!-- Start popular-destination Area -->\n<section class=\"popular-destination-area section-gap\">\n    <div class=\"container\">\n        <div class=\"row d-flex justify-content-center\">\n            <div class=\"menu-content pb-40 col-lg-8\">\n                <div class=\"title text-center\">\n                    <h1 class=\"mb-10\">Related Events</h1>\n                    <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,\n                        day.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf='treks && treks.length'>\n            <div class=\"col-lg-4 pb-40\" *ngFor='let trek of treks'>\n                <div class=\"single-destination relative\" [routerLink]=\"['/trek', trek.id]\">\n                    <div class=\"thumb relative\">\n                        <div class=\"overlay overlay-bg\"></div>\n                        <img class=\"img-fluid\" [src]='trek.imageURL' [title]='trek.name' style=\"height:250px!important\">\n                    </div>\n                    <div class=\"desc\">\n                        <a class=\"price-btn\" *ngIf='trek && trek.eventDate'>{{trek.eventDate | date:'mediumDate'}}</a>\n                        <h4>{{trek.name}}</h4>\n                        <p>{{trek.location}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class='row'>\n            <div class=\"col-lg-12\">\n                <div class=\"alert-msg\" style=\"text-align: left;\"></div>\n                <a class=\"primary-btn text-uppercase\" [routerLink]='[\"/treks\"]' style=\"float: right;\">More Events</a>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End popular-destination Area -->\n\n<!-- Start testimonial Area -->\n<section class=\"testimonial-area section-gap\" *ngIf='reviews && reviews.length'>\n    <div class=\"container\">\n        <div class=\"row d-flex justify-content-center\">\n            <div class=\"menu-content pb-70 col-lg-8\">\n                <div class=\"title text-center\">\n                    <h1 class=\"mb-10\">Testimonial from our Clients</h1>\n                    <p>The French Revolution constituted for the conscience of the dominant aristocratic class a fall\n                        from </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"active-testimonial\">\n                <div class=\"single-testimonial item d-flex flex-row\" *ngFor='let review of reviews'>\n                    <div class=\"thumb\">\n                        <img class=\"img-fluid\" [src]='\"assets/img/users/\" + review.userId + \".jpg\"' alt=\"\">\n                    </div>\n                    <div class=\"desc\">\n                        <p>\n                           {{review.comment}}\n                        </p>\n                        <h4>{{review.name}}</h4>\n                        <app-star [rating]='review.rating'></app-star>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End testimonial Area -->\n\n<div id=\"imageGallery\" class=\"section-top-border\" *ngIf='trek && trek.gallery.length'>\n    <app-gallery [imageUrls]='trek.gallery'></app-gallery>\n    <!-- <div class=\"row gallery-item\">\n        <div [ngClass]=\"i % 2 == 0 ? 'col-md-2' : 'col-md-3'\" *ngFor='let img of trek.gallery; let i = index;'>\n            <a [href]='imagePath + trek.id + \"/\" + img' class=\"img-gal\"><div class=\"single-gallery-image\" \n               [ngStyle]=\"{'background': 'url(' + imagePath + trek.id + '/' + img + ')'}\"></div></a>\n        </div>\n    </div> -->\n\n    <!-- <div class=\"row gallery-item\">\n        <div class=\"col-md-4\">\n            <a href=\"assets/img/treks/1/harishchandreshwartemple.jpg\" class=\"img-gal\">\n                <div class=\"single-gallery-image\" style=\"background: url(assets/img/treks/1/harishchandreshwartemple.jpg);\"></div></a>\n        </div>\n        <div class=\"col-md-4\">\n            <a href=\"assets/img/treks/1/panoroma.jpg\" class=\"img-gal\">\n                <div class=\"single-gallery-image\" style=\"background: url(assets/img/treks/1/panoroma.jpg);\"></div></a>\n        </div>\n        <div class=\"col-md-4\">\n            <a href=\"assets/img/treks/1/kedareshwarcave.jpg\" class=\"img-gal\">\n                <div class=\"single-gallery-image\" style=\"background: url(assets/img/treks/1/kedareshwarcave.jpg);\"></div></a>\n        </div>\n        <div class=\"col-md-6\">\n            <a href=\"assets/img/treks/1/kokankada.jpg\" class=\"img-gal\">\n                <div class=\"single-gallery-image\" style=\"background: url(assets/img/treks/1/kokankada.jpg);\"></div></a>\n        </div>\n    </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/treks/trek-detail.component.ts":
/*!************************************************!*\
  !*** ./src/app/treks/trek-detail.component.ts ***!
  \************************************************/
/*! exports provided: TrekDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrekDetailComponent", function() { return TrekDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trek_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trek.service */ "./src/app/treks/trek.service.ts");
/* harmony import */ var _shared_components_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/gallery.component */ "./src/app/shared/components/gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrekDetailComponent = /** @class */ (function () {
    function TrekDetailComponent(route, router, trekService) {
        this.route = route;
        this.router = router;
        this.trekService = trekService;
        this.pageTitle = 'Details';
        this.imagePath = 'assets/img/treks/';
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    TrekDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.getTrek(id);
        this.getSchedule(id);
        this.getReviews(id);
        window.scrollTo(0, 0);
    };
    TrekDetailComponent.prototype.ngAfterViewInit = function () {
    };
    TrekDetailComponent.prototype.getTrek = function (id) {
        var _this = this;
        this.trekService.getTrekDetails(id).subscribe({
            next: function (trek) { _this.trek = trek; _this.getRelatedEvents(trek.id, trek.activities); },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    TrekDetailComponent.prototype.getRelatedEvents = function (id, activities) {
        var _this = this;
        this.trekService.getRelatedTreks(id, activities).subscribe({
            next: function (treks) { return _this.treks = treks; },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    TrekDetailComponent.prototype.getSchedule = function (id) {
        var _this = this;
        this.trekService.getScheduleDetails(id).subscribe({
            next: function (schedule) { _this.tripSchedule = schedule; },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    TrekDetailComponent.prototype.getReviews = function (id) {
        var _this = this;
        this.trekService.getReviews(id).subscribe({
            next: function (reviews) { _this.reviews = reviews; },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    TrekDetailComponent.prototype.onBack = function () {
        this.router.navigate(['/treks']);
    };
    TrekDetailComponent.prototype.showGallery = function () {
        this.galleryComponent.show();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"]),
        __metadata("design:type", _shared_components_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"])
    ], TrekDetailComponent.prototype, "galleryComponent", void 0);
    TrekDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./trek-detail.component.html */ "./src/app/treks/trek-detail.component.html"),
            styles: [__webpack_require__(/*! ./trek-detail.component.css */ "./src/app/treks/trek-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _trek_service__WEBPACK_IMPORTED_MODULE_2__["TrekService"]])
    ], TrekDetailComponent);
    return TrekDetailComponent;
}());



/***/ }),

/***/ "./src/app/treks/trek-list.component.css":
/*!***********************************************!*\
  !*** ./src/app/treks/trek-list.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* thead {\r\n    color: #337AB7\r\n} */\r\n.slidecontainer{\r\n  width: 100%;\r\n  min-width: 120px;\r\n}\r\n.slidecontainer span{\r\n  margin-top: -7px;\r\n  padding: 2px;\r\n}\r\n.slider {\r\n    -webkit-appearance: none;\r\n    width: 70%;\r\n    height: 10px;\r\n    border-radius: 5px;  \r\n    background: #d3d3d3;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    transition: opacity .2s;\r\n  }\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 18px;\r\n    height: 18px;\r\n    border-radius: 50%; \r\n    background: #258CC7;\r\n    cursor: pointer;\r\n  }\r\n.slider::-moz-range-thumb {\r\n    width: 25px;\r\n    height: 25px;\r\n    border-radius: 50%;\r\n    background: #258CC7;\r\n    cursor: pointer;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/treks/trek-list.component.html":
/*!************************************************!*\
  !*** ./src/app/treks/trek-list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class='card'>\r\n     <div class='card-header'>\r\n        {{pageTitle}}\r\n    </div> \r\n<div class='card-body'>\r\n    <div class='row'>\r\n        <div class='col-md-2'> Filter By:</div>\r\n        <div class='col-md-8'><input type='text' [(ngModel)]='listFilter' /></div>\r\n        <div class='col-md-2'> Filtered By: {{listFilter}}</div>\r\n    </div>\r\n</div>\r\n<div class='table-responsive'>\r\n    <table class='table' *ngIf='treks && treks.length'>\r\n        <thead>\r\n            <tr>\r\n                <th><button class='btn btn-primary' (click)='toggleImage()' >  {{showImage ? 'Hide' : 'Show'}} Image</button> </th>\r\n                <th>Name</th>\r\n                <th>Location</th>\r\n                <th>Difficulty Level</th>\r\n                <th>Rating</th>\r\n                <th>Price</th>\r\n            </tr>  \r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor='let trek of filteredTreks'>\r\n                <td><img *ngIf='showImage' [src] = 'trek.imageURL' [title] = 'trek.name' [style.width.px] = 'previewWidth' [style.margin.px] = 'previewMargin'></td>\r\n                <td><a [routerLink]=\"['/trek', trek.id]\">{{trek.name | convertToSpaces:'-'}}</a></td>\r\n                <td>{{trek.location}}</td>\r\n                <td>{{trek.level}}</td>\r\n                <td><app-star [rating] = 'trek.rating' (ratingClicked) ='onRatingClicked($event)'></app-star></td>\r\n                <td>{{trek.price | currency:'INR':'symbol':'1.2-2'}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n</div> -->\r\n\r\n<!-- start banner Area -->\r\n<app-banner [title]='pageTitle'></app-banner>\r\n<!-- End banner Area -->\r\n\r\n<!-- Start destinations Area -->\r\n<section class=\"destinations-area section-gap\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2 sidebar-widgets\">\r\n                <div class=\"widget-wrap\">\r\n                    <div class=\"single-sidebar-widget tag-cloud-widget\">\r\n                        <h4 class=\"tagcloud-title\">Filters</h4>\r\n                        <h6 id='ulActivity'>Activities</h6><br />\r\n                        <ul *ngIf='activities && activities.length'>\r\n                            <li (click)='applyFilter(i, \"activities\")' \r\n                                [ngClass]='activity.name === selectedActivity ? \"filter-activities selected\" : \"filter-activities\"'\r\n                                *ngFor='let activity of activities; let i = index'>\r\n                                <a>{{activity.name | titlecase | convertToSpaces:'-'}}</a>\r\n                            </li>\r\n                        </ul>\r\n                        <br />\r\n                        <h6>Difficulty</h6><br />\r\n                        <ul>\r\n                            <li (click)='applyFilter(i,\"levels\")' class='filter-levels' *ngFor='let level of levels; let i = index'>\r\n                                <a>{{level.toString()}}</a>\r\n                            </li>\r\n                        </ul>\r\n                        <br />\r\n                        <h6>Price</h6><br />\r\n                        <!-- <div class=\"percentage\">\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar color-3\" role=\"progressbar\" style=\"width: 55%\"\r\n                                    aria-valuenow=\"55\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"slidecontainer\">\r\n                            <span>0</span> \r\n                            <input type=\"range\" (change)='performFilter($event)' min=\"0\" max=\"10000\" value=\"0\" class=\"slider\" id=\"priceRange\"> \r\n                            <span>10k</span>\r\n                            <div style=\"text-align:center;\">Max : <strong> {{ maxPrice | currency:'INR'}} </strong></div>\r\n                          </div>                       \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-10\">\r\n                <div class=\"row d-flex justify-content-center\">\r\n                    <div class=\"menu-content col-lg-8\">\r\n                        <div class=\"title text-center\" *ngIf='filteredTreks && filteredTreks.length'>\r\n                            <h1 class=\"mb-10\">Popular Destinations</h1>\r\n                            <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely\r\n                                fast.</p>\r\n                        </div>\r\n                        <div class=\"title text-center\" *ngIf='filteredTreks && filteredTreks.length == 0'>\r\n                            <h1 class=\"mb-10\">No Events</h1>\r\n                            <p>There are no matching events, please try some different options.</p>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf='filteredTreks && filteredTreks.length'>\r\n                    <div class=\"col-lg-4\" *ngFor='let trek of filteredTreks'>\r\n                        <div class=\"single-destinations\" [routerLink]=\"['/trek', trek.id]\">\r\n                            <div class=\"thumb\" style=\"height:180px!important\">\r\n                                <img *ngIf='showImage' [src]='trek.imageURL' [title]='trek.name'>\r\n                            </div>\r\n                            <div class=\"details\">\r\n                                <h4 class=\"d-flex justify-content-between\">\r\n                                    <span>{{trek.name | convertToSpaces:'-'}}</span>\r\n                                    <app-star [rating]='trek.rating' (ratingClicked)='onRatingClicked($event)'>\r\n                                    </app-star>\r\n                                </h4>\r\n                                <p>\r\n                                    {{trek.location}} | View on map | 49 Reviews\r\n                                </p>\r\n                                <ul class=\"package-list\">\r\n                                    <li class=\"d-flex justify-content-between align-items-center\">\r\n                                        <span>Activities</span>\r\n                                        <!-- <span>{{trek.activities.toString()}}</span> -->\r\n                                        <span>\r\n                                            <strong\r\n                                                *ngFor='let activity of trek.activities'>{{activity + ' ' | titlecase}}</strong>\r\n                                        </span>\r\n                                    </li>\r\n                                    <li class=\"d-flex justify-content-between align-items-center\">\r\n                                        <span>Difficulty Level</span>\r\n                                        <span><strong>{{trek.level | titlecase}}</strong></span>\r\n                                    </li>\r\n                                    <li class=\"d-flex justify-content-between align-items-center\">\r\n                                        <span>Price per person</span>\r\n                                        <a href=\"#\"\r\n                                            class=\"price-btn\">{{trek.price | currency:'INR':'symbol':'1.2-2'}}</a>\r\n                                    </li>\r\n                                </ul>\r\n                                <!-- <a class=\"price-btn text-uppercase\" (click)='onBookNow()'>Book Now</a> -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End destinations Area -->\r\n\r\n<!-- Start home-about Area -->\r\n<section class=\"home-about-area\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row align-items-center justify-content-end\">\r\n            <div class=\"col-lg-6 col-md-12 home-about-left\">\r\n                <h1>\r\n                    Did not find your Package? <br>\r\n                    Feel free to ask us. <br>\r\n                    We‘ll make it for you\r\n                </h1>\r\n                <p>\r\n                    inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct\r\n                    standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the\r\n                    job is beyond reproach. inappropriate behavior is often laughed.\r\n                </p>\r\n                <a [routerLink]='[\"/contact-us\"]' class=\"primary-btn text-uppercase\">request custom price</a>\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-12 home-about-right no-padding\">\r\n                <img class=\"img-fluid\" src=\"../../assets/img/traveler-5.jpg\" alt=\"\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End home-about Area -->"

/***/ }),

/***/ "./src/app/treks/trek-list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/treks/trek-list.component.ts ***!
  \**********************************************/
/*! exports provided: TrekListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrekListComponent", function() { return TrekListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trek_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trek.service */ "./src/app/treks/trek.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_level__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/level */ "./src/app/shared/level.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrekListComponent = /** @class */ (function () {
    function TrekListComponent(route, router, trekService) {
        this.route = route;
        this.router = router;
        this.trekService = trekService;
        this.pageTitle = 'Events';
        this.previewWidth = 255;
        this.previewMargin = 2;
        this.showImage = true;
        this.levels = this.buildLevelsArray();
        this.maxPrice = 0;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    TrekListComponent.prototype.buildLevelsArray = function () {
        return Object.keys(_shared_level__WEBPACK_IMPORTED_MODULE_3__["Level"]).filter(function (k) { return typeof _shared_level__WEBPACK_IMPORTED_MODULE_3__["Level"][k] === "number"; });
    };
    TrekListComponent.prototype.ngOnInit = function () {
        var activity = this.route.snapshot.paramMap.get('activity');
        this.selectedActivity = activity;
        if (activity != null) {
            this.getFilteredTreks([activity]);
        }
        else {
            this.getTreks();
        }
        this.getActivities();
        window.scrollTo(0, 0);
    };
    TrekListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Event : ' + message;
    };
    TrekListComponent.prototype.onBookNow = function () {
    };
    TrekListComponent.prototype.toggleSelectedClass = function (element) {
        if (!element.classList.contains('selected')) {
            element.classList.add("selected");
        }
        else {
            element.classList.remove("selected");
        }
    };
    TrekListComponent.prototype.applyFilter = function (i, criteria) {
        // apply filter class to activity li
        var element = document.getElementsByClassName('filter-' + criteria)[i];
        this.toggleSelectedClass(element);
        this.performFilter();
    };
    TrekListComponent.prototype.performFilter = function (event) {
        // get all selected activities li
        var activityOptions = document.getElementsByClassName('filter-activities selected');
        var selectedActivities = [];
        // Create array of selected activities
        Array.from(activityOptions).forEach(function (element) {
            selectedActivities.push(element.textContent.toLowerCase());
        });
        // get all selected levels li
        var levelOptions = document.getElementsByClassName('filter-levels selected');
        var selectedLevels = [];
        // Create array of selected levels
        Array.from(levelOptions).forEach(function (element) {
            selectedLevels.push(element.textContent.toLowerCase());
        });
        // Price
        //  //var slider = document.getElementById("priceRange");
        if (event != null) {
            this.maxPrice = event.target.value;
        }
        // Perform filter by activity and level
        this.getFilteredTreks(selectedActivities, selectedLevels, this.maxPrice);
    };
    // performFilter(filterBy: string): ITrek[] {
    //     filterBy = filterBy.toLocaleLowerCase();
    //     return this.treks.filter((treks: ITrek) => treks.level.toLocaleLowerCase().indexOf(filterBy) != -1);
    // }
    TrekListComponent.prototype.getTreks = function () {
        var _this = this;
        this.trekService.getTreks().subscribe({
            next: function (treks) {
                _this.treks = treks,
                    _this.filteredTreks = _this.treks;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    TrekListComponent.prototype.getFilteredTreks = function (activities, levels, maxPrice) {
        var _this = this;
        this.trekService.getFilteredTreks(activities, levels, maxPrice).subscribe({
            next: function (treks) {
                _this.treks = treks,
                    _this.filteredTreks = _this.treks;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    TrekListComponent.prototype.getActivities = function () {
        var _this = this;
        this.trekService.getActivities().subscribe({
            next: function (activities) { _this.activities = activities; },
            error: function (err) { _this.errorMessage = err; }
        });
    };
    TrekListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./trek-list.component.html */ "./src/app/treks/trek-list.component.html"),
            styles: [__webpack_require__(/*! ./trek-list.component.css */ "./src/app/treks/trek-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _trek_service__WEBPACK_IMPORTED_MODULE_1__["TrekService"]])
    ], TrekListComponent);
    return TrekListComponent;
}());



/***/ }),

/***/ "./src/app/treks/trek.module.ts":
/*!**************************************!*\
  !*** ./src/app/treks/trek.module.ts ***!
  \**************************************/
/*! exports provided: TrekModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrekModule", function() { return TrekModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _treks_trek_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../treks/trek-list.component */ "./src/app/treks/trek-list.component.ts");
/* harmony import */ var _treks_trek_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../treks/trek-detail.component */ "./src/app/treks/trek-detail.component.ts");
/* harmony import */ var _shared_guards_identifier_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/guards/identifier.guard */ "./src/app/shared/guards/identifier.guard.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _treks_packages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../treks/packages.component */ "./src/app/treks/packages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TrekModule = /** @class */ (function () {
    function TrekModule() {
    }
    TrekModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'treks', component: _treks_trek_list_component__WEBPACK_IMPORTED_MODULE_2__["TrekListComponent"] },
                    { path: 'trek/:id', canActivate: [_shared_guards_identifier_guard__WEBPACK_IMPORTED_MODULE_4__["IdentifierGuard"]], component: _treks_trek_detail_component__WEBPACK_IMPORTED_MODULE_3__["TrekDetailComponent"] },
                    { path: 'treks/:activity', component: _treks_trek_list_component__WEBPACK_IMPORTED_MODULE_2__["TrekListComponent"] },
                    { path: 'packages', component: _treks_packages_component__WEBPACK_IMPORTED_MODULE_6__["PackagesComponent"] }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _treks_trek_list_component__WEBPACK_IMPORTED_MODULE_2__["TrekListComponent"],
                _treks_trek_detail_component__WEBPACK_IMPORTED_MODULE_3__["TrekDetailComponent"],
                _treks_packages_component__WEBPACK_IMPORTED_MODULE_6__["PackagesComponent"]
            ]
        })
    ], TrekModule);
    return TrekModule;
}());



/***/ }),

/***/ "./src/app/treks/trek.service.ts":
/*!***************************************!*\
  !*** ./src/app/treks/trek.service.ts ***!
  \***************************************/
/*! exports provided: TrekService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrekService", function() { return TrekService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrekService = /** @class */ (function () {
    function TrekService(httpClient) {
        this.httpClient = httpClient;
        this.eventsUrl = 'assets/data/events.json';
        this.schedulesUrl = 'assets/data/schedules.json';
        this.activitiesUrl = 'assets/data/activities.json';
        this.reviewsUrl = 'assets/data/reviews.json';
    }
    // private eventsUrl = 'http://localhost:4000/treks';
    // private schedulesUrl = 'http://localhost:4000/schedules';
    // private activitiesUrl = 'http://localhost:4000/activities';
    TrekService.prototype.getTreks = function () {
        return this.httpClient.get(this.eventsUrl).pipe(
        //tap(data => console.log('Treks:' + JSON.stringify(data))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TrekService.prototype.getTrekDetails = function (id) {
        return this.getTreks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (treks) { return treks.find(function (t) { return t.id === id; }); }), 
        // tap(data => console.log('Trek:' + JSON.stringify(data))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TrekService.prototype.getUpcomingTreks = function () {
        return this.httpClient.get(this.eventsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (treks) { return treks.filter(function (t) { return new Date(t.eventDate) > new Date(); }); }), 
        // tap(data => console.log('Upcoming Treks:' + JSON.stringify(data))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TrekService.prototype.getFilteredTreks = function (activities, levels, maxPrice) {
        //   console.log('level : ' + levels.toString());
        //   console.log('activities : ' + activities.toString());
        //console.log('price :' + maxPrice);
        return this.httpClient.get(this.eventsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (treks) { return treks.filter(function (t) { return ((activities && activities.length > 0
            ? t.activities && t.activities.some(function (o) { return activities && activities.includes(o); }) : true)
            && (levels && levels.length > 0 ? levels.toString().includes(t.level) : true)
            && (maxPrice && maxPrice > 0 ? t.price <= maxPrice : true)); }); }), 
        // tap(data => console.log('Filtered Treks:' + JSON.stringify(data))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TrekService.prototype.getRelatedTreks = function (id, activities) {
        return this.httpClient.get(this.eventsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (treks) { return treks.filter(function (t) { return (t.id != id)
            && t.activities && t.activities.some(function (o) { return activities && activities.includes(o); }); }); }), 
        // tap(data => console.log('Related Treks:' + JSON.stringify(data))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TrekService.prototype.getScheduleDetails = function (id) {
        return this.httpClient.get(this.schedulesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (schedules) { return schedules.find(function (t) { return t.id === id; }); }), 
        // tap(data => console.log('Schedules:' + JSON.stringify(data))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TrekService.prototype.getActivities = function () {
        return this.httpClient.get(this.activitiesUrl).pipe(
        // tap(data => console.log('Treks:' + JSON.stringify(data))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TrekService.prototype.getReviews = function (id) {
        return this.httpClient.get(this.reviewsUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (reviews) { return reviews.filter(function (t) { return t.eventId === id; }); }), 
        // tap(data => console.log('reviews:' + JSON.stringify(data))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    TrekService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = "Client side or Network Error Occured " + err.error.message;
        }
        else {
            errorMessage = "Server returned code " + err.status + ", error message " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    TrekService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TrekService);
    return TrekService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\Angular\TrekEasy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map