(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-main-main-module"],{

/***/ "+d0d":
/*!********************************************!*\
  !*** ./src/app/services/colors.service.ts ***!
  \********************************************/
/*! exports provided: ColorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsService", function() { return ColorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ColorsService {
    constructor() {
        this.colors$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.colorsAdded$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1);
    }
    getColorsCopy() {
        return [...this.colors$.getValue()];
    }
    add(newColor) {
        this.colors$.next([...this.getColorsCopy(), newColor]);
        const inc = this.colorsAdded$.getValue() + 1;
        this.colorsAdded$.next(inc);
    }
    remove(index) {
        const newArray = [...this.colors$.getValue()];
        newArray.splice(index, 1);
        this.colors$.next(newArray);
    }
    edit(index, result) {
        this.colors$.next(this.getColorsCopy().map((e, i) => i === index ? result : e));
    }
    clear() {
        this.colors$.next([]);
        this.colorsAdded$.next(1);
    }
    getColorAtIndex(index) {
        return this.colors$.getValue()[index];
    }
}
ColorsService.ɵfac = function ColorsService_Factory(t) { return new (t || ColorsService)(); };
ColorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorsService, factory: ColorsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "+lHP":
/*!*****************************************!*\
  !*** ./src/app/utils/gradient-utils.ts ***!
  \*****************************************/
/*! exports provided: getGradientForRgb, buildGradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGradientForRgb", function() { return getGradientForRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildGradient", function() { return buildGradient; });
/* harmony import */ var _convert_color_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert-color-utils */ "R71e");

function getGradientForRgb(name, red, green, blue) {
    switch (name) {
        case 'red':
            return `rgb(${0}, ${green}, ${blue}), rgb(${255}, ${green}, ${blue})`;
        case 'green':
            return `rgb(${red}, ${0}, ${blue}), rgb(${red}, ${255}, ${blue})`;
        case 'blue':
            return `rgb(${red}, ${green}, ${0}), rgb(${red}, ${green}, ${255})`;
    }
}
function buildGradient(name, sliderControls) {
    let gradientColors = '';
    if (name === 'hue' || name === 'saturation' || name === 'lightness') {
        if (name === 'hue') {
            gradientColors = `#ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%`;
        }
        else {
            const other = sliderControls.find((con) => con.name !== name && con.name !== 'hue').currentValue;
            const hue = Object(_convert_color_utils__WEBPACK_IMPORTED_MODULE_0__["getValueFromControls"])('hue', sliderControls);
            if (name === 'saturation') {
                gradientColors = `hsl(${hue}, ${0}%, ${other}%), hsl(${hue}, ${100}%, ${other}%)`;
            }
            else {
                gradientColors = `hsl(${hue}, ${other}%, ${0}%), hsl(${hue}, ${other}%, ${50}%), hsl(${hue}, ${other}%, ${100}%)`;
            }
        }
    }
    else {
        const red = Object(_convert_color_utils__WEBPACK_IMPORTED_MODULE_0__["getValueFromControls"])('red', sliderControls);
        const green = Object(_convert_color_utils__WEBPACK_IMPORTED_MODULE_0__["getValueFromControls"])('green', sliderControls);
        const blue = Object(_convert_color_utils__WEBPACK_IMPORTED_MODULE_0__["getValueFromControls"])('blue', sliderControls);
        gradientColors = getGradientForRgb(name, red, green, blue);
    }
    return `linear-gradient(to right, ${gradientColors})`;
}


/***/ }),

/***/ "6Fix":
/*!*******************************************!*\
  !*** ./src/app/views/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-routing.module */ "fDvs");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "E15m");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_palette_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/palette.service */ "hpXX");















class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, providers: [src_app_services_palette_service__WEBPACK_IMPORTED_MODULE_13__["PaletteService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainRoutingModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ],
                providers: [src_app_services_palette_service__WEBPACK_IMPORTED_MODULE_13__["PaletteService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "E15m":
/*!**********************************************!*\
  !*** ./src/app/views/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_color_edit_dialog_color_edit_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/color-edit-dialog/color-edit-dialog.component */ "T7U9");
/* harmony import */ var _components_json_dialog_json_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/json-dialog/json-dialog.component */ "DyLW");
/* harmony import */ var _interfaces_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../interfaces/colors */ "Yo4T");
/* harmony import */ var _utils_convert_color_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/convert-color-utils */ "R71e");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_utils_gradient_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/gradient-utils */ "+lHP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_colors_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/colors.service */ "+d0d");
/* harmony import */ var src_app_services_palette_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/palette.service */ "hpXX");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
























