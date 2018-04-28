import { PLATFORM } from 'aurelia-pal';
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
            .useAvatar()
            .useDropdown()
            .useSpreadsheet()
            .useTileList()
            .useValueConverters()
            .useCustomAtrributes()
            .useForm();
    };
    ConfigBuilder.prototype.useNavbar = function () {
        this.globalResources.push(PLATFORM.moduleName('./layout/navbar/navbar'));
        return this;
    };
    ConfigBuilder.prototype.useForm = function () {
        this.globalResources.push(PLATFORM.moduleName('./components/form/form'));
        this.globalResources.push(PLATFORM.moduleName('./components/form/form-checkbox'));
        this.globalResources.push(PLATFORM.moduleName('./components/form/form-number'));
        this.globalResources.push(PLATFORM.moduleName('./components/form/form-radio'));
        this.globalResources.push(PLATFORM.moduleName('./components/form/form-scale'));
        this.globalResources.push(PLATFORM.moduleName('./components/form/form-select'));
        this.globalResources.push(PLATFORM.moduleName('./components/form/form-text'));
        this.globalResources.push(PLATFORM.moduleName('./components/form/form-textarea'));
        return this;
    };
    ConfigBuilder.prototype.useAvatar = function () {
        this.globalResources.push(PLATFORM.moduleName('./components/avatar/avatar'));
        return this;
    };
    ConfigBuilder.prototype.useDropdown = function () {
        this.globalResources.push(PLATFORM.moduleName('./components/dropdown/dropdown'));
        return this;
    };
    ConfigBuilder.prototype.useSpreadsheet = function () {
        this.globalResources.push(PLATFORM.moduleName('./components/spreadsheet/spreadsheet'));
        return this;
    };
    ConfigBuilder.prototype.useTileList = function () {
        this.globalResources.push(PLATFORM.moduleName('./components/tile-list/tile-list'));
        return this;
    };
    ConfigBuilder.prototype.useValueConverters = function () {
        this.globalResources.push(PLATFORM.moduleName('./value-converters/get-value'));
        return this;
    };
    ConfigBuilder.prototype.useCustomAtrributes = function () {
        this.globalResources.push(PLATFORM.moduleName('./custom-attributes/active-class'));
        this.globalResources.push(PLATFORM.moduleName('./custom-attributes/form-disabled'));
        this.globalResources.push(PLATFORM.moduleName('./custom-attributes/form-maxlength'));
        this.globalResources.push(PLATFORM.moduleName('./custom-attributes/form-number'));
        this.globalResources.push(PLATFORM.moduleName('./custom-attributes/form-readonly'));
        this.globalResources.push(PLATFORM.moduleName('./custom-attributes/form-rows'));
        this.globalResources.push(PLATFORM.moduleName('./custom-attributes/validation-class'));
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
export { ConfigBuilder };
