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
var Album_model_1 = require("../../model/Album.model");
var app_AlbumService_1 = require("../../app.AlbumService");
var current_album_1 = require("../current-album");
require("rxjs/add/operator/toPromise");
var AlbumItemComponent = (function () {
    // private albm : Album[];
    function AlbumItemComponent(currAlbumSer, albumService) {
        this.currAlbumSer = currAlbumSer;
        this.albumService = albumService;
        this.albumSelected = new core_1.EventEmitter();
    }
    AlbumItemComponent.prototype.ngOnInit = function () {
    };
    AlbumItemComponent.prototype.onSelected = function () {
        console.log("AlbumItemComponent -> onSelected(" + this.album._id + ")");
        this.albumSelected.emit(this.album);
        // console.log(`click()-> ${this.album._id}`);
        // this.currAlbumSer.change(this.album);
        // this.albumSelected.emit(this.album);
        // this.albumService.getAlbumById2(this.album._id)
        //   .then( (albm : Album[]) =>{
        //     if(albm){
        //       this.albm = albm;
        //       console.log(`${this.albm[0]}`);
        //       //console.log(`res -> ${albm}`);
        //       //this.album = albm[0];
        //       //console.log(`this.album._id -> ${this.album._id}`);
        //     } else {
        //       console.log('xx');
        //     }
        //       // console.log(`afterClick -> : ${res._id}`);
        //       // console.log(`afterClick -> : ${res[0]._id}`);
        //       // console.log(`afterClick -> : ${res._id[0]}`);
        //       // console.log(`afterClick -> : ${res[0]._id[0]}`);
        //       // this.album = res[0];
        //   });
    };
    return AlbumItemComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AlbumItemComponent.prototype, "albumSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Album_model_1.Album)
], AlbumItemComponent.prototype, "album", void 0);
AlbumItemComponent = __decorate([
    core_1.Component({
        selector: 'app-album-item',
        templateUrl: './album-item.component.html',
        styleUrls: ['./album-item.component.css']
    }),
    __metadata("design:paramtypes", [current_album_1.CurrentAlbum,
        app_AlbumService_1.AlbumService])
], AlbumItemComponent);
exports.AlbumItemComponent = AlbumItemComponent;
//# sourceMappingURL=album-item.component.js.map