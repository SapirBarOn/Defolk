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
var current_user_1 = require("./app-shared/current-user");
require("rxjs/add/operator/toPromise");
var UserService = (function () {
    function UserService(http, currentUserService) {
        this.http = http;
        this.currentUserService = currentUserService;
        this.currentUserService = currentUserService;
        this.user = this.currentUserService.getCurrentUser();
    }
    // signUpUser(){
    //   console.log()
    //   this.user = this.currentUserService.getCurrentUser();
    //   console.log(this.user);
    // }
    UserService.prototype.loginUser = function (user, pass, callback) {
        console.log("loginUser() ->user " + user);
        this.http.post('http://localhost:3000/login', { 'userName': user, 'password': pass })
            .subscribe(function (res) {
            //console.log(`res.status ->`+res.status);
            console.log("loginUser(good) -> " + res);
            callback(res.json());
        }, function (error) {
            var code = error.status;
            console.log("loginUser(bad) -> " + error.status);
            callback(code);
            // if(code==405){
            //   alert("wrong password");
            // } else if (code==500) {
            //   alert("user not exists");
            // } else {
            //   alert("another issue");
            // }
        });
    };
    UserService.prototype.checkStatusCode = function (res) {
        console.log("res.status ->" + res.status);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        current_user_1.CurrentUser])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=app.UserService.js.map