"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createAsyncSelectorResults_1 = require("./createAsyncSelectorResults");
var reselect_1 = require("reselect");
var createdCount = 0;
function throttleSelectorResults(selector, throttleFunction, id) {
    id = id || 'THROTTLE_SELECTOR_' + (++createdCount);
    var DEFAULT_VALUE = {};
    var _a = createAsyncSelectorResults_1.createAsyncSelectorResults({
        async: function (val) { return Promise.resolve(val); },
        throttle: throttleFunction,
        defaultValue: DEFAULT_VALUE,
        id: id
    }, [selector]), getValue = _a[0], waiting = _a[1];
    var prev = DEFAULT_VALUE;
    var value = reselect_1.createSelector([getValue, selector], function (a, b) {
        if (a === DEFAULT_VALUE) {
            if (prev !== DEFAULT_VALUE)
                return prev;
            prev = b;
            return b;
        }
        else {
            return a;
        }
    });
    return [value, waiting];
}
exports.throttleSelectorResults = throttleSelectorResults;
