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
var current_album_1 = require("../../app-shared/current-album");
var PlayerComponent = (function () {
    function PlayerComponent(currentAlbum) {
        this.currentAlbum = currentAlbum;
        this.albums = this.currentAlbum.getValue();
        console.log("PlayerComponent-> )\n  }\n\n  ngOnInit() {\n    this.currentAlbum\n  }\n\n\n  savePlayer(player) {\n      this.player = player;\n      // this.player.playVideo();\n  }\n\n  onStateChange(event) {\n    // event.id = this.song.youtubeId;    // another YOUTUBE ID\n\n  }\n\n}\n");
    }
    return PlayerComponent;
}());
PlayerComponent = __decorate([
    core_1.Component({
        selector: 'app-player',
        templateUrl: './player.component.html',
        styleUrls: ['./player.component.css']
    }),
    __metadata("design:paramtypes", [current_album_1.CurrentAlbum])
], PlayerComponent);
exports.PlayerComponent = PlayerComponent;
//# sourceMappingURL=player.component.js.map