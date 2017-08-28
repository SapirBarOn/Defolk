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
var MainIntroComponent = (function () {
    function MainIntroComponent() {
    }
    MainIntroComponent.prototype.ngOnInit = function () {
    };
    MainIntroComponent.prototype.onAlbumSelected = function (album) {
        console.log("MainIntroComponent -> onAlbumSelected(" + album._id + ")");
        this.albumToView = album;
        // this.albumSelected.emit(album);
    };
    MainIntroComponent.prototype.onNavRec = function (nav) {
        console.log("onNavRec -> " + nav);
        if (nav === "home" || nav === "favorite") {
            this.albumToView = null;
        }
    };
    return MainIntroComponent;
}());
MainIntroComponent = __decorate([
    core_1.Component({
        selector: 'app-main-intro',
        templateUrl: './main-intro.component.html',
        styleUrls: ['./main-intro.component.css']
    }),
    __metadata("design:paramtypes", [])
], MainIntroComponent);
exports.MainIntroComponent = MainIntroComponent;
//# sourceMappingURL=main-intro.component.js.map