"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instrument = (function () {
    function Instrument(ImgCurrent, ImgSrcBefore, ImgSrcAfter, MarginLeft, MarginTop, DotCurrent, DotBefore, DotAfter, text, index) {
        this.ImgCurrent = ImgCurrent;
        this.ImgSrcBefore = ImgSrcBefore;
        this.ImgSrcAfter = ImgSrcAfter;
        this.MarginLeft = MarginLeft;
        this.MarginTop = MarginTop;
        this.DotCurrent = DotCurrent;
        this.DotBefore = DotBefore;
        this.DotAfter = DotAfter;
        this.text = text;
        this.index = index;
    }
    return Instrument;
}());
exports.Instrument = Instrument;
// export class Instrument {
//   public ImgCurrent: string;
//   public ImgSrcBefore: string;
//   public ImgSrcAfter:string;
//   public MarginLeft:number;
//   public MarginTop:number;
//   public X:string;
//   public DotBefore:string;
//   public DotAfter :string;
//   public text:string;
//   constructor(ImgCurrent: string, ImgSrcBefore: string, ImgSrcAfter: string, MarginLeft: number, MarginTop: number , X:string, DotBefore:string, DotAfter :string ,text :string) {
//     console.log("constructor " + ImgCurrent);
//     this.ImgCurrent = ImgCurrent;
//     this.ImgSrcBefore = ImgSrcBefore;
//     this.ImgSrcAfter = ImgSrcAfter;
//     this.MarginLeft = MarginLeft;
//     this.MarginTop = MarginTop;
//     this.X = X;
//     this.DotBefore = DotBefore;
//     this.DotAfter = DotAfter
//     this.text = text;
//   }
// } 
//# sourceMappingURL=instrument.model.js.map