System.register(["aurelia-templating", "aurelia-binding"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var aurelia_templating_1, aurelia_binding_1, ReAvatar;
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
            ReAvatar = /** @class */ (function () {
                function ReAvatar() {
                    this.size = '';
                    this.initial = '';
                    this.square = false;
                    this.imgUrl = '';
                    this.attachmentStyle = '';
                }
                ReAvatar.prototype.imgUrlChanged = function (n) {
                    if (n && n.length) {
                        this.attachmentStyle = "background-image: url(" + n + ")";
                    }
                    else {
                        this.attachmentStyle = '';
                    }
                };
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReAvatar.prototype, "size", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReAvatar.prototype, "initial", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReAvatar.prototype, "square", void 0);
                __decorate([
                    aurelia_templating_1.bindable({
                        defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
                    })
                ], ReAvatar.prototype, "imgUrl", void 0);
                ReAvatar = __decorate([
                    aurelia_templating_1.customElement('re-avatar')
                ], ReAvatar);
                return ReAvatar;
            }());
            exports_1("ReAvatar", ReAvatar);
        }
    };
});