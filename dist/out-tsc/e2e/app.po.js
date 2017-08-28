"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var FolkPage = (function () {
    function FolkPage() {
    }
    FolkPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    FolkPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return FolkPage;
}());
exports.FolkPage = FolkPage;
//# sourceMappingURL=app.po.js.map