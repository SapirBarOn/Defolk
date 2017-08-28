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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IntroNavComponent = (function () {
    function IntroNavComponent() {
        this.onNavSelected = new core_1.EventEmitter();
    }
    IntroNavComponent.prototype.ngOnInit = function () {
    };
    IntroNavComponent.prototype.onNavSelectedClick = function (url) {
        console.log("IntroNavComponent-> onNavSelectedClick(" + url + ")");
        this.onNavSelected.emit(url);
    };
    return IntroNavComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], IntroNavComponent.prototype, "onNavSelected", void 0);
IntroNavComponent = __decorate([
    core_1.Component({
        selector: 'app-intro-nav',
        templateUrl: './intro-nav.component.html',
        styleUrls: ['./intro-nav.component.css']
    }),
    __metadata("design:paramtypes", [])
], IntroNavComponent);
exports.IntroNavComponent = IntroNavComponent;
//# sourceMappingURL=intro-nav.component.js.map