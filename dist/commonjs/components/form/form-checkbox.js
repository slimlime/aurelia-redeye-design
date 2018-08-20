"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_binding_1 = require("aurelia-binding");
var ReFormCheckbox = /** @class */ (function () {
    function ReFormCheckbox() {
        this.label = '';
        this.name = '';
        this.disabled = false;
        this.readonly = false;
        this.inline = false;
        this.hint = '';
        this.value = [];
        this.options = [];
    }
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
        })
    ], ReFormCheckbox.prototype, "label", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
        })
    ], ReFormCheckbox.prototype, "name", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReFormCheckbox.prototype, "disabled", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReFormCheckbox.prototype, "readonly", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReFormCheckbox.prototype, "inline", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReFormCheckbox.prototype, "hint", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.twoWay
        })
    ], ReFormCheckbox.prototype, "value", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReFormCheckbox.prototype, "options", void 0);
    ReFormCheckbox = __decorate([
        aurelia_templating_1.customElement('re-form-checkbox')
    ], ReFormCheckbox);
    return ReFormCheckbox;
}());
exports.ReFormCheckbox = ReFormCheckbox;
