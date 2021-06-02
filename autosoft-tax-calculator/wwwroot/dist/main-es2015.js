(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '**', redirectTo: '/home' }
];
class AppRoutingModule {
}
AppRoutingModule.components = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]];
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <router-outlet></router-outlet>
  `
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _tax_page_tax_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tax-page/tax-page.component */ "./src/app/tax-page/tax-page.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/logo/logo.component.ts");
/* harmony import */ var _tax_input_tax_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tax-input/tax-input.component */ "./src/app/tax-input/tax-input.component.ts");
/* harmony import */ var _tax_results_tax_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tax-results/tax-results.component */ "./src/app/tax-results/tax-results.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _tax_page_tax_page_component__WEBPACK_IMPORTED_MODULE_5__["TaxPageComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"], _tax_input_tax_input_component__WEBPACK_IMPORTED_MODULE_7__["TaxInputComponent"], _tax_results_tax_results_component__WEBPACK_IMPORTED_MODULE_8__["TaxResultsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"].components, _tax_page_tax_page_component__WEBPACK_IMPORTED_MODULE_5__["TaxPageComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"], _tax_input_tax_input_component__WEBPACK_IMPORTED_MODULE_7__["TaxInputComponent"], _tax_results_tax_results_component__WEBPACK_IMPORTED_MODULE_8__["TaxResultsComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ensureModuleLoadedOnceGuard */ "./src/app/core/ensureModuleLoadedOnceGuard.ts");





class CoreModule extends _ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_3__["EnsureModuleLoadedOnceGuard"] {
    //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    constructor(parentModule) {
        super(parentModule);
    }
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12)); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/ensureModuleLoadedOnceGuard.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/ensureModuleLoadedOnceGuard.ts ***!
  \*****************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
class EnsureModuleLoadedOnceGuard {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}


/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DataService {
    constructor(http) {
        this.http = http;
        this.url = '/api/messages';
    }
    getMessage() {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => res['data']), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error('Server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMessage);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'Server error');
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/tax-calculator.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/tax-calculator.service.ts ***!
  \*********************************************************/
/*! exports provided: TaxCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxCalculatorService", function() { return TaxCalculatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class TaxCalculatorService {
    constructor(http) {
        this.http = http;
    }
    calculateTax(income, state, isMonthly) {
        const incomeAsNumber = +income;
        const adjustedIncome = isMonthly ? incomeAsNumber * 12 : incomeAsNumber;
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].server}taxcalculator/income/${adjustedIncome}/state/${state}/`);
    }
}
TaxCalculatorService.ɵfac = function TaxCalculatorService_Factory(t) { return new (t || TaxCalculatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TaxCalculatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaxCalculatorService, factory: TaxCalculatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxCalculatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo/logo.component */ "./src/app/logo/logo.component.ts");
/* harmony import */ var _tax_page_tax_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tax-page/tax-page.component */ "./src/app/tax-page/tax-page.component.ts");





class HomeComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.message = "bah";
        this.dataService.getMessage().subscribe((message) => {
            this.message = message + " shamalama ding dong!";
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tax-page");
    } }, directives: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"], _tax_page_tax_page_component__WEBPACK_IMPORTED_MODULE_3__["TaxPageComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html'
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/logo/logo.component.ts":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 2, vars: 0, consts: [[1, "logo"], ["src", "images/cheesylogo.png"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    margin-bottom: 48px;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n    width: 100%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nby9sb2dvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xvZ28vbG9nby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG59XHJcblxyXG4ubG9nbyA+IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/tax-input/tax-input.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tax-input/tax-input.component.ts ***!
  \**************************************************/
