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
var app_CommentService_1 = require("../app.CommentService");
var CommentsComponent = (function () {
    function CommentsComponent(CommentService) {
        this.CommentService = CommentService;
        this.comments = [];
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CommentService.getComments(function (c) {
            _this.comments = c;
            console.log(_this.comments);
        });
    };
    return CommentsComponent;
}());
CommentsComponent = __decorate([
    core_1.Component({
        selector: 'app-comments',
        templateUrl: './comments.component.html',
        styleUrls: ['./comments.component.css']
    }),
    __metadata("design:paramtypes", [app_CommentService_1.CommentService])
], CommentsComponent);
exports.CommentsComponent = CommentsComponent;
//# sourceMappingURL=comments.component.js.map