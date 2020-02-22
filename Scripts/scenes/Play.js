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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this._dieOne = new objects.Die(100, 40, false);
            this._labelOne = new objects.Label("1", "30px", "Consolas", "#000000", 200, 270, true);
            this._dieTwo = new objects.Die(350, 40, false);
            this._labelTwo = new objects.Label("2", "30px", "Consolas", "#000000", 450, 270, true);
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 250, 350, false);
            this.Main();
        };
        Play.prototype.Update = function () {
            this._dieOne.Update();
            this._dieTwo.Update();
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._dieOne);
            this.addChild(this._labelOne);
            this.addChild(this._dieTwo);
            this.addChild(this._labelTwo);
            this.addChild(this._rollButton);
            this._rollButton.on("click", function () {
                _this._dieOne.Roll();
                _this._dieTwo.Roll();
                _this._labelOne.text = _this._dieOne.faceValue.toString();
                _this._labelTwo.text = _this._dieTwo.faceValue.toString();
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map