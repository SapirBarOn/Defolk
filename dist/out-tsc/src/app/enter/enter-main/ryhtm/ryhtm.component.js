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
var current_album_1 = require("../../../app-shared/current-album");
var app_UserService_1 = require("../../../app.UserService");
var app_AlbumService_1 = require("../../../app.AlbumService");
var app_component_1 = require("../../../app.component");
var router_1 = require("@angular/router");
var circle_model_1 = require("../../../model/circle.model");
var RyhtmComponent = (function () {
    function RyhtmComponent(currentUserService, httpUserService, AlbumService, currentAlbums, router, appComponent) {
        this.currentUserService = currentUserService;
        this.httpUserService = httpUserService;
        this.AlbumService = AlbumService;
        this.currentAlbums = currentAlbums;
        this.router = router;
        this.appComponent = appComponent;
        this.userValid = new core_1.EventEmitter();
        this.circles = [
            new circle_model_1.Circle("../../../../assets/images/circle1.png", -417, -210),
            new circle_model_1.Circle("../../../../assets/images/circle1.png", -417, -160),
            new circle_model_1.Circle("../../../../assets/images/circle1.png", -417, -110),
            new circle_model_1.Circle("../../../../assets/images/circle1.png", -417, -60),
            new circle_model_1.Circle("../../../../assets/images/circle1.png", -417, -10),
        ];
        this.httpUserService = httpUserService;
        this.currentUserService = currentUserService;
        this.user = this.currentUserService.getCurrentUser();
    }
    RyhtmComponent.prototype.ngOnInit = function () {
    };
    RyhtmComponent.prototype.click = function () {
        var _this = this;
        this.user.setRythm(this.rangeInputRef.nativeElement.value);
        this.currentUserService.change(this.user);
        this.currentUserService.available();
        this.user = this.currentUserService.getCurrentUser();
        this.userValid.emit(true);
        this.AlbumService.getSignUpUser(this.user, function (result) {
            console.log("RyhtmComponent -> click() -> AFTER -> " + result);
            _this.appComponent.onchange(_this.user);
            _this.currentAlbums.change(result);
            _this.router.navigateByUrl('/main');
        });
        // console.log(`RyhtmComponent -> ${this.user.getUserName()}`);
        // console.log(`RyhtmComponent -> ${this.user.getEmail()}`);
        // console.log(`RyhtmComponent -> ${this.user.getPassword()}`);
        // console.log(`RyhtmComponent -> ${this.user.getEra()}`);
        // console.log(`RyhtmComponent -> ${this.user.getEnv()}`);
        // console.log(`RyhtmComponent -> ${this.user.getInstr()}`);
        // console.log(`RyhtmComponent -> ${this.user.getRythm()}`);      
    };
    return RyhtmComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RyhtmComponent.prototype, "userValid", void 0);
__decorate([
    core_1.ViewChild('rangeInput'),
    __metadata("design:type", core_1.ElementRef)
], RyhtmComponent.prototype, "rangeInputRef", void 0);
RyhtmComponent = __decorate([
    core_1.Component({
        selector: 'app-ryhtm',
        templateUrl: './ryhtm.component.html',
        styleUrls: ['./ryhtm.component.css']
    }),
    __metadata("design:paramtypes", [current_user_1.CurrentUser,
        app_UserService_1.UserService,
        app_AlbumService_1.AlbumService,
        current_album_1.CurrentAlbum,
        router_1.Router,
        app_component_1.AppComponent])
], RyhtmComponent);
exports.RyhtmComponent = RyhtmComponent;
//# sourceMappingURL=ryhtm.component.js.map