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
var app_SongService_1 = require("../../../../app.SongService");
var IntroSongsComponent = (function () {
    function IntroSongsComponent(SongService) {
        this.SongService = SongService;
        this.songs = [];
        this.songSelected = new core_1.EventEmitter();
        // @Input() song : Song;
        this.play = false;
        this.isPlayed = false;
    }
    IntroSongsComponent.prototype.ngOnInit = function () {
        // this.id = this.songs[0].youtubeID;
        // this.isPlayed =true;
    };
    IntroSongsComponent.prototype.onPlayClick = function (song) {
        console.log("IntroSongsComponent -> onSongClick(" + song._id + ")");
        // this.songSelected.emit(song);
        this.isPlayed = true;
        this.player.loadVideoById(song.youtubeID);
    };
    IntroSongsComponent.prototype.onPuseClick = function (song) {
        this.isPlayed = false;
        this.player.pauseVideo();
    };
    IntroSongsComponent.prototype.savePlayer = function (player) {
        this.player = player;
        this.player.playVideo();
        console.log('player instance', player);
    };
    IntroSongsComponent.prototype.onStateChange = function (event) {
        console.log('onStateChange->player state', event.data);
        // event.id = this.songs[1].youtubeID;
    };
    return IntroSongsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], IntroSongsComponent.prototype, "songs", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], IntroSongsComponent.prototype, "songSelected", void 0);
IntroSongsComponent = __decorate([
    core_1.Component({
        selector: 'app-intro-songs',
        templateUrl: './intro-songs.component.html',
        styleUrls: ['./intro-songs.component.css']
    }),
    __metadata("design:paramtypes", [app_SongService_1.SongService])
], IntroSongsComponent);
exports.IntroSongsComponent = IntroSongsComponent;
//# sourceMappingURL=intro-songs.component.js.map