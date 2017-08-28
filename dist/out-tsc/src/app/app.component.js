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
var current_user_1 = require("./app-shared/current-user");
var user_model_1 = require("./model/user.model");
var AppComponent = (function () {
    function AppComponent(currentUser) {
        this.currentUser = currentUser;
        this.mainAvailable = this.currentUser.getCurrentUser();
        //this.mainAvailable = false;
        //this.mainAvailable = this.currentUser.getAvailable();
        //this.currentUser = currentUser;
        //this.mainUser = this.currentUser.getCurrentUser();
    }
    AppComponent.prototype.onNavSelected = function (valid) {
        //this.mainAvailable = valid;
    };
    AppComponent.prototype.onchange = function (user) {
        this.mainAvailable = user;
    };
    AppComponent.prototype.OnInit = function () {
        this.mainAvailable = this.currentUser.getCurrentUser();
    };
    return AppComponent;
}());
__decorate([
    core_1.Input(), core_1.Output(),
    __metadata("design:type", user_model_1.User)
], AppComponent.prototype, "mainAvailable", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [current_user_1.CurrentUser])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map