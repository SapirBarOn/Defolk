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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/Rx");
var AlbumService = (function () {
    function AlbumService(http) {
        this.http = http;
        this.albums = [];
        this.popular = [];
        this.userAlbum = [];
        this.url = "http://localhost:3000";
        // this.url  ="http://localhost:3000";
    }
    AlbumService.prototype.getAlbumById2 = function (id) {
        console.log("getAlbumById2(" + id + ")");
        var body = { albumId: id };
        return this.http.post('http://localhost:3000/getAlbumById2', { albumId: id })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) { return err.json(); });
    };
    AlbumService.prototype.getAlbumById = function (id, callback) {
        var _this = this;
        console.log("getAlbumById(" + id + ")");
        var body = { 'albumId': id };
        this.http.post('http://localhost:3000/getAlbumById', body)
            .subscribe(function (res) {
            console.log("getAlbumById - res : " + res);
            _this.albumById = res.json();
            callback(res.json());
            console.log(_this.albumById);
        }, (function (error) {
            console.log(error);
            console.log("getAlbumById - error : " + error);
            callback(null);
        }));
    };
    AlbumService.prototype.getSignUpUser = function (user, callback) {
        console.log("getSignUpUser() ->user " + user.getRythm());
        var body = { 'email': user.getEmail(),
            'userName': user.getUserName(),
            'password': user.getPassword(),
            'era': [user.getEra()],
            'instr': [user.getInstr()],
            'env': [user.getEnv()],
            'rythm': user.getRythm() };
        this.http.post('http://localhost:3000/signUpUser', body)
            .subscribe(function (res) {
            console.log("getSignUpUser(good) -> " + res);
            callback(res.json());
        }, function (error) {
            console.log("getSignUpUser(bad) -> " + error);
            console.log(error);
            callback(null);
        });
    };
    AlbumService.prototype.getAlbums = function (callback) {
        this.http.get("http://localhost:3000/getAllAlbums")
            .subscribe(function (res) {
            console.log("getAlbums-> " + res.json);
            callback(res.json());
        }
        // ,
        // (error =>{
        //     console.log(error);
        //     callback(null);
        // })
        );
    };
    AlbumService.prototype.getPopularAlbums = function (callback) {
        var _this = this;
        this.http.get('http://localhost:3000/getPopularAlbums')
            .subscribe(function (res) {
            callback(res.json());
            console.log(_this.albums);
        }, (function (error) {
            console.log(error);
            callback(null);
        }));
    };
    AlbumService.prototype.getUserAlbums = function (callback) {
        var _this = this;
        this.http.get('http://localhost:3000/getUserAlbums')
            .subscribe(function (res) {
            callback(res.json());
            console.log(_this.userAlbum);
        }, (function (error) {
            console.log(error);
            callback(null);
        }));
    };
    return AlbumService;
}());
AlbumService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=app.AlbumService.js.map