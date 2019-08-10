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
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModelX.prototype.cost = function () {
        return 5000;
    };
    return ModelX;
}(Car));
var ModelY = /** @class */ (function (_super) {
    __extends(ModelY, _super);
    function ModelY() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModelY.prototype.cost = function () {
        return 6000;
    };
    return ModelY;
}(Car));
var AutoPilot = /** @class */ (function () {
    function AutoPilot(autoPilot1) {
        this.autoPilot1 = autoPilot1;
        this.autoPilot = autoPilot1;
    }
    AutoPilot.prototype.cost = function () {
        return this.autoPilot.cost() + 5000;
    };
    return AutoPilot;
}());
var SelfDriver = /** @class */ (function () {
    function SelfDriver(car) {
        this.car = car;
        this.selfDriver = car;
    }
    SelfDriver.prototype.cost = function () {
        return this.selfDriver.cost() + 9000;
    };
    return SelfDriver;
}());
var car1 = new ModelX();
var car2 = new ModelY();
var selfDriver = new SelfDriver(car1);
console.log(selfDriver.cost());
