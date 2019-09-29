"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createThrottledSelectorResults_1 = require("./createThrottledSelectorResults");
function createThrottledSelector(selectors, func, throttleFunc, id) {
    return createThrottledSelectorResults_1.createThrottledSelectorResults(selectors, func, throttleFunc, id)[0];
}
exports.createThrottledSelector = createThrottledSelector;
