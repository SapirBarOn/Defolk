"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Song = (function () {
    function Song(_id, songName, singerName, name, time, likes, songImg, youtubeID, currentButton) {
        this._id = _id;
        console.log("constructor " + singerName);
        this.songName = songName;
        this.singerName = singerName;
        this.name = name;
        this.time = time;
        this.likes = likes;
        this.songImg = songImg;
        this.youtubeID = youtubeID;
        this.currentButton = currentButton;
    }
    return Song;
}());
exports.Song = Song;
//# sourceMappingURL=Song.model.js.map