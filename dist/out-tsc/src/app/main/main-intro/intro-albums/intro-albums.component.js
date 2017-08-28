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
var current_user_1 = require("../../../app-shared/current-user");
var IntroAlbumsComponent = (function () {
    function IntroAlbumsComponent(AlbumService, currentUserService) {
        this.AlbumService = AlbumService;
        this.currentUserService = currentUserService;
        this.userAlbums = [];
        this.currentUserService = currentUserService;
    }
    IntroAlbumsComponent.prototype.ngOnInit = function () {
        // this.user = this.currentUserService.getCurrentUser();
        // this.AlbumService.getSignUpUser(this.user,result=>{
        //   this.userAlbums = result;
        //   console.log(`IntroAlbumsComponent ->ngOnInit() -> ${this.userAlbums}`);
        // });
        var _this = this;
        this.AlbumService.getUserAlbums(function (result) {
            _this.userAlbums = result;
            console.log(_this.userAlbums);
        });
    };
    return IntroAlbumsComponent;
}());
IntroAlbumsComponent = __decorate([
    core_1.Component({
        selector: 'app-intro-albums',
        templateUrl: './intro-albums.component.html',
        styleUrls: ['./intro-albums.component.css']
    }),
    __metadata("design:paramtypes", [app_AlbumService_1.AlbumService,
        current_user_1.CurrentUser])
], IntroAlbumsComponent);
exports.IntroAlbumsComponent = IntroAlbumsComponent;
//# sourceMappingURL=intro-albums.component.js.map