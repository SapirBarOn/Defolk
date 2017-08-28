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
var Era_model_1 = require("../../../model/Era.model");
var current_user_1 = require("../../../app-shared/current-user");
var circle_model_1 = require("../../../model/circle.model");
var EraComponent = (function () {
    function EraComponent(currentUserService) {
        this.currentUserService = currentUserService;
        this.buttonFlag = 0;
        this.circles = [
            new circle_model_1.Circle("../../../../assets/images/circle1.png", 45, -255),
            new circle_model_1.Circle("../../../../assets/images/circle1.png", 45, -205),
            new circle_model_1.Circle("../../../../assets/images/circle.png", 45, -155),
            new circle_model_1.Circle("../../../../assets/images/circle.png", 45, -105),
            new circle_model_1.Circle("../../../../assets/images/circle.png", 45, -55),
        ];
        this.era = [
            new Era_model_1.Era("../../../../assets/images/2017.png", "../../../../assets/images/2017.png", "../../../../assets/images/_2017.png", 251, -95, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "2017", 0),
            new Era_model_1.Era("../../../../assets/images/2010.png", "../../../../assets/images/2010.png", "../../../../assets/images/_2010.png", 345, -95, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "2010", 1),
            new Era_model_1.Era("../../../../assets/images/2000.png", "../../../../assets/images/2000.png", "../../../../assets/images/_2000.png", 445, -95, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "2000", 2),
            new Era_model_1.Era("../../../../assets/images/90's.png", "../../../../assets/images/90's.png", "../../../../assets/images/_90.png", 545, -95, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "90's", 3),
            new Era_model_1.Era("../../../../assets/images/80's.png", "../../../../assets/images/80's.png", "../../../../assets/images/_80.png", 645, -95, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "80's", 4),
            new Era_model_1.Era("../../../../assets/images/70's.png", "../../../../assets/images/70's.png", "../../../../assets/images/_70.png", 745, -95, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "70's", 5),
            new Era_model_1.Era("../../../../assets/images/60's.png", "../../../../assets/images/60's.png", "../../../../assets/images/_60.png", 845, -95, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "60's", 6),
            new Era_model_1.Era("../../../../assets/images/50's.png", "../../../../assets/images/50's.png", "../../../../assets/images/_50.png", 942, -95, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "50's", 7),
        ];
        // console.log(`EraComponent -> constructor()`);
        this.user = this.currentUserService.getCurrentUser();
        //currentUserService.change(this.newUser);
    }
    EraComponent.prototype.ngOnInit = function () {
        // console.log(`EraComponent -> ngOnInit()`);
        this.eras = new Array(8);
        this.user.setEra(this.eras);
        // this.eras[0]="temp";
    };
    EraComponent.prototype.choose = function (era) {
        console.log("choose(" + era + ")");
        if (era.ImgCurrent == era.ImgSrcBefore) {
            era.ImgCurrent = era.ImgSrcAfter;
            era.DotCurrent = era.DotAfter;
            this.user.getEra()[era.index] = era.text;
            this.buttonFlag++;
        }
        else if (era.ImgCurrent == era.ImgSrcAfter) {
            this.user.getEra()[era.index] = null;
            era.ImgCurrent = era.ImgSrcBefore;
            era.DotCurrent = era.DotBefore;
            this.buttonFlag--;
        }
        console.log("eras array : " + this.eras);
        if (this.buttonFlag != 0)
            this.choosed = true;
        else
            this.choosed = false;
        console.log("erasCheck -> " + this.eras);
        console.log("choosed -> " + this.choosed);
    };
    return EraComponent;
}());
EraComponent = __decorate([
    core_1.Component({
        selector: 'app-era',
        templateUrl: './era.component.html',
        styleUrls: ['./era.component.css']
    }),
    __metadata("design:paramtypes", [current_user_1.CurrentUser])
], EraComponent);
exports.EraComponent = EraComponent;
//# sourceMappingURL=era.component.js.map