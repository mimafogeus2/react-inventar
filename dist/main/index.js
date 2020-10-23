"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var inventar = require("inventar");

var React = require("react");

function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : {
        default: e
    };
}

var React__default = _interopDefaultLegacy(React);

var ReactInventar = function(_a) {
    var children = _a.children, config = _a.config, _b = _a.options, options = _b === void 0 ? {} : _b;
    var cssInventar = inventar.makeInventar(config, options).cssInventar;
    return React__default["default"].createElement("div", {
        style: cssInventar
    }, children);
};

exports.ReactInventar = ReactInventar;
//# sourceMappingURL=index.js.map
