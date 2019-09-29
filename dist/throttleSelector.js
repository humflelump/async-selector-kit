"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var throttleSelectorResults_1 = require("./throttleSelectorResults");
function throttleSelector(selector, throttleFunction, id) {
    return throttleSelectorResults_1.throttleSelectorResults(selector, throttleFunction, id)[0];
}
exports.throttleSelector = throttleSelector;
