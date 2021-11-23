"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var canvas_confetti_1 = __importDefault(require("canvas-confetti"));
var react_1 = __importDefault(require("react"));
var ReactCanvasConfetti = (function (_super) {
    __extends(ReactCanvasConfetti, _super);
    function ReactCanvasConfetti(props) {
        var _this = _super.call(this, props) || this;
        _this.refCanvas = react_1.default.createRef();
        _this.confetti = null;
        return _this;
    }
    ReactCanvasConfetti.prototype.componentDidMount = function () {
        if (!this.refCanvas.current) {
            return;
        }
        var _a = this.props, resize = _a.resize, useWorker = _a.useWorker;
        var globalOptions = {
            resize: typeof resize === 'undefined' ? true : resize,
            useWorker: typeof useWorker === 'undefined' ? true : useWorker,
        };
        this.confetti = canvas_confetti_1.default.create(this.refCanvas.current, globalOptions);
        this.setRefConfetti();
    };
    ReactCanvasConfetti.prototype.componentDidUpdate = function (prevProps) {
        var _a = this.props, fire = _a.fire, reset = _a.reset;
        var isFireTrue = !!fire;
        var isFireChanged = fire !== prevProps.fire;
        if (isFireTrue && isFireChanged) {
            this.fireConfetti();
        }
        var isResetTrue = !!reset;
        var isResetChanged = reset !== prevProps.reset;
        if (isResetTrue && isResetChanged) {
            this.resetConfetti();
        }
    };
    ReactCanvasConfetti.prototype.componentWillUnmount = function () {
        this.unsetRefConfetti();
    };
    ReactCanvasConfetti.prototype.setRefConfetti = function () {
        var refConfetti = this.props.refConfetti;
        refConfetti && refConfetti(this.confetti);
    };
    ReactCanvasConfetti.prototype.unsetRefConfetti = function () {
        var refConfetti = this.props.refConfetti;
        refConfetti && refConfetti(null);
    };
    ReactCanvasConfetti.prototype.fireConfetti = function () {
        if (!this.confetti) {
            return;
        }
        var _a = this.props, onFire = _a.onFire, onDecay = _a.onDecay, onReset = _a.onReset, className = _a.className, style = _a.style, width = _a.width, height = _a.height, refConfetti = _a.refConfetti, fire = _a.fire, reset = _a.reset, confettiProps = __rest(_a, ["onFire", "onDecay", "onReset", "className", "style", "width", "height", "refConfetti", "fire", "reset"]);
        onFire && onFire();
        var promise = this.confetti(confettiProps);
        promise && promise.then(function () {
            onDecay && onDecay();
        });
    };
    ReactCanvasConfetti.prototype.resetConfetti = function () {
        if (!this.confetti) {
            return;
        }
        this.confetti.reset();
        var onReset = this.props.onReset;
        onReset && onReset();
    };
    ReactCanvasConfetti.prototype.render = function () {
        var _a = this.props, style = _a.style, className = _a.className, width = _a.width, height = _a.height;
        return react_1.default.createElement("canvas", { ref: this.refCanvas, style: style, className: className, width: width, height: height });
    };
    return ReactCanvasConfetti;
}(react_1.default.Component));
exports.default = ReactCanvasConfetti;
//# sourceMappingURL=index.js.map