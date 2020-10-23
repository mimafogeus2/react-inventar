import { makeInventar } from "inventar";

import React from "react";

var ReactInventar = function(_a) {
    var children = _a.children, config = _a.config, _b = _a.options, options = _b === void 0 ? {} : _b;
    var cssInventar = makeInventar(config, options).cssInventar;
    return React.createElement("div", {
        style: cssInventar
    }, children);
};

export { ReactInventar };
//# sourceMappingURL=index.esm.js.map
