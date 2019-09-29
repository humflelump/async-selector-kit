"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var createAsyncSelectorResults_1 = require("./createAsyncSelectorResults");
var reselect_1 = require("reselect");
function createAsyncSelectorWithCache(params, selectors) {
    if (selectors === void 0) { selectors = []; }
    var getCache = params.getCache;
    if (typeof getCache !== 'function') {
        throw new Error('getCache must be a function.');
    }
    var cache = reselect_1.createSelector(selectors, getCache);
    var selectorResults = createAsyncSelectorResults_1.createAsyncSelectorResults(__assign(__assign({}, params), { shouldUseAsync: function () {
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            if (params.shouldUseAsync) {
                return params.shouldUseAsync.apply(params, values) && !Boolean(values[selectors.length]);
            }
            else {
                return !Boolean(values[selectors.length]);
            }
        } }), __spreadArrays(selectors, [cache]));
    var getValue = reselect_1.createSelector([selectorResults[0], cache], function (asyncResult, cache) {
        if (cache) {
            return cache;
        }
        else {
            return asyncResult;
        }
    });
    selectorResults[0] = getValue;
    var getIsWaiting = reselect_1.createSelector([selectorResults[1], cache], function (isWaiting, cache) {
        if (cache) {
            return false;
        }
        else {
            return isWaiting;
        }
    });
    selectorResults[1] = getIsWaiting;
    return selectorResults;
}
exports.createAsyncSelectorWithCache = createAsyncSelectorWithCache;
