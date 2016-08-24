"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            encapsulation: core_1.ViewEncapsulation.Native,
            styleUrls: ['../../sass/styles.scss'],
            template: "\n\n  <div class=\"row\">\n    <div class=\"col-xs-6 col-sm-10 col-md-2 col-lg-12 div1\">\n      <div class=\"box\">un comentario</div>\n    </div>\n    <div class=\"col-xs-6 col-sm-2 col-md-10 col-lg-12 div2\">\n      <div class=\"box\">un comentario a lado</div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xs-1 col-sm col-md col-lg div1\">\n      <div >1</div>\n    </div>\n    <div class=\"col-xs-11 col-sm-7 col-md-5 col-lg-1 div2\">\n      <div >2</div>\n    </div>\n  </div>\n\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.componente.js.map