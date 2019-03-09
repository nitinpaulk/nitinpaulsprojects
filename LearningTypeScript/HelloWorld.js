"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SecondFile_1 = require("./SecondFile"); //This is how we import another file
var Hello = /** @class */ (function () {
    function Hello() {
        this.UserName = "";
        this.Addressobj = new SecondFile_1.Address();
    }
    Hello.prototype.Validate = function () {
        alert("Hello World");
    };
    Hello.prototype.ShowNumber = function (input) {
        alert("Hi you are number: " + input);
    };
    return Hello;
}());
//implementing inheritance using typescript
var AnotherClass = /** @class */ (function (_super) {
    __extends(AnotherClass, _super);
    function AnotherClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnotherClass.prototype.Validate = function () {
        alert("This is from the other class");
    };
    return AnotherClass;
}(Hello));
//# sourceMappingURL=HelloWorld.js.map