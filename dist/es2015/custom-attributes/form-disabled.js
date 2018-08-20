var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customAttribute } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
var ReFormDisabledCustomAttribute = /** @class */ (function () {
    function ReFormDisabledCustomAttribute(element) {
        this.element = element;
    }
    ReFormDisabledCustomAttribute.prototype.valueChanged = function (newValue) {
        if (newValue === void 0) { newValue = false; }
        if (newValue && newValue !== 'false') {
            this.element.setAttribute('disabled', '');
        }
        else {
            this.element.removeAttribute('disabled');
        }
    };
    ReFormDisabledCustomAttribute = __decorate([
        customAttribute('re-form-disabled'),
        inject(Element)
    ], ReFormDisabledCustomAttribute);
    return ReFormDisabledCustomAttribute;
}());
export { ReFormDisabledCustomAttribute };