const _c0 = function (a0) { return { "background": a0 }; };
function MainComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainComponent_div_14_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const control_r5 = ctx.$implicit; return control_r5.currentValue = $event; })("ngModelChange", function MainComponent_div_14_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSliderChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](control_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "slider " + control_r5.name)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.getBg(control_r5.name)))("ngModel", control_r5.currentValue)("max", control_r5.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](control_r5.currentValue);
} }
function MainComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.colorName = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.paletteName = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_p_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Colors that you add will appear here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_mat_list_item_36_mat_divider_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider", 31);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inset", true);
} }
function MainComponent_mat_list_item_36_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_mat_list_item_36_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const index_r14 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onEditColor(index_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_mat_list_item_36_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const index_r14 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.onRemoveColor(index_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainComponent_mat_list_item_36_mat_divider_19_Template, 1, 1, "mat-divider", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r13 = ctx.$implicit;
    const last_r15 = ctx.last;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", color_r13.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r13.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r13.hex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r15 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 6, ctx_r4.colorService.colors$).length > 0);
} }
class MainComponent {
    constructor(dialog, router, colorService, paletteService, snackbar) {
        this.dialog = dialog;
        this.router = router;
        this.colorService = colorService;
        this.paletteService = paletteService;
        this.snackbar = snackbar;
        this.colorName = 'Color1';
        this.paletteName = 'My new palette';
        this.colorMode = 'HSL';
        this.sliderControls = [..._interfaces_colors__WEBPACK_IMPORTED_MODULE_3__["colorModes"][1].sliderControls];
        this.currentColorString = 'hsl(0, 0%, 0%)';
        this.currentColorHex = "#000000";
        this.colorCount = 1;
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.updateColorString();
        this.colorService.colors$.subscribe((value) => {
            this.usedColorNames = value.map((e) => e.name);
            this.usedColorHexs = value.map((e) => e.hex);
            this.colorCount = value.length + 1;
            this.colorName = `Color${this.colorCount}`;
        });
    }
    ngOnDestroy() {
        this.onDestroy$.next(true);
    }
    updateColorString() {
        const controlValues = this.sliderControls.map((cont) => cont.currentValue);
        this.currentColorString = Object(_utils_convert_color_utils__WEBPACK_IMPORTED_MODULE_4__["getColorString"])(this.colorMode, this.sliderControls);
        this.currentColorHex = Object(_utils_convert_color_utils__WEBPACK_IMPORTED_MODULE_4__["getHex"])(controlValues, this.colorMode);
    }
    onSliderChanged() {
        this.updateColorString();
    }
    getBg(name) {
        return Object(src_app_utils_gradient_utils__WEBPACK_IMPORTED_MODULE_6__["buildGradient"])(name, this.sliderControls);
    }
    onAdd() {
        // TODO: Move this to a util
        const controls = this.sliderControls.map((obj) => Object.assign({}, obj));
        const newColor = {
            name: this.colorName,
            color: this.currentColorString,
            editMode: this.colorMode,
            hex: this.currentColorHex,
            controls: controls,
        };
        this.colorService.add(newColor);
    }
    onRemoveColor(index) {
        this.colorService.remove(index);
    }
    onEditColor(index) {
        const dialogRef = this.dialog.open(_components_color_edit_dialog_color_edit_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ColorEditDialogComponent"], {
            data: { selectedColor: this.colorService.getColorAtIndex(index) }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.colorService.edit(index, result);
            }
        });
    }
    onColorModeChanged(e) {
        this.colorMode = e;
        this.sliderControls = Object(_utils_convert_color_utils__WEBPACK_IMPORTED_MODULE_4__["convertHex"])(this.currentColorHex, e);
        this.updateColorString();
    }
    onGetJson() {
        this.dialog.open(_components_json_dialog_json_dialog_component__WEBPACK_IMPORTED_MODULE_2__["JsonDialogComponent"], { data: { colors: this.colorService.colors$.getValue() } });
    }
    onSavePalette() {
        // TODO: Move this to a util
        const firebaseColors = this.colorService.colors$.getValue().map((color) => {
            return {
                color: color.color,
                hex: color.hex,
                mode: color.editMode,
                name: color.name,
            };
        });
        this.paletteService.addPalette(this.paletteName, firebaseColors).then(() => {
            this.snackbar.open('Palette saved successfully!', undefined, { duration: 5000 });
            this.colorService.clear();
        }).catch((err) => {
            // TODO - show error modal
            console.log('Error saving palette', err);
        });
    }
    goToPreview() {
        this.router.navigate(['/preview']);
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colors_service__WEBPACK_IMPORTED_MODULE_9__["ColorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_palette_service__WEBPACK_IMPORTED_MODULE_10__["PaletteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 45, vars: 21, consts: [[1, "outer-container"], [1, "container"], [1, "picker-row"], [1, "color-preview"], [1, "slider-holder"], ["appearance", "fill"], [3, "ngModel", "ngModelChange"], ["value", "RGB"], ["value", "HSL"], ["class", "sliders-cont", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "palette-container"], [1, "palette-card"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["align", "end"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], [1, "sliders-cont"], [1, "control-name"], [1, "slider-outer"], ["type", "range", "min", "0", 3, "ngClass", "ngStyle", "ngModel", "max", "ngModelChange"], [1, "value-label"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "prev-section", "color-prev-section"], ["mat-line", "", 1, "palette-color-line"], [1, "prev-section", "button-section"], ["mat-stroked-button", "", "color", "primary", 1, "edit-button", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], ["class", "margin-divider", 3, "inset", 4, "ngIf"], [1, "margin-divider", 3, "inset"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Select color mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.onColorModeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "RGB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HSL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainComponent_div_14_Template, 7, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name your color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_18_listener($event) { return ctx.colorName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MainComponent_button_19_Template, 3, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_20_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add to Palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Palette Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Name your palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_30_listener($event) { return ctx.paletteName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MainComponent_button_31_Template, 3, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MainComponent_p_32_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MainComponent_mat_list_item_36_Template, 21, 8, "mat-list-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-card-actions", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_39_listener() { return ctx.onSavePalette(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Save this palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_42_listener() { return ctx.onGetJson(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Get JSON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.currentColorHex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.colorMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sliderControls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.colorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.colorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.usedColorNames.includes(ctx.colorName) || ctx.usedColorHexs.includes(ctx.currentColorHex));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.paletteName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paletteName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 13, ctx.colorService.colors$).length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 15, ctx.colorService.colors$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 17, ctx.colorService.colors$).length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 19, ctx.colorService.colors$).length === 0);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatList"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardActions"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["RangeValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgStyle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDivider"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]], styles: [".container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding-bottom: 3em;\n}\n.container .picker-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.container .picker-row .color-preview {\n  height: 300px;\n  width: 300px;\n  border-radius: 150px;\n}\n.container .picker-row .slider-holder {\n  display: flex;\n  flex-direction: column;\n  padding-left: 1em;\n  padding-right: 1em;\n  min-width: 240px;\n}\n.container .picker-row .slider-holder p.control-name {\n  margin: 0;\n}\n.container .picker-row .slider-holder .slider-outer {\n  display: flex;\n  align-items: center;\n  padding-bottom: 1em;\n}\n.container .picker-row .slider-holder .slider-outer .value-label {\n  min-width: 25px;\n}\n.container .picker-row .val-holder {\n  display: flex;\n  flex-direction: column;\n}\n.container .add-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.color-preview {\n  height: 70px;\n  width: 70px;\n  margin-right: 1em;\n}\n.outer-container {\n  padding: 2em;\n  display: flex;\n  flex: 1;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.mat-list-item-content {\n  height: auto;\n}\n.palette-color-line {\n  margin-bottom: 0 !important;\n}\n.palette-container {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n}\n.palette-card {\n  min-width: 350px;\n  max-width: 450px;\n  display: flex !important;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 16px 20px 30px !important;\n  margin-bottom: 1em;\n}\n.mat-slider-horizontal {\n  display: flex;\n  flex: 1;\n}\ndiv.mat-list-item-content {\n  justify-content: space-between;\n  padding: 0 !important;\n}\n.mat-list-base .mat-list-item {\n  height: auto !important;\n}\n.prev-section {\n  display: flex;\n  flex: 1;\n  justify-content: space-around;\n}\n.prev-section.color-prev-section {\n  min-width: 180px;\n  justify-content: flex-start;\n}\n.prev-section.button-section {\n  max-width: 100px;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n.prev-section.button-section .mat-stroked-button {\n  margin-top: 10px;\n}\n.slider {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  width: 100%;\n  height: 10px;\n  border-radius: 5px;\n  outline: none;\n}\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  background: transparent;\n  border: 2px solid rgba(100, 100, 100, 0.5);\n  cursor: pointer;\n}\n.slider::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  background: transparent;\n  border: 2px solid rgba(100, 100, 100, 0.5);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQUZZO0VBQ0ksU0FBQTtBQUloQjtBQUZZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFJaEI7QUFIZ0I7RUFDSSxlQUFBO0FBS3BCO0FBRFE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFHWjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFFUjtBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFHSjtBQURBO0VBQ0ksWUFBQTtBQUlKO0FBRkE7RUFDSSwyQkFBQTtBQUtKO0FBSEE7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBTUo7QUFKQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBT0o7QUFMQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0FBUUo7QUFOQTtFQUNJLDhCQUFBO0VBQ0EscUJBQUE7QUFTSjtBQVBBO0VBQ0ksdUJBQUE7QUFVSjtBQVJBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSw2QkFBQTtBQVdKO0FBVkk7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0FBWVI7QUFWSTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVlSO0FBWFE7RUFDSSxnQkFBQTtBQWFaO0FBUkE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQVdKO0FBVEE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0FBWUo7QUFUQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtBQVlKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICAgIC5waWNrZXItcm93e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmNvbG9yLXByZXZpZXd7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNsaWRlci1ob2xkZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyNDBweDtcbiAgICAgICAgICAgIHAuY29udHJvbC1uYW1le1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbGlkZXItb3V0ZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgICAgICAgICAgLnZhbHVlLWxhYmVse1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC52YWwtaG9sZGVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFkZC1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbn1cbi5jb2xvci1wcmV2aWV3e1xuICAgIGhlaWdodDogNzBweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cbi5vdXRlci1jb250YWluZXJ7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4ubWF0LWxpc3QtaXRlbS1jb250ZW50e1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5wYWxldHRlLWNvbG9yLWxpbmV7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLnBhbGV0dGUtY29udGFpbmVye1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wYWxldHRlLWNhcmR7XG4gICAgbWluLXdpZHRoOiAzNTBweDtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHggMzBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5tYXQtc2xpZGVyLWhvcml6b250YWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xufVxuZGl2Lm1hdC1saXN0LWl0ZW0tY29udGVudHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW17XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG4ucHJldi1zZWN0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAmLmNvbG9yLXByZXYtc2VjdGlvbntcbiAgICAgICAgbWluLXdpZHRoOiAxODBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAmLmJ1dHRvbi1zZWN0aW9ue1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAubWF0LXN0cm9rZWQtYnV0dG9ue1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNsaWRlcntcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTAwLCAxMDAsIDEwMCwgMC41KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: src_app_services_colors_service__WEBPACK_IMPORTED_MODULE_9__["ColorsService"] }, { type: src_app_services_palette_service__WEBPACK_IMPORTED_MODULE_10__["PaletteService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "Yo4T":
/*!**************************************!*\
  !*** ./src/app/interfaces/colors.ts ***!
  \**************************************/
/*! exports provided: colorModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorModes", function() { return colorModes; });
const colorModes = [
    {
        mode: 'RGB',
        sliderControls: [
            {
                name: 'red',
                max: 255,
                currentValue: 0,
            },
            {
                name: 'green',
                max: 255,
                currentValue: 0,
            },
            {
                name: 'blue',
                max: 255,
                currentValue: 0,
            }
        ]
    },
    {
        mode: 'HSL',
        sliderControls: [
            {
                name: 'hue',
                max: 359,
                currentValue: 0,
            },
            {
                name: 'saturation',
                max: 100,
                currentValue: 0,
            },
            {
                name: 'lightness',
                max: 100,
                currentValue: 0,
            }
        ]
    }
];


/***/ }),

/***/ "fDvs":
/*!***************************************************!*\
  !*** ./src/app/views/main/main-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "E15m");





const routes = [{ path: '', component: _main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] }];
class MainRoutingModule {
}
MainRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainRoutingModule });
MainRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainRoutingModule_Factory(t) { return new (t || MainRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-main-main-module.js.map