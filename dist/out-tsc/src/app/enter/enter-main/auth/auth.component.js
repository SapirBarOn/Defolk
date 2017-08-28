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
var current_user_1 = require("../../../app-shared/current-user");
var user_model_1 = require("../../../model/user.model");
var circle_model_1 = require("../../../model/circle.model");
var AuthComponent = (function () {
    function AuthComponent(currentUserService) {
        this.currentUserService = currentUserService;
        this.id = "rGIAQm-ixAQ";
        this.circles = [
            new circle_model_1.Circle("../../../../assets/images/circle1.png", 45, -240),
            new circle_model_1.Circle("../../../../assets/images/circle.png", 45, -190),
            new circle_model_1.Circle("../../../../assets/images/circle.png", 45, -140),
            new circle_model_1.Circle("../../../../assets/images/circle.png", 45, -90),
            new circle_model_1.Circle("../../../../assets/images/circle.png", 45, -40),
        ];
        this.currentUserService = currentUserService;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.createNewUser = function () {
        this.user = new user_model_1.User();
        this.user.setUserName(this.usrnameInputRef.nativeElement.value);
        this.user.setPassword(this.passInputRef.nativeElement.value);
        this.user.setEmail(this.emailInputRef.nativeElement.value);
        this.currentUserService.change(this.user);
    };
    AuthComponent.prototype.onPuseClick = function () {
        // this.isPlayed = false;
        this.player.mute;
        console.log('AuthComponent-> onPuseClick()');
    };
    return AuthComponent;
}());
__decorate([
    core_1.ViewChild('usrname'),
    __metadata("design:type", core_1.ElementRef)
], AuthComponent.prototype, "usrnameInputRef", void 0);
__decorate([
    core_1.ViewChild('pass'),
    __metadata("design:type", core_1.ElementRef)
], AuthComponent.prototype, "passInputRef", void 0);
__decorate([
    core_1.ViewChild('email'),
    __metadata("design:type", core_1.ElementRef)
], AuthComponent.prototype, "emailInputRef", void 0);
AuthComponent = __decorate([
    core_1.Component({
        selector: 'app-auth',
        templateUrl: './auth.component.html',
        styleUrls: ['./auth.component.css']
    }),
    __metadata("design:paramtypes", [current_user_1.CurrentUser])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map