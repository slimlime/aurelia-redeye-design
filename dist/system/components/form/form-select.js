System.register(["aurelia-templating", "aurelia-binding"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_binding_1, ReFormSelect;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            }
        ],
        execute: function () {
            ReFormSelect = /** @class */ (function () {
                function ReFormSelect() {
                    this.label = '';
                    this.name = '';
                    this.disabled = false;
                    this.readonly = false;
                    this.inline = false;
                    this.hint = '';
                    this.value = '';
                    this.options = [];
                }
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReFormSelect.prototype, "label", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneTime
                    })
                ], ReFormSelect.prototype, "name", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormSelect.prototype, "disabled", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormSelect.prototype, "readonly", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormSelect.prototype, "inline", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormSelect.prototype, "hint", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.twoWay
                    })
                ], ReFormSelect.prototype, "value", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReFormSelect.prototype, "options", void 0);
                ReFormSelect = __decorate([
                    aurelia_templating_1.customElement('re-form-select')
                ], ReFormSelect);
                return ReFormSelect;
            }());
            exports_1("ReFormSelect", ReFormSelect);
        }
    };
});