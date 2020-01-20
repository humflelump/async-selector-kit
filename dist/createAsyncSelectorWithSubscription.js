"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var createAsyncSelectorResults_1 = require("./createAsyncSelectorResults");
function hasChanged(oldValues, newValues) {
    if (oldValues === null)
        return true;
    if (oldValues.length !== newValues.length)
        return true;
    for (var i = 0; i < oldValues.length; i++) {
        if (newValues[i] !== oldValues[i]) {
            return true;
        }
    }
    return false;
}
function notifyNewState(state) {
    newStateCallbacks.forEach(function (f) { return f(state); });
}
exports.notifyNewState = notifyNewState;
var newStateCallbacks = [];
function createAsyncSelectorWithSubscription(params, selectors) {
    if (typeof params.onUnsubscribe !== "function") {
        throw new Error("onUnsubscribe must be a function");
    }
    var isSubscribed = false;
    var lastStatePassedIn = null;
    var newState = function (state) {
        if (state !== lastStatePassedIn) {
            if (isSubscribed) {
                params.onUnsubscribe(state);
            }
            isSubscribed = false;
        }
    };
    newStateCallbacks.push(newState);
    var results = createAsyncSelectorResults_1.createAsyncSelectorResults(params, selectors);
    var prevInputs = null;
    var getValues = function (state) {
        var other = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            other[_i - 1] = arguments[_i];
        }
        var inputs = selectors.map(function (f) { return f.apply(void 0, __spreadArrays([state], other)); });
        if (hasChanged(prevInputs, inputs)) {
            params.inputsChanged && params.inputsChanged(inputs);
        }
        lastStatePassedIn = state;
        if (!isSubscribed) {
            isSubscribed = true;
            params.onSubscribe && params.onSubscribe(state);
        }
        return results[0].apply(results, __spreadArrays([state], other));
    };
    results[0] = getValues;
    return results;
}
exports.createAsyncSelectorWithSubscription = createAsyncSelectorWithSubscription;
