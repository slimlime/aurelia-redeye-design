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
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var events_1 = require("../../events");
var debouncer_1 = require("../../common/debouncer");
var ReTileList = /** @class */ (function () {
    function ReTileList(element) {
        this.element = element;
        this.data = [];
        this.config = {};
        this.loading = false;
        this.handleScroll = debouncer_1.debounce(this.scrolled, 300);
        this.handleScrollBound = this.handleScroll.bind(this);
    }
    ReTileList.prototype.attached = function () {
        this.element.addEventListener('scroll', this.handleScrollBound);
    };
    ReTileList.prototype.detached = function () {
        this.element.removeEventListener('scroll', this.handleScrollBound);
    };
    ReTileList.prototype.handleTileClick = function (tile) {
        // Dispatch a tile-click event so the parent can decide what to do with it
        events_1.dispatchEvent(this.element, 'tile-click', {
            tile: tile
        });
        return false;
    };
    ReTileList.prototype.scrolled = function (evt) {
        var target = evt.target;
        // dispatch the event when the scroll reaches about 90% of the way down.
        if ((target.offsetHeight + target.scrollTop) >= (target.scrollHeight - 120)) {
            events_1.dispatchEvent(this.element, 'scroll-end');
        }
    };
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReTileList.prototype, "data", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReTileList.prototype, "config", void 0);
    __decorate([
        aurelia_templating_1.bindable({
            defaultBindingMode: aurelia_binding_1.bindingMode.oneWay
        })
    ], ReTileList.prototype, "loading", void 0);
    ReTileList = __decorate([
        aurelia_templating_1.customElement('re-tile-list'),
        aurelia_dependency_injection_1.inject(Element)
    ], ReTileList);
    return ReTileList;
}());
exports.ReTileList = ReTileList;
