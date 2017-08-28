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
var current_album_1 = require("../../../app-shared/current-album");
var IntroFavoriteComponent = (function () {
    function IntroFavoriteComponent(AlbumService, currentUserService, currentAlbums) {
        this.AlbumService = AlbumService;
        this.currentUserService = currentUserService;
        this.currentAlbums = currentAlbums;
        this.albumSelected = new core_1.EventEmitter();
        this.currentAlbums = currentAlbums;
        this.albums = this.currentAlbums.getValue();
        this.user = this.currentUserService.getCurrentUser();
        // // this.currentAlbums.getValue()
        // //   .subscribe(album=>{
        //     console.log(`IntroFavoriteComponent -> ngOnInit() -> ${this.albums} `);
        // //     this.albums = album;
        // //   });
        // console.log(`after getValue()`);
        // this.currentAlbums.getValue()
        //     .subscribe(album=>{
        //       console.log(`IntroFavoriteComponent -> constructor() -> ${album} `);
        //       this.albums = album;
        //     });
    }
    IntroFavoriteComponent.prototype.ngOnInit = function () {
        // this.user = this.currentUserService.getCurrentUser();
        // console.log(`IntroFavoriteComponent -> ngOnInit() -> this.user -> ${this.user.getUserName()}`);
        // this.AlbumService.getSignUpUser(this.user,result=>{
        //   console.log(`IntroFavoriteComponent -> ngOnInit() -> AFTER -> ${result}`);
        // });
        // console.log(`before getValue()`);
        // this.albums = this.currentAlbums.getValue();
        // // this.currentAlbums.getValue()
        // //   .subscribe(album=>{
        //     console.log(`IntroFavoriteComponent -> ngOnInit() -> ${this.albums} `);
        // //     this.albums = album;
        // //   });
        // console.log(`after getValue()`);
        //   this.AlbumService.getAlbums(result=>{
        //   this.albums=result;
        //   console.log(this.albums);
        // });
    };
    IntroFavoriteComponent.prototype.onAlbumClick = function (album) {
        console.log("IntroFavoriteComponent -> onAlbumClick(" + album._id + ")");
        this.albumSelected.emit(album);
    };
    return IntroFavoriteComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], IntroFavoriteComponent.prototype, "albumSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], IntroFavoriteComponent.prototype, "albums", void 0);
IntroFavoriteComponent = __decorate([
    core_1.Component({
        selector: 'app-intro-favorite',
        templateUrl: './intro-favorite.component.html',
        styleUrls: ['./intro-favorite.component.css']
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_AlbumService_1.AlbumService,
        current_user_1.CurrentUser,
        current_album_1.CurrentAlbum])
], IntroFavoriteComponent);
exports.IntroFavoriteComponent = IntroFavoriteComponent;
//# sourceMappingURL=intro-favorite.component.js.map