(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup3-signup3-module"],{

/***/ "./src/app/register/signup3/signup3.module.ts":
/*!****************************************************!*\
  !*** ./src/app/register/signup3/signup3.module.ts ***!
  \****************************************************/
/*! exports provided: Signup3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup3PageModule", function() { return Signup3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _signup3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup3.page */ "./src/app/register/signup3/signup3.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _signup3_page__WEBPACK_IMPORTED_MODULE_6__["Signup3Page"]
    }
];
var Signup3PageModule = /** @class */ (function () {
    function Signup3PageModule() {
    }
    Signup3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup3_page__WEBPACK_IMPORTED_MODULE_6__["Signup3Page"]]
        })
    ], Signup3PageModule);
    return Signup3PageModule;
}());



/***/ }),

/***/ "./src/app/register/signup3/signup3.page.html":
/*!****************************************************!*\
  !*** ./src/app/register/signup3/signup3.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-grid style=\"height: 100%;\">\n  \n      <ion-row style=\"height: 10%;\">\n        <ion-grid style=\"height: 100%\">\n          <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n            <p>Step <b>2</b> of <b>4</b></p>\n          </ion-row>\n        </ion-grid>\n      </ion-row>\n  \n      <ion-row style=\"height: 10%;\">\n        <ion-grid style=\"height: 100%\">\n          <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n            <h1><b>Size</b></h1>\n          </ion-row>\n        </ion-grid>\n      </ion-row>\n  \n      <ion-row style=\"height: 60%; padding: 10px;\">\n        <ion-col class=\"max-size\">  \n          <ion-row>\n            <ion-select placeholder=\"Size (Tops)\" class=\"max-width\">\n              <ion-select-option value=\"xxs\">XXS</ion-select-option>\n              <ion-select-option value=\"xs\">XS</ion-select-option>\n              <ion-select-option value=\"s\">S</ion-select-option>\n              <ion-select-option value=\"m\">M</ion-select-option>\n              <ion-select-option value=\"l\">L</ion-select-option>\n              <ion-select-option value=\"xl\">XL</ion-select-option>\n              <ion-select-option value=\"xxl\">XXL</ion-select-option>\n            </ion-select>\n          </ion-row>\n\n          <br>\n\n          <ion-row>\n            <ion-item class=\"max-width\">\n              <ion-input placeholder=\"Name\"></ion-input>\n            </ion-item>\n          </ion-row>\n  \n        </ion-col>\n      </ion-row>\n  \n      <ion-row style=\"height: 10%;\">\n        <ion-col>\n          <button mat-stroked-button color=\"primary\" class=\"max-size\" routerLink=\"/register/step2\">Next</button>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row style=\"height: 10%;\"></ion-row>\n  \n    </ion-grid>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/register/signup3/signup3.page.scss":
/*!****************************************************!*\
  !*** ./src/app/register/signup3/signup3.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max-size {\n  width: 100%;\n  height: 100%; }\n\n.max-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvc2lnbnVwMy9DOlxcVXNlcnNcXEVsbGVcXERlc2t0b3BcXHN3YXBzXFxzd2FwLWFwcC9zcmNcXGFwcFxccmVnaXN0ZXJcXHNpZ251cDNcXHNpZ251cDMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9zaWdudXAzL3NpZ251cDMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heC1zaXplIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWF4LXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/register/signup3/signup3.page.ts":
/*!**************************************************!*\
  !*** ./src/app/register/signup3/signup3.page.ts ***!
  \**************************************************/
/*! exports provided: Signup3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup3Page", function() { return Signup3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Signup3Page = /** @class */ (function () {
    function Signup3Page() {
    }
    Signup3Page.prototype.ngOnInit = function () {
    };
    Signup3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup3',
            template: __webpack_require__(/*! ./signup3.page.html */ "./src/app/register/signup3/signup3.page.html"),
            styles: [__webpack_require__(/*! ./signup3.page.scss */ "./src/app/register/signup3/signup3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Signup3Page);
    return Signup3Page;
}());



/***/ })

}]);
//# sourceMappingURL=signup3-signup3-module.js.map