(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup1-signup1-module"],{

/***/ "./src/app/register/signup1/signup1.module.ts":
/*!****************************************************!*\
  !*** ./src/app/register/signup1/signup1.module.ts ***!
  \****************************************************/
/*! exports provided: Signup1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup1PageModule", function() { return Signup1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _signup1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup1.page */ "./src/app/register/signup1/signup1.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _signup1_page__WEBPACK_IMPORTED_MODULE_6__["Signup1Page"]
    }
];
var Signup1PageModule = /** @class */ (function () {
    function Signup1PageModule() {
    }
    Signup1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup1_page__WEBPACK_IMPORTED_MODULE_6__["Signup1Page"]]
        })
    ], Signup1PageModule);
    return Signup1PageModule;
}());



/***/ }),

/***/ "./src/app/register/signup1/signup1.page.html":
/*!****************************************************!*\
  !*** ./src/app/register/signup1/signup1.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-grid style=\"height: 100%;\">\n      <ion-row style=\"height: 65%;\">\n        <ion-col>\n          <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"max-size\">\n            <ion-slide>\n              <h1>Slide 1</h1>\n            </ion-slide>\n            <ion-slide>\n              <h1>Slide 2</h1>\n            </ion-slide>\n            <ion-slide>\n              <h1>Slide 3</h1>\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"height: 25%;\" padding=\"15px;\">\n        <ion-grid style=\"height: 100%\">\n          <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n            <p>You are about to enter a matching system that takes sign-ups seriously.</p>\n          </ion-row>\n        </ion-grid>\n      </ion-row>\n      <ion-row style=\"height: 10%;\">\n        <ion-col>\n          <button mat-flat-button color=\"primary\" class=\"max-size\" routerLink=\"/register/step1\"><b>Proceed</b></button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/signup1/signup1.page.scss":
/*!****************************************************!*\
  !*** ./src/app/register/signup1/signup1.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  padding: 0px !important;\n  margin: 0px !important; }\n\n.max-size {\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvc2lnbnVwMS9DOlxcVXNlcnNcXEVsbGVcXERlc2t0b3BcXHN3YXBzXFxzd2FwLWFwcC9zcmNcXGFwcFxccmVnaXN0ZXJcXHNpZ251cDFcXHNpZ251cDEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9zaWdudXAxL3NpZ251cDEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF4LXNpemUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/signup1/signup1.page.ts":
/*!**************************************************!*\
  !*** ./src/app/register/signup1/signup1.page.ts ***!
  \**************************************************/
/*! exports provided: Signup1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup1Page", function() { return Signup1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");



var Signup1Page = /** @class */ (function () {
    function Signup1Page() {
        this.slideOpts = {
            effect: 'flip'
        };
    }
    Signup1Page.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    Signup1Page.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Slides"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Slides"])
    ], Signup1Page.prototype, "slides", void 0);
    Signup1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup1',
            template: __webpack_require__(/*! ./signup1.page.html */ "./src/app/register/signup1/signup1.page.html"),
            styles: [__webpack_require__(/*! ./signup1.page.scss */ "./src/app/register/signup1/signup1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Signup1Page);
    return Signup1Page;
}());



/***/ })

}]);
//# sourceMappingURL=signup1-signup1-module.js.map