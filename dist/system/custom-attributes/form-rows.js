System.register(["aurelia-templating", "aurelia-dependency-injection"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_dependency_injection_1, ReFormRowsCustomAttribute;
    return {
        setters: [
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_dependency_injection_1_1) {
                aurelia_dependency_injection_1 = aurelia_dependency_injection_1_1;
            }
        ],
        execute: function () {
            ReFormRowsCustomAttribute = /** @class */ (function () {
                function ReFormRowsCustomAttribute(element) {
                    this.element = element;
                }
                ReFormRowsCustomAttribute.prototype.valueChanged = function (newValue) {
                    if (newValue === void 0) { newValue = null; }
                    if (newValue) {
                        this.element.setAttribute('rows', newValue);
                    }
                    else {
                        this.element.removeAttribute('rows');
                    }
                };
                ReFormRowsCustomAttribute = __decorate([
                    aurelia_templating_1.customAttribute('re-form-rows'),
                    aurelia_dependency_injection_1.inject(Element)
                ], ReFormRowsCustomAttribute);
                return ReFormRowsCustomAttribute;
            }());
            exports_1("ReFormRowsCustomAttribute", ReFormRowsCustomAttribute);
        }
    };
});