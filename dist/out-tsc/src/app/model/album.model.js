"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Album = (function () {
    function Album(_id, albumImg, albumName, albumImgSub, djName, djImg, djUrl, followers, comment, genre, song, instr, era, env, rythm, likes, rate) {
        this._id = _id;
        this.albumImg = albumImg;
        this.albumName = albumName;
        this.albumImgSub = albumImgSub;
        this.djName = djName;
        this.djImg = djImg;
        this.djUrl = djUrl;
        this.followers = followers;
        this.comment = comment;
        this.genre = genre;
        this.song = song;
        this.instr = instr;
        this.era = era;
        this.env = env;
        this.rythm = rythm;
        this.likes = likes;
        this.rate = rate;
        console.log("Album constructor");
    }
    return Album;
}());
exports.Album = Album;
//# sourceMappingURL=album.model.js.map