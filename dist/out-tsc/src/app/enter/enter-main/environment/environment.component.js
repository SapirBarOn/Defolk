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
var environment_model_1 = require("../../../model/environment.model");
var current_user_1 = require("../../../app-shared/current-user");
var circle_model_1 = require("../../../model/circle.model");
var EnvironmentComponent = (function () {
    function EnvironmentComponent(currentUserService) {
        this.currentUserService = currentUserService;
        this.buttonFlag = 0;
        this.environment = [
            new environment_model_1.Environment("../../../../assets/images/live1.png", "../../../../assets/images/live1.png", "../../../../assets/images/live.png", 475, 60, "Live", 0),
            new environment_model_1.Environment("../../../../assets/images/studio1.png", "../../../../assets/images/studio1.png", "../../../../assets/images/studio.png", 645, 60, "Studio", 1),
        ];
        this.circles = [
            new circle_model_1.Circle("../../../../assets/images/circle1.png", -423, -90),
            new circle_model_1.Circle("../../../../assets/images/circle1.png", -423, -40),
            new circle_model_1.Circle("../../../../assets/images/circle1.png", -423, 10),
            new circle_model_1.Circle("../../../../assets/images/circle1.png", -423, 60),
            new circle_model_1.Circle("../../../../assets/images/circle.png", -423, 110),
        ];
        this.currentUserService = currentUserService;
        this.user = this.currentUserService.getCurrentUser();
        console.log("EnvironmentComponent -> constructor() -> " + this.user.getEnv());
    }
    EnvironmentComponent.prototype.ngOnInit = function () {
        this.environments = new Array(2);
        this.user.setEnv(this.environments);
    };
    EnvironmentComponent.prototype.choose = function (environment) {
        console.log("choose(" + environment + ")");
        if (environment.ImgCurrent == environment.ImgSrcBefore) {
            environment.ImgCurrent = environment.ImgSrcAfter;
            this.user.getEnv()[environment.index] = environment.text;
            this.buttonFlag++;
        }
        else if (environment.ImgCurrent == environment.ImgSrcAfter) {
            this.user.getEnv()[environment.index] = null;
            environment.ImgCurrent = environment.ImgSrcBefore;
            this.buttonFlag--;
        }
        console.log("env array : " + this.environments);
        if (this.buttonFlag != 0)
            this.choosed = true;
        else
            this.choosed = false;
        console.log("envCheck -> " + this.environments);
        console.log("choosed -> " + this.choosed);
    };
    return EnvironmentComponent;
}());
EnvironmentComponent = __decorate([
    core_1.Component({
        selector: 'app-environment',
        templateUrl: './environment.component.html',
        styleUrls: ['./environment.component.css']
    }),
    __metadata("design:paramtypes", [current_user_1.CurrentUser])
], EnvironmentComponent);
exports.EnvironmentComponent = EnvironmentComponent;
//# sourceMappingURL=environment.component.js.map