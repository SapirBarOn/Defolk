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
var router_1 = require("@angular/router");
var Album_model_1 = require("../../../model/Album.model");
var current_album_1 = require("../../../app-shared/current-album");
var IntroContent2Component = (function () {
    function IntroContent2Component(route, currAlbum) {
        this.route = route;
        this.currAlbum = currAlbum;
        this.h1 = false;
    }
    IntroContent2Component.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (params) {
            console.log("Album ID Param -> " + params['id']);
        });
        if (this.h1 == false)
            this.h1 = true;
        else
            this.h1 = false;
    };
    return IntroContent2Component;
}());
__decorate([
    core_1.Input(), core_1.Output(),
    __metadata("design:type", Album_model_1.Album)
], IntroContent2Component.prototype, "content2Album", void 0);
IntroContent2Component = __decorate([
    core_1.Component({
        selector: 'app-intro-content2',
        templateUrl: './intro-content2.component.html',
        styleUrls: ['./intro-content2.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        current_album_1.CurrentAlbum])
], IntroContent2Component);
exports.IntroContent2Component = IntroContent2Component;
//# sourceMappingURL=intro-content2.component.js.map