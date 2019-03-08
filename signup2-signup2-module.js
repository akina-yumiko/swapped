(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup2-signup2-module"],{

/***/ "./src/app/register/signup2/signup2.module.ts":
/*!****************************************************!*\
  !*** ./src/app/register/signup2/signup2.module.ts ***!
  \****************************************************/
/*! exports provided: Signup2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup2PageModule", function() { return Signup2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _signup2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup2.page */ "./src/app/register/signup2/signup2.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _signup2_page__WEBPACK_IMPORTED_MODULE_6__["Signup2Page"]
    }
];
var Signup2PageModule = /** @class */ (function () {
    function Signup2PageModule() {
    }
    Signup2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup2_page__WEBPACK_IMPORTED_MODULE_6__["Signup2Page"]]
        })
    ], Signup2PageModule);
    return Signup2PageModule;
}());



/***/ }),

/***/ "./src/app/register/signup2/signup2.page.html":
/*!****************************************************!*\
  !*** ./src/app/register/signup2/signup2.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-grid style=\"height: 100%;\">\n\n    <ion-row style=\"height: 10%;\">\n      <ion-grid style=\"height: 100%\">\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n          <p>Step <b>1</b> of <b>4</b></p>\n        </ion-row>\n      </ion-grid>\n    </ion-row>\n\n    <ion-row style=\"height: 10%;\">\n      <ion-grid style=\"height: 100%\">\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n          <h1><b>Account Info</b></h1>\n        </ion-row>\n      </ion-grid>\n    </ion-row>\n\n    <ion-row style=\"height: 60%; padding: 10px;\">\n      <ion-col class=\"max-size\">\n\n        <ion-row>\n          <ion-item class=\"max-width\">\n            <ion-input placeholder=\"Name\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"max-width\">\n            <ion-input placeholder=\"E-Mail\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"max-width\">\n            <ion-input type=\"password\" placeholder=\"Password\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-item class=\"max-width\">\n            <ion-input type=\"password\" placeholder=\"Confirm Password\"></ion-input>\n          </ion-item>\n        </ion-row>\n\n        <br>\n\n        <ion-row>\n          <ion-select placeholder=\"Location\" class=\"max-width\">\n            <ion-select-option value=\"caloocan\">Caloocan</ion-select-option>\n            <ion-select-option value=\"las_pinas\">Las Piñas</ion-select-option>\n            <ion-select-option value=\"makati\">Makati</ion-select-option>\n            <ion-select-option value=\"malabon\">Malabon</ion-select-option>\n            <ion-select-option value=\"mandaluyong\">Mandaluyong</ion-select-option>\n            <ion-select-option value=\"manila\">Manila</ion-select-option>\n            <ion-select-option value=\"marikina\">Marikina</ion-select-option>\n            <ion-select-option value=\"muntinlupa\">Muntinlupa</ion-select-option>\n            <ion-select-option value=\"navotas\">Navotas</ion-select-option>\n            <ion-select-option value=\"paranaque\">Parañaque</ion-select-option>\n            <ion-select-option value=\"pasay\">Pasay</ion-select-option>\n            <ion-select-option value=\"pasig\">Pasig</ion-select-option>\n            <ion-select-option value=\"pateros\">Pateros</ion-select-option>\n            <ion-select-option value=\"quezon\">Quezon City</ion-select-option>\n            <ion-select-option value=\"san_juan\">San Juan</ion-select-option>\n            <ion-select-option value=\"taguig\">Taguig</ion-select-option>\n            <ion-select-option value=\"valenzuela\">Valenzuela</ion-select-option>\n          </ion-select>\n        </ion-row>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height: 10%;\">\n      <ion-col>\n        <button mat-stroked-button color=\"primary\" class=\"max-size\" routerLink=\"/register/step2\">Next</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height: 10%;\"></ion-row>\n\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/signup2/signup2.page.scss":
/*!****************************************************!*\
  !*** ./src/app/register/signup2/signup2.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max-size {\n  width: 100%;\n  height: 100%; }\n\n.max-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvc2lnbnVwMi9DOlxcVXNlcnNcXEVsbGVcXERlc2t0b3BcXHN3YXBzXFxzd2FwLWFwcC9zcmNcXGFwcFxccmVnaXN0ZXJcXHNpZ251cDJcXHNpZ251cDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9zaWdudXAyL3NpZ251cDIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heC1zaXplIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWF4LXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/register/signup2/signup2.page.ts":
/*!**************************************************!*\
  !*** ./src/app/register/signup2/signup2.page.ts ***!
  \**************************************************/
/*! exports provided: Signup2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup2Page", function() { return Signup2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Signup2Page = /** @class */ (function () {
    function Signup2Page() {
    }
    Signup2Page.prototype.ngOnInit = function () {
    };
    Signup2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup2',
            template: __webpack_require__(/*! ./signup2.page.html */ "./src/app/register/signup2/signup2.page.html"),
            styles: [__webpack_require__(/*! ./signup2.page.scss */ "./src/app/register/signup2/signup2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Signup2Page);
    return Signup2Page;
}());



/***/ })

}]);
//# sourceMappingURL=signup2-signup2-module.js.map