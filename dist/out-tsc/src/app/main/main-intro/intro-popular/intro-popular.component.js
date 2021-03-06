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
var app_AlbumService_1 = require("../../../app.AlbumService");
var IntroPopularComponent = (function () {
    function IntroPopularComponent(AlbumService) {
        this.AlbumService = AlbumService;
        this.albums = [];
    }
    IntroPopularComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.AlbumService.getPopularAlbums(function (result) {
            _this.albums = result;
            console.log(_this.albums);
        });
    };
    return IntroPopularComponent;
}());
IntroPopularComponent = __decorate([
    core_1.Component({
        selector: 'app-intro-popular',
        templateUrl: './intro-popular.component.html',
        styleUrls: ['./intro-popular.component.css']
    }),
    __metadata("design:paramtypes", [app_AlbumService_1.AlbumService])
], IntroPopularComponent);
exports.IntroPopularComponent = IntroPopularComponent;
//# sourceMappingURL=intro-popular.component.js.map