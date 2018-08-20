var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement } from 'aurelia-templating';
import { bindingMode } from 'aurelia-binding';
var ReFormNumber = /** @class */ (function () {
    function ReFormNumber() {
        this.label = '';
        this.name = '';
        this.placeholder = '';
        this.disabled = false;
        this.readonly = false;
        this.inline = false;
        this.hint = '';
        this.value = '';
        this.min = '';
        this.max = '';
        this.step = '';
        this.prefix = '';
        this.suffix = '';
    }
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneTime
        })
    ], ReFormNumber.prototype, "label", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneTime
        })
    ], ReFormNumber.prototype, "name", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneTime
        })
    ], ReFormNumber.prototype, "placeholder", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormNumber.prototype, "disabled", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormNumber.prototype, "readonly", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormNumber.prototype, "inline", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormNumber.prototype, "hint", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.twoWay
        })
    ], ReFormNumber.prototype, "value", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormNumber.prototype, "min", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormNumber.prototype, "max", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormNumber.prototype, "step", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormNumber.prototype, "prefix", void 0);
    __decorate([
        bindable({
            defaultBindingMode: bindingMode.oneWay
        })
    ], ReFormNumber.prototype, "suffix", void 0);
    ReFormNumber = __decorate([
        customElement('re-form-number')
    ], ReFormNumber);
    return ReFormNumber;
}());
export { ReFormNumber };
