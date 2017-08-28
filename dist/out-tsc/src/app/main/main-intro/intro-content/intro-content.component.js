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
var IntroContentComponent = (function () {
    function IntroContentComponent() {
        this.albumSelected = new core_1.EventEmitter();
    }
    IntroContentComponent.prototype.ngOnInit = function () {
    };
    IntroContentComponent.prototype.onAlbumSelected = function (album) {
        console.log("IntroContentComponent -> onAlbumSelected(" + album._id + ")");
        this.albumSelected.emit(album);
    };
    return IntroContentComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], IntroContentComponent.prototype, "albumSelected", void 0);
IntroContentComponent = __decorate([
    core_1.Component({
        selector: 'app-intro-content',
        templateUrl: './intro-content.component.html',
        styleUrls: ['./intro-content.component.css']
    }),
    __metadata("design:paramtypes", [])
], IntroContentComponent);
exports.IntroContentComponent = IntroContentComponent;
//# sourceMappingURL=intro-content.component.js.map