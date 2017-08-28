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
var instrument_model_1 = require("../../../model/instrument.model");
var current_user_1 = require("../../../app-shared/current-user");
var circle_model_1 = require("../../../model/circle.model");
var InstrumentComponent = (function () {
    function InstrumentComponent(currentUserService) {
        this.currentUserService = currentUserService;
        this.buttonFlag = 0;
        this.circles = [
            new circle_model_1.Circle("../../../../assets/images/circle1.png", 45, -218),
            new circle_model_1.Circle("../../../../assets/images/circle1.png", 45, -168),
            new circle_model_1.Circle("../../../../assets/images/circle1.png", 45, -118),
            new circle_model_1.Circle("../../../../assets/images/circle.png", 45, -68),
            new circle_model_1.Circle("../../../../assets/images/circle.png", 45, -18),
        ];
        this.instrument = [
            new instrument_model_1.Instrument("../../../../assets/images/violin.png", "../../../../assets/images/violin.png", "../../../../assets/images/_violin.png", 230, -175, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "Violin", 0),
            new instrument_model_1.Instrument("../../../../assets/images/bouzouki.png", "../../../../assets/images/bouzouki.png", "../../../../assets/images/_bouzouki.png", 420, -70, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "bouzouki", 1),
            new instrument_model_1.Instrument("../../../../assets/images/drum.png", "../../../../assets/images/drum.png", "../../../../assets/images/_drum.png", 525, -255, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "drums", 2),
            new instrument_model_1.Instrument("../../../../assets/images/quena.png", "../../../../assets/images/quena.png", "../../../../assets/images/_quena.png", 600, -62, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "Quena", 3),
            new instrument_model_1.Instrument("../../../../assets/images/guitar.png", "../../../../assets/images/guitar.png", "../../../../assets/images/_guitar.png", 690, -230, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "Guitar", 4),
            new instrument_model_1.Instrument("../../../../assets/images/panflute.png", "../../../../assets/images/panflute.png", "../../../../assets/images/_panflute.png", 850, -55, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "panflute", 5),
            new instrument_model_1.Instrument("../../../../assets/images/piano.png", "../../../../assets/images/piano.png", "../../../../assets/images/_piano.png", 995, -175, "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotBefore.png", "../../../../assets/images/dotAfter.png", "piano", 6),
        ];
        this.currentUserService = currentUserService;
        this.user = this.currentUserService.getCurrentUser();
        console.log("InstrumentComponent -> constructor() -> " + this.user.getInstr());
    }
    InstrumentComponent.prototype.ngOnInit = function () {
        this.instruments = new Array(7);
        this.user.setInstr(this.instruments);
    };
    InstrumentComponent.prototype.choose = function (instrument) {
        console.log("choose(" + instrument + ")");
        if (instrument.ImgCurrent == instrument.ImgSrcBefore) {
            instrument.ImgCurrent = instrument.ImgSrcAfter;
            instrument.DotCurrent = instrument.DotAfter;
            this.user.getInstr()[instrument.index] = instrument.text;
            this.buttonFlag++;
        }
        else if (instrument.ImgCurrent == instrument.ImgSrcAfter) {
            this.user.getInstr()[instrument.index] = null;
            instrument.ImgCurrent = instrument.ImgSrcBefore;
            instrument.DotCurrent = instrument.DotBefore;
            this.buttonFlag--;
        }
        console.log("instrument array : " + this.instruments);
        if (this.buttonFlag != 0)
            this.choosed = true;
        else
            this.choosed = false;
        console.log("erasCheck -> " + this.instruments);
        console.log("choosed -> " + this.choosed);
    };
    return InstrumentComponent;
}());
InstrumentComponent = __decorate([
    core_1.Component({
        selector: 'app-instrument',
        templateUrl: './instrument.component.html',
        styleUrls: ['./instrument.component.css']
    }),
    __metadata("design:paramtypes", [current_user_1.CurrentUser])
], InstrumentComponent);
exports.InstrumentComponent = InstrumentComponent;
//# sourceMappingURL=instrument.component.js.map