/*! exports provided: TaxInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxInputComponent", function() { return TaxInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class TaxInputComponent {
    constructor() {
        this.taxInformation = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isMonthly = false;
        this.zipcode = '';
        this.income = '';
    }
    ngOnInit() { }
    emitInputInfo() {
        const shouldActivate = this.isAllInputValid();
        const income = this.income;
        const zipcode = this.zipcode;
        const isMonthly = this.isMonthly;
        this.taxInformation.emit({ shouldActivate, income, zipcode, isMonthly });
    }
    monthlyToggled(isMonthly) {
        this.isMonthly = isMonthly;
        this.emitInputInfo();
    }
    zipcodeChanged(zip) {
        this.zipcode = zip;
        this.emitInputInfo();
    }
    incomeChanged(i) {
        this.income = i;
        this.emitInputInfo();
    }
    isOnlyNumeric(s) {
        return /^\d+$/.test(s);
    }
    isIncomeValid(i) {
        return this.isOnlyNumeric(i);
    }
    isZipcodeValid(zip) {
        return zip.length === 5 && this.isOnlyNumeric(zip);
    }
    isAllInputValid() {
        return this.isZipcodeValid(this.zipcode) && this.isIncomeValid(this.income);
    }
}
TaxInputComponent.ɵfac = function TaxInputComponent_Factory(t) { return new (t || TaxInputComponent)(); };
TaxInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaxInputComponent, selectors: [["app-tax-input"]], outputs: { taxInformation: "taxInformation" }, decls: 12, vars: 0, consts: [[1, "label"], [1, "input-container"], ["type", "text", "placeholder", "Zipcode", "maxlength", "5", 1, "text-input", 3, "input"], ["type", "text", "placeholder", "Income", "maxlength", "15", 1, "text-input", 3, "input"], [1, "checkbox-container"], ["type", "checkbox", 1, "checkbox-input", 3, "change"]], template: function TaxInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Zip code\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TaxInputComponent_Template_input_input_3_listener($event) { return ctx.zipcodeChanged($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Income\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TaxInputComponent_Template_input_input_7_listener($event) { return ctx.incomeChanged($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaxInputComponent_Template_input_change_9_listener($event) { return ctx.monthlyToggled($event.target.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Monthly income specified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".text-input[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    padding: 4px 8px;\r\n    margin: 4px;\r\n}\r\n\r\n.checkbox-input[_ngcontent-%COMP%] {\r\n    margin: 0px 12px;\r\n}\r\n\r\n.checkbox-container[_ngcontent-%COMP%] {\r\n    margin: 12px 0px;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    margin-top: 12px;\r\n    color: #9B9B9B;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGF4LWlucHV0L3RheC1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3RheC1pbnB1dC90YXgtaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBtYXJnaW46IDRweDtcclxufVxyXG5cclxuLmNoZWNrYm94LWlucHV0IHtcclxuICAgIG1hcmdpbjogMHB4IDEycHg7XHJcbn1cclxuXHJcbi5jaGVja2JveC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxMnB4IDBweDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBjb2xvcjogIzlCOUI5QjtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tax-input',
                templateUrl: './tax-input.component.html',
                styleUrls: ['./tax-input.component.css']
            }]
    }], function () { return []; }, { taxInformation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/tax-page/tax-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/tax-page/tax-page.component.ts ***!
  \************************************************/
/*! exports provided: TaxPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxPageComponent", function() { return TaxPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _zipcode_utility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../zipcode-utility */ "./src/app/zipcode-utility.ts");
/* harmony import */ var _core_services_tax_calculator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/tax-calculator.service */ "./src/app/core/services/tax-calculator.service.ts");
/* harmony import */ var _tax_input_tax_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tax-input/tax-input.component */ "./src/app/tax-input/tax-input.component.ts");
/* harmony import */ var _tax_results_tax_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tax-results/tax-results.component */ "./src/app/tax-results/tax-results.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["taxresults"];
class TaxPageComponent {
    constructor(taxCalculatorService) {
        this.taxCalculatorService = taxCalculatorService;
        this.displayResult = false;
        this.toggleCalculateButton$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.income = '';
        this.state = '';
        this.isMonthly = false;
    }
    ngOnInit() { }
    // Copy/pasted from https://stackoverflow.com/questions/28821804/how-can-i-quickly-determine-the-state-for-a-given-zipcode
    activateButton(info) {
        const state = Object(_zipcode_utility__WEBPACK_IMPORTED_MODULE_3__["getState"])(info.zipcode);
        const shouldActivateCalculate = info.shouldActivate && state !== 'none';
        this.income = info.income;
        this.state = state;
        this.isMonthly = info.isMonthly;
        this.toggleCalculateButton$.next(shouldActivateCalculate);
    }
    calculateTax() {
        this.taxCalculatorService.calculateTax(this.income, this.state, this.isMonthly)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(tax => this.taxResultsComponent.tax$.next(tax)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.taxResultsComponent.displayResults$.next(true))).subscribe();
    }
}
TaxPageComponent.ɵfac = function TaxPageComponent_Factory(t) { return new (t || TaxPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_tax_calculator_service__WEBPACK_IMPORTED_MODULE_4__["TaxCalculatorService"])); };
TaxPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaxPageComponent, selectors: [["app-tax-page"]], viewQuery: function TaxPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.taxResultsComponent = _t.first);
    } }, decls: 11, vars: 3, consts: [[1, "outline", "resize"], [1, "row"], [1, "column"], [3, "taxInformation"], ["taxresults", ""], [1, "calculate-row"], [1, "calculate-button", 3, "disabled", "click"]], template: function TaxPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-tax-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taxInformation", function TaxPageComponent_Template_app_tax_input_taxInformation_3_listener($event) { return ctx.activateButton($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-tax-results", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaxPageComponent_Template_button_click_8_listener() { return ctx.calculateTax(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Calculate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 1, ctx.toggleCalculateButton$));
    } }, directives: [_tax_input_tax_input_component__WEBPACK_IMPORTED_MODULE_5__["TaxInputComponent"], _tax_results_tax_results_component__WEBPACK_IMPORTED_MODULE_6__["TaxResultsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 0 auto;\r\n  background-color: #e6ddd4;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n  flex: 50%;\r\n  margin: 24px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n}\r\n\r\n.resize[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n}\r\n\r\n.outline[_ngcontent-%COMP%] {\r\n    border-color: #9B9B9B;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-radius: 4px;\r\n    max-width: 550px;\r\n    margin: 0 auto;\r\n    background-color: #e6ddd4;\r\n    box-shadow: 1px 1px 4px #a29486;\r\n}\r\n\r\n.calculate-row[_ngcontent-%COMP%] {\r\n    margin-bottom: 24px;\r\n    text-align: center;\r\n}\r\n\r\n.calculate-botton[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n    border-style: solid;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGF4LXBhZ2UvdGF4LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC90YXgtcGFnZS90YXgtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZkZGQ0O1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBmbGV4OiA1MCU7XHJcbiAgbWFyZ2luOiAyNHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucmVzaXplIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5vdXRsaW5lIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzlCOUI5QjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmRkZDQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAjYTI5NDg2O1xyXG59XHJcblxyXG4uY2FsY3VsYXRlLXJvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FsY3VsYXRlLWJvdHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tax-page',
                templateUrl: './tax-page.component.html',
                styleUrls: ['./tax-page.component.css']
            }]
    }], function () { return [{ type: _core_services_tax_calculator_service__WEBPACK_IMPORTED_MODULE_4__["TaxCalculatorService"] }]; }, { taxResultsComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['taxresults']
        }] }); })();


