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
var CurrentUser = (function () {
    function CurrentUser() {
        this.availableVar = false;
    }
    CurrentUser.prototype.change = function (user) {
        // console.log(`change(${user.getId()})`);
        // this.currentUser.next(user);
        this.currentUser = user;
        // console.log(`change(${this.currentUser.getId()})`);
    };
    CurrentUser.prototype.available = function () {
        this.availableVar = true;
    };
    CurrentUser.prototype.getAvailable = function () {
        return this.availableVar;
    };
    CurrentUser.prototype.setEra = function (eras) {
    };
    CurrentUser.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    return CurrentUser;
}());
CurrentUser = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CurrentUser);
exports.CurrentUser = CurrentUser;
//# sourceMappingURL=current-user.js.map