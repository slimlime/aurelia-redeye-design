define(["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
    * Plugin configuration builder
    */
    var ConfigBuilder = /** @class */ (function () {
        function ConfigBuilder() {
            this.globalResources = [];
            this.useGlobalResources = true;
        }
        ConfigBuilder.prototype.useAll = function () {
            return this
                .useNavbar()
                .useSpreadsheet()
                .useForm();
        };
        ConfigBuilder.prototype.useNavbar = function () {
            this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./layout/navbar/navbar'));
            return this;
        };
        ConfigBuilder.prototype.useForm = function () {
            this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./form/form'));
            return this;
        };
        ConfigBuilder.prototype.useSpreadsheet = function () {
            this.globalResources.push(aurelia_pal_1.PLATFORM.moduleName('./components/spreadsheet/spreadsheet'));
            return this;
        };
        /**
        * Don't globalize any resources
        * Allows you to import yourself via <require></require>
        */
        ConfigBuilder.prototype.withoutGlobalResources = function () {
            this.useGlobalResources = false;
            return this;
        };
        return ConfigBuilder;
    }());
    exports.ConfigBuilder = ConfigBuilder;
});
