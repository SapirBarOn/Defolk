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
var app_UserService_1 = require("../../../app.UserService");
var router_1 = require("@angular/router");
var current_album_1 = require("../../../app-shared/current-album");
var app_component_1 = require("../../../app.component");
var LoginComponent = (function () {
    function LoginComponent(UserService, currentUserService, router, currentAlbums, appComponent) {
        this.UserService = UserService;
        this.currentUserService = currentUserService;
        this.router = router;
        this.currentAlbums = currentAlbums;
        this.appComponent = appComponent;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.findUser = function () {
        var _this = this;
        this.UserService.loginUser(this.usrnameInputRef.nativeElement.value, this.passInputRef.nativeElement.value, function (result) {
            if (!isNaN(result)) {
                var code = result;
                if (code == 405) {
                    _this.response = "wrong password";
                }
                else if (code == 500) {
                    _this.response = "user not exists";
                }
                else {
                    _this.response = "another issue";
                }
            }
            else {
                console.log("loginUser -> " + result);
                // this.user = result;
                // this.currentUserService.change(this.user);
                var user = new user_model_1.User();
                user.setUserName(_this.usrnameInputRef.nativeElement.value);
                user.setPassword(_this.passInputRef.nativeElement.value);
                _this.appComponent.onchange(user);
                _this.currentAlbums.change(result);
                _this.currentUserService.change(user);
                _this.router.navigateByUrl('/main');
            }
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('usrname'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "usrnameInputRef", void 0);
__decorate([
    core_1.ViewChild('pass'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "passInputRef", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [app_UserService_1.UserService,
        current_user_1.CurrentUser,
        router_1.Router,
        current_album_1.CurrentAlbum,
        app_component_1.AppComponent])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map