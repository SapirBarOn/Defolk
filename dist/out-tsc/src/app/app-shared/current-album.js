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
var CurrentAlbum = (function () {
    function CurrentAlbum() {
        this.currentAlbum = new core_1.EventEmitter();
    }
    CurrentAlbum.prototype.change = function (album) {
        this.currentAlbum.emit(album);
        this.albums = album;
        console.log("CurrentAlbum ID(" + album[0]._id + ") change click");
    };
    CurrentAlbum.prototype.getValue = function () {
        console.log("CurrentAlbum-> getValue() -> " + this.albums[0]._id);
        // return this.currentAlbum;
        return this.albums;
    };
    return CurrentAlbum;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CurrentAlbum.prototype, "currentAlbum", void 0);
CurrentAlbum = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CurrentAlbum);
exports.CurrentAlbum = CurrentAlbum;
var CurrentSong = (function () {
    function CurrentSong() {
        this.CurrentSong = new core_1.EventEmitter();
    }
    CurrentSong.prototype.change = function (song) {
        this.CurrentSong.next(song);
        console.log("CurrentSong ID(" + song._id + ") change click");
    };
    CurrentSong.prototype.getValue = function () {
        return this.CurrentSong;
    };
    return CurrentSong;
}());
exports.CurrentSong = CurrentSong;
//# sourceMappingURL=current-album.js.map