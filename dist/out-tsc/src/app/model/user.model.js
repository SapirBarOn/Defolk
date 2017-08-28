"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    // constructor(
    // public _id:string,
    // public name:string,
    //     public password:string,
    //     public email:string,
    //     public env:[string],
    //     public instr:[string],
    //     public era:[string]) {}
    function User() {
    }
    User.prototype.setRythm = function (r) {
        this.rythm = r;
    };
    User.prototype.getRythm = function () {
        return this.rythm;
    };
    User.prototype.setId = function (v) {
        this._id = v;
    };
    User.prototype.getId = function () {
        return this._id;
    };
    User.prototype.setUserName = function (v) {
        this.userName = v;
    };
    User.prototype.getUserName = function () {
        return this.userName;
    };
    User.prototype.setPassword = function (v) {
        this.password = v;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.setEmail = function (v) {
        this.email = v;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setEnv = function (v) {
        this.env = v;
    };
    User.prototype.getEnv = function () {
        return this.env;
    };
    User.prototype.setInstr = function (v) {
        this.instr = v;
    };
    User.prototype.getInstr = function () {
        return this.instr;
    };
    User.prototype.setEra = function (v) {
        this.era = v;
    };
    User.prototype.getEra = function () {
        return this.era;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map