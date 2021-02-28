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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var async_selector_1 = __importDefault(require("async-selector"));
var reselect_1 = require("reselect");
var getDispatcher_1 = require("./getDispatcher");
var actions_1 = require("./actions");
var createdCount = 0;
function validate(params, selectors) {
    if (!params || typeof params.async !== "function") {
        throw Error("No async function was passed in.");
    }
    if (!Array.isArray(selectors)) {
        throw Error("Selectors must be an array. Instead got " + typeof selectors + ".");
    }
    for (var i = 0; i < selectors.length; i++) {
        if (typeof selectors[i] !== "function") {
            throw Error("All selectors must be functions. Instead got " + selectors
                .map(function (f) { return typeof f; })
                .join(", "));
        }
    }
}
function createAsyncSelectorResults(params, selectors) {
    if (selectors === void 0) { selectors = []; }
    var id = params.id || "ASYNC_SELECTOR_" + ++createdCount;
    validate(params, selectors);
    var activePromise = null;
    var activeSelectorState = null;
    var asyncSelector = async_selector_1.default(__assign(__assign({}, params), { onResolve: function (_a) {
            var result = _a.result, took = _a.took;
            getDispatcher_1.getDispatcher()(actions_1.promiseResolved(result, took, id));
            params.onResolve && params.onResolve(result);
        }, onReject: function (error) {
            getDispatcher_1.getDispatcher()(actions_1.promiseRejected(error, id));
            params.onReject && params.onReject(error);
        }, onCancel: function (cancelledPromise) {
            if (cancelledPromise === activePromise && activeSelectorState) {
                activeSelectorState.cancelled = true;
                activeSelectorState.onCancel();
            }
            params.onCancel && params.onCancel(cancelledPromise);
        }, async: function () {
            var vals = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                vals[_i] = arguments[_i];
            }
            var promise = new Promise(function (resolve, reject) {
                var t = Date.now();
                var selectorState = {
                    onCancel: function () { return null; },
                    cancelled: false,
                };
                activeSelectorState = selectorState;
                params.async.apply(params, __spreadArrays(vals, [selectorState])).then(function (result) {
                    var took = Date.now() - t;
                    resolve({ result: result, took: took });
                })
                    .catch(reject);
            });
            activePromise = promise;
            return promise;
        }, id: id }), selectors);
    var error = function (state) {
        var d = state
            ? asyncSelector(state)
            : asyncSelector.getResult();
        return (d && d.isRejected) ? d.value : null;
    };
    var isWaiting = function (state) {
        var d = state
            ? asyncSelector(state)
            : asyncSelector.getResult();
        return Boolean(d && d.isWaiting);
    };
    var results = reselect_1.createSelector([asyncSelector], function (d) {
        if (d.previous === undefined) {
            if (params.defaultValue === undefined) {
                return [];
            }
            else {
                return params.defaultValue;
            }
        }
        else {
            return d.previous.result;
        }
    });
    var forceUpdate = function (state, props) {
        asyncSelector.forceUpdate(state, props);
        return new Promise(function (resolve, reject) {
            activePromise.then(function (d) { return resolve(d.result); }).catch(reject);
        });
    };
    return [results, isWaiting, error, forceUpdate];
}
exports.createAsyncSelectorResults = createAsyncSelectorResults;
