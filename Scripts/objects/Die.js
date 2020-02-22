"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Die = /** @class */ (function (_super) {
        __extends(Die, _super);
        // CONSTRUCTOR
        function Die() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("blank"), 0, 0, true) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Die.prototype, "numberOfSides", {
            // PUBLIC PROPERTIES
            get: function () {
                return this._numberOfSides;
            },
            set: function (newNumberOfSides) {
                this._numberOfSides = newNumberOfSides;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Die.prototype, "faceValue", {
            get: function () {
                return this._faceValue;
            },
            set: function (newFaceValue) {
                this._faceValue = newFaceValue;
                this._changeFace();
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        Die.prototype._checkBounds = function () {
        };
        Die.prototype._changeFace = function () {
            this.image = config.Game.ASSETS.getResult(this.faceValue);
        };
        // PUBLIC METHODS
        Die.prototype.Start = function () {
        };
        Die.prototype.Update = function () {
        };
        Die.prototype.Reset = function () {
        };
        return Die;
    }(objects.GameObject));
    objects.Die = Die;
})(objects || (objects = {}));
//# sourceMappingURL=Die.js.map