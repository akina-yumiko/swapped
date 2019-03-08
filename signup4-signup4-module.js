(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup4-signup4-module"],{

/***/ "./src/app/register/signup4/signup4.module.ts":
/*!****************************************************!*\
  !*** ./src/app/register/signup4/signup4.module.ts ***!
  \****************************************************/
/*! exports provided: Signup4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup4PageModule", function() { return Signup4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _signup4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup4.page */ "./src/app/register/signup4/signup4.page.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var routes = [
    {
        path: '',
        component: _signup4_page__WEBPACK_IMPORTED_MODULE_6__["Signup4Page"]
    }
];
var Signup4PageModule = /** @class */ (function () {
    function Signup4PageModule() {
    }
    Signup4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup4_page__WEBPACK_IMPORTED_MODULE_6__["Signup4Page"]]
        })
    ], Signup4PageModule);
    return Signup4PageModule;
}());



/***/ }),

/***/ "./src/app/register/signup4/signup4.page.html":
/*!****************************************************!*\
  !*** ./src/app/register/signup4/signup4.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content style=\"padding: 0px\">\n\n    <ion-grid style=\"height: 100%; background-color: blueviolet;\">\n        <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column; background-color: blueviolet;\">\n            <ion-item  style=\"background-color: blueviolet;\" class=\"max-width\">\n                <ion-input  style=\"background-color: blueviolet;\" placeholder=\"Name\"></ion-input>\n              </ion-item>\n        </ion-row>\n      </ion-grid>\n    <!--ion-grid style=\"height: 100%;\">\n  \n      <ion-row style=\"height: 10%;\">\n        <ion-grid style=\"height: 100%\">\n          <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n            <p>Step <b>3</b> of <b>4</b></p>\n          </ion-row>\n        </ion-grid>\n      </ion-row>\n  \n      <ion-row style=\"height: 10%;\">\n        <ion-grid style=\"height: 100%\">\n          <ion-row justify-content-center align-items-center style=\"height: 100%; flex-direction: column\">\n\n            <ion-text color=\"dark\" style=\"text-align:center;\">\n                <h5><b>What are your most-worn per category?</b></h5>\n            </ion-text>\n\n          </ion-row>\n        </ion-grid>\n      </ion-row>\n  \n      <ion-row style=\"height: 60%; padding: 10px;\">\n        <ion-col class=\"max-size\">  \n          <ion-row>\n            <ion-select multiple=\"true\" cancelText=\"Nah\" okText=\"Okay!\" placeholder=\"Dresses\" class=\"max-width\">\n              <ion-select-option value=\"aline\">A-Line</ion-select-option>\n              <ion-select-option value=\"shift\">Shift</ion-select-option>\n              <ion-select-option value=\"formal\">Formal</ion-select-option>\n              <ion-select-option value=\"bodycon\">Bodycon</ion-select-option>\n              <ion-select-option value=\"swing\">Swing</ion-select-option>\n              <ion-select-option value=\"wedding\">Wedding</ion-select-option>\n              <ion-select-option value=\"pencil\">Pencil</ion-select-option>\n              <ion-select-option value=\"shirt\">Shirt</ion-select-option>\n              <ion-select-option value=\"tunic\">Tunic</ion-select-option>\n              <ion-select-option value=\"asymmetric\">Asymmetric</ion-select-option>\n              <ion-select-option value=\"cami_slip\">Cami/Slip</ion-select-option>\n              <ion-select-option value=\"babydoll_smock\">Babydoll/Smock</ion-select-option>\n              <ion-select-option value=\"wrap\">Wrap</ion-select-option>\n              <ion-select-option value=\"tshirt\">T-Shirt</ion-select-option>\n              <ion-select-option value=\"peplum\">Peplum</ion-select-option>\n            </ion-select>\n          </ion-row>\n\n          <ion-row>\n            <ion-select placeholder=\"Tops\" class=\"max-width\">\n              <ion-select-option value=\"blouse\">Blouse</ion-select-option>\n              <ion-select-option value=\"shirt\">Shirt</ion-select-option>\n              <ion-select-option value=\"tshirt\">T-Shirt</ion-select-option>\n              <ion-select-option value=\"tank\">Tank</ion-select-option>\n              <ion-select-option value=\"camisole\">Camisole</ion-select-option>\n              <ion-select-option value=\"sando\">Sando</ion-select-option>\n              <ion-select-option value=\"turtle_neck\">Turtle Neck</ion-select-option>\n              <ion-select-option value=\"sleeveless\">Sleeveless</ion-select-option>\n              <ion-select-option value=\"poloshirt\">Polo Shirt</ion-select-option>\n\n            </ion-select>\n          </ion-row>\n\n          <ion-row>\n            <ion-select placeholder=\"Sweaters\" class=\"max-width\">\n              <ion-select-option value=\"xxs\">XXS</ion-select-option>\n              <ion-select-option value=\"xs\">XS</ion-select-option>\n              <ion-select-option value=\"s\">S</ion-select-option>\n              <ion-select-option value=\"m\">M</ion-select-option>\n              <ion-select-option value=\"l\">L</ion-select-option>\n              <ion-select-option value=\"xl\">XL</ion-select-option>\n              <ion-select-option value=\"xxl\">XXL</ion-select-option>\n            </ion-select>\n          </ion-row>\n\n          <ion-row>\n            <ion-select placeholder=\"Jackets\" class=\"max-width\">\n              <ion-select-option value=\"xxs\">XXS</ion-select-option>\n              <ion-select-option value=\"xs\">XS</ion-select-option>\n              <ion-select-option value=\"s\">S</ion-select-option>\n              <ion-select-option value=\"m\">M</ion-select-option>\n              <ion-select-option value=\"l\">L</ion-select-option>\n              <ion-select-option value=\"xl\">XL</ion-select-option>\n              <ion-select-option value=\"xxl\">XXL</ion-select-option>\n            </ion-select>\n          </ion-row>\n\n          <ion-row>\n            <ion-select placeholder=\"Pants\" class=\"max-width\">\n              <ion-select-option value=\"xxs\">XXS</ion-select-option>\n              <ion-select-option value=\"xs\">XS</ion-select-option>\n              <ion-select-option value=\"s\">S</ion-select-option>\n              <ion-select-option value=\"m\">M</ion-select-option>\n              <ion-select-option value=\"l\">L</ion-select-option>\n              <ion-select-option value=\"xl\">XL</ion-select-option>\n              <ion-select-option value=\"xxl\">XXL</ion-select-option>\n            </ion-select>\n          </ion-row>\n\n          <ion-row>\n            <ion-select placeholder=\"Skirts\" class=\"max-width\">\n              <ion-select-option value=\"xxs\">XXS</ion-select-option>\n              <ion-select-option value=\"xs\">XS</ion-select-option>\n              <ion-select-option value=\"s\">S</ion-select-option>\n              <ion-select-option value=\"m\">M</ion-select-option>\n              <ion-select-option value=\"l\">L</ion-select-option>\n              <ion-select-option value=\"xl\">XL</ion-select-option>\n              <ion-select-option value=\"xxl\">XXL</ion-select-option>\n            </ion-select>\n          </ion-row>\n\n          <ion-row>\n            <ion-select placeholder=\"Shorts\" class=\"max-width\">\n              <ion-select-option value=\"xxs\">XXS</ion-select-option>\n              <ion-select-option value=\"xs\">XS</ion-select-option>\n              <ion-select-option value=\"s\">S</ion-select-option>\n              <ion-select-option value=\"m\">M</ion-select-option>\n              <ion-select-option value=\"l\">L</ion-select-option>\n              <ion-select-option value=\"xl\">XL</ion-select-option>\n              <ion-select-option value=\"xxl\">XXL</ion-select-option>\n            </ion-select>\n          </ion-row>\n\n          <ion-row>\n            <ion-select placeholder=\"Jeans\" class=\"max-width\">\n              <ion-select-option value=\"xxs\">XXS</ion-select-option>\n              <ion-select-option value=\"xs\">XS</ion-select-option>\n              <ion-select-option value=\"s\">S</ion-select-option>\n              <ion-select-option value=\"m\">M</ion-select-option>\n              <ion-select-option value=\"l\">L</ion-select-option>\n              <ion-select-option value=\"xl\">XL</ion-select-option>\n              <ion-select-option value=\"xxl\">XXL</ion-select-option>\n            </ion-select>\n          </ion-row>\n  \n        </ion-col>\n      </ion-row>\n  \n      <ion-row style=\"height: 10%;\">\n        <ion-col>\n          <button mat-stroked-button color=\"primary\" class=\"max-size\" routerLink=\"/register/step2\">Next</button>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row style=\"height: 10%;\"></ion-row>\n  \n    </ion-grid-->\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/register/signup4/signup4.page.scss":
/*!****************************************************!*\
  !*** ./src/app/register/signup4/signup4.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".max-size {\n  width: 100%;\n  height: 100%; }\n\n.max-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvc2lnbnVwNC9DOlxcVXNlcnNcXEVsbGVcXERlc2t0b3BcXHN3YXBzXFxzd2FwLWFwcC9zcmNcXGFwcFxccmVnaXN0ZXJcXHNpZ251cDRcXHNpZ251cDQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9zaWdudXA0L3NpZ251cDQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heC1zaXplIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubWF4LXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/register/signup4/signup4.page.ts":
/*!**************************************************!*\
  !*** ./src/app/register/signup4/signup4.page.ts ***!
  \**************************************************/
/*! exports provided: Signup4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup4Page", function() { return Signup4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Signup4Page = /** @class */ (function () {
    function Signup4Page() {
    }
    Signup4Page.prototype.ngOnInit = function () {
    };
    Signup4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup4',
            template: __webpack_require__(/*! ./signup4.page.html */ "./src/app/register/signup4/signup4.page.html"),
            styles: [__webpack_require__(/*! ./signup4.page.scss */ "./src/app/register/signup4/signup4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Signup4Page);
    return Signup4Page;
}());



/***/ })

}]);
//# sourceMappingURL=signup4-signup4-module.js.map