/***/ }),

/***/ "./src/app/tax-results/tax-results.component.ts":
/*!******************************************************!*\
  !*** ./src/app/tax-results/tax-results.component.ts ***!
  \******************************************************/
/*! exports provided: TaxResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxResultsComponent", function() { return TaxResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TaxResultsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You owe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Congrats!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.plan);
} }
function TaxResultsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TaxResultsComponent {
    constructor() {
        this.displayResults$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.tax$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.tax = '';
        this.plan = '';
    }
    ngOnInit() {
        this.tax$.subscribe(v => {
            this.tax = v.tax.toFixed(2);
            this.plan = v.plan;
        });
        this.displayResults$.next(false);
    }
    calculateTax() {
        this.displayResults$.next(true);
    }
}
TaxResultsComponent.ɵfac = function TaxResultsComponent_Factory(t) { return new (t || TaxResultsComponent)(); };
TaxResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaxResultsComponent, selectors: [["app-tax-results"]], decls: 5, vars: 4, consts: [[1, "results-container"], [4, "ngIf", "ngIfElse"], ["placeholder", ""], [1, "label"], [1, "tax-amount-container"], [1, "tax-amount-label"], [1, "currency-label"], [1, "method-label"], [1, "method-label", "blink", "sarcastic"], ["src", "images/unclesam.jpg", 1, "unclesam"]], template: function TaxResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaxResultsComponent_div_1_Template, 12, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaxResultsComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.displayResults$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".label[_ngcontent-%COMP%] {\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    margin-top: 12px;\r\n    color: #9B9B9B;\r\n}\r\n\r\n\r\n.tax-amount-container[_ngcontent-%COMP%] {\r\n    margin-top: 18px;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n\r\n.tax-amount-label[_ngcontent-%COMP%] {\r\n    font-size: 4rem;\r\n    margin-right: 8px;\r\n    color: #8a5f34;\r\n}\r\n\r\n\r\n.currency-label[_ngcontent-%COMP%] {\r\n    font-variant: small-caps;\r\n}\r\n\r\n\r\n.method-label[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n.results-container[_ngcontent-%COMP%] {\r\n    margin-top: 18px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.unclesam[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    mix-blend-mode: multiply;\r\n}\r\n\r\n\r\n.blink[_ngcontent-%COMP%] {\r\n  animation: blinker 1s linear infinite;\r\n}\r\n\r\n\r\n@keyframes blinker {\r\n  50% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n\r\n.sarcastic[_ngcontent-%COMP%] {\r\n    margin-top: 8px;\r\n    color: palevioletred;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGF4LXJlc3VsdHMvdGF4LXJlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnREFBZ0Q7SUFDaEQsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7OztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOzs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3RheC1yZXN1bHRzL3RheC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBjb2xvcjogIzlCOUI5QjtcclxufVxyXG5cclxuXHJcbi50YXgtYW1vdW50LWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLnRheC1hbW91bnQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBjb2xvcjogIzhhNWYzNDtcclxufVxyXG5cclxuLmN1cnJlbmN5LWxhYmVsIHtcclxuICAgIGZvbnQtdmFyaWFudDogc21hbGwtY2FwcztcclxufVxyXG5cclxuLm1ldGhvZC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5yZXN1bHRzLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udW5jbGVzYW0ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XHJcbn1cclxuXHJcbi5ibGluayB7XHJcbiAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGlua2VyIHtcclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5zYXJjYXN0aWMge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tax-results',
                templateUrl: './tax-results.component.html',
                styleUrls: ['./tax-results.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/zipcode-utility.ts":
/*!************************************!*\
  !*** ./src/app/zipcode-utility.ts ***!
  \************************************/
/*! exports provided: getState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getState", function() { return getState; });
function getState(zipString) {
    /* Ensure we have exactly 5 characters to parse */
    if (zipString.length !== 5) {
        console.log('Must pass a 5-digit zipcode.');
        return;
    }
    /* Ensure we don't parse strings starting with 0 as octal values */
    const zipcode = parseInt(zipString, 10);
    let st;
    let state;
    /* Code cases alphabetized by state */
    if (zipcode >= 35000 && zipcode <= 36999) {
        st = 'AL';
        state = 'Alabama';
    }
    else if (zipcode >= 99500 && zipcode <= 99999) {
        st = 'AK';
        state = 'Alaska';
    }
    else if (zipcode >= 85000 && zipcode <= 86999) {
        st = 'AZ';
        state = 'Arizona';
    }
    else if (zipcode >= 71600 && zipcode <= 72999) {
        st = 'AR';
        state = 'Arkansas';
    }
    else if (zipcode >= 90000 && zipcode <= 96699) {
        st = 'CA';
        state = 'California';
    }
    else if (zipcode >= 80000 && zipcode <= 81999) {
        st = 'CO';
        state = 'Colorado';
    }
    else if ((zipcode >= 6000 && zipcode <= 6389) || (zipcode >= 6391 && zipcode <= 6999)) {
        st = 'CT';
        state = 'Connecticut';
    }
    else if (zipcode >= 19700 && zipcode <= 19999) {
        st = 'DE';
        state = 'Delaware';
    }
    else if (zipcode >= 32000 && zipcode <= 34999) {
        st = 'FL';
        state = 'Florida';
    }
    else if ((zipcode >= 30000 && zipcode <= 31999) || (zipcode >= 39800 && zipcode <= 39999)) {
        st = 'GA';
        state = 'Georgia';
    }
    else if (zipcode >= 96700 && zipcode <= 96999) {
        st = 'HI';
        state = 'Hawaii';
    }
    else if (zipcode >= 83200 && zipcode <= 83999) {
        st = 'ID';
        state = 'Idaho';
    }
    else if (zipcode >= 60000 && zipcode <= 62999) {
        st = 'IL';
        state = 'Illinois';
    }
    else if (zipcode >= 46000 && zipcode <= 47999) {
        st = 'IN';
        state = 'Indiana';
    }
    else if (zipcode >= 50000 && zipcode <= 52999) {
        st = 'IA';
        state = 'Iowa';
    }
    else if (zipcode >= 66000 && zipcode <= 67999) {
        st = 'KS';
        state = 'Kansas';
    }
    else if (zipcode >= 40000 && zipcode <= 42999) {
        st = 'KY';
        state = 'Kentucky';
    }
    else if (zipcode >= 70000 && zipcode <= 71599) {
        st = 'LA';
        state = 'Louisiana';
    }
    else if (zipcode >= 3900 && zipcode <= 4999) {
        st = 'ME';
        state = 'Maine';
    }
    else if (zipcode >= 20600 && zipcode <= 21999) {
        st = 'MD';
        state = 'Maryland';
    }
    else if ((zipcode >= 1000 && zipcode <= 2799) || (zipcode == 5501) || (zipcode == 5544)) {
        st = 'MA';
        state = 'Massachusetts';
    }
    else if (zipcode >= 48000 && zipcode <= 49999) {
        st = 'MI';
        state = 'Michigan';
    }
    else if (zipcode >= 55000 && zipcode <= 56899) {
        st = 'MN';
        state = 'Minnesota';
    }
    else if (zipcode >= 38600 && zipcode <= 39999) {
        st = 'MS';
        state = 'Mississippi';
    }
    else if (zipcode >= 63000 && zipcode <= 65999) {
        st = 'MO';
        state = 'Missouri';
    }
    else if (zipcode >= 59000 && zipcode <= 59999) {
        st = 'MT';
        state = 'Montana';
    }
    else if (zipcode >= 27000 && zipcode <= 28999) {
        st = 'NC';
        state = 'North Carolina';
    }
    else if (zipcode >= 58000 && zipcode <= 58999) {
        st = 'ND';
        state = 'North Dakota';
    }
    else if (zipcode >= 68000 && zipcode <= 69999) {
        st = 'NE';
        state = 'Nebraska';
    }
    else if (zipcode >= 88900 && zipcode <= 89999) {
        st = 'NV';
        state = 'Nevada';
    }
    else if (zipcode >= 3000 && zipcode <= 3899) {
        st = 'NH';
        state = 'New Hampshire';
    }
    else if (zipcode >= 7000 && zipcode <= 8999) {
        st = 'NJ';
        state = 'New Jersey';
    }
    else if (zipcode >= 87000 && zipcode <= 88499) {
        st = 'NM';
        state = 'New Mexico';
    }
    else if ((zipcode >= 10000 && zipcode <= 14999) || (zipcode == 6390) || (zipcode == 501) || (zipcode == 544)) {
        st = 'NY';
        state = 'New York';
    }
    else if (zipcode >= 43000 && zipcode <= 45999) {
        st = 'OH';
        state = 'Ohio';
    }
    else if ((zipcode >= 73000 && zipcode <= 73199) || (zipcode >= 73400 && zipcode <= 74999)) {
        st = 'OK';
        state = 'Oklahoma';
    }
    else if (zipcode >= 97000 && zipcode <= 97999) {
        st = 'OR';
        state = 'Oregon';
    }
    else if (zipcode >= 15000 && zipcode <= 19699) {
        st = 'PA';
        state = 'Pennsylvania';
    }
    else if (zipcode >= 300 && zipcode <= 999) {
        st = 'PR';
        state = 'Puerto Rico';
    }
    else if (zipcode >= 2800 && zipcode <= 2999) {
        st = 'RI';
        state = 'Rhode Island';
    }
    else if (zipcode >= 29000 && zipcode <= 29999) {
        st = 'SC';
        state = 'South Carolina';
    }
    else if (zipcode >= 57000 && zipcode <= 57999) {
        st = 'SD';
        state = 'South Dakota';
    }
    else if (zipcode >= 37000 && zipcode <= 38599) {
        st = 'TN';
        state = 'Tennessee';
    }
    else if ((zipcode >= 75000 && zipcode <= 79999) || (zipcode >= 73301 && zipcode <= 73399) || (zipcode >= 88500 && zipcode <= 88599)) {
        st = 'TX';
        state = 'Texas';
    }
    else if (zipcode >= 84000 && zipcode <= 84999) {
        st = 'UT';
        state = 'Utah';
    }
    else if (zipcode >= 5000 && zipcode <= 5999) {
        st = 'VT';
        state = 'Vermont';
    }
    else if ((zipcode >= 20100 && zipcode <= 20199) || (zipcode >= 22000 && zipcode <= 24699) || (zipcode == 20598)) {
        st = 'VA';
        state = 'Virginia';
    }
    else if ((zipcode >= 20000 && zipcode <= 20099) || (zipcode >= 20200 && zipcode <= 20599) || (zipcode >= 56900 && zipcode <= 56999)) {
        st = 'DC';
        state = 'Washington DC';
    }
    else if (zipcode >= 98000 && zipcode <= 99499) {
        st = 'WA';
        state = 'Washington';
    }
    else if (zipcode >= 24700 && zipcode <= 26999) {
        st = 'WV';
        state = 'West Virginia';
    }
    else if (zipcode >= 53000 && zipcode <= 54999) {
        st = 'WI';
        state = 'Wisconsin';
    }
    else if (zipcode >= 82000 && zipcode <= 83199) {
        st = 'WY';
        state = 'Wyoming';
    }
    else {
        st = 'none';
        state = 'none';
        console.log('No state found matching', zipcode);
    }
    return state;
}


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    server: 'http://localhost:5000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Doug\autosoft\autosoft-tax-calculator\Client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map