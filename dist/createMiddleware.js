"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useDispatch_1 = require("./useDispatch");
var stateListeners = [];
var actionListeners = [];
function addNewStateListener(listener) {
    stateListeners.push(listener);
}
exports.addNewStateListener = addNewStateListener;
function addNewActionListener(listener) {
    actionListeners.push(listener);
}
exports.addNewActionListener = addNewActionListener;
function createMiddleware() {
    var logger = function (store) { return function (next) { return function (action) {
        useDispatch_1.useStore(store);
        var result = next(action);
        var nextState = store.getState();
        actionListeners.forEach(function (f) { return f(action, store); });
        setTimeout(function () {
            stateListeners.forEach(function (f) { return f(nextState); });
        });
        return result;
    }; }; };
    return logger;
}
exports.createMiddleware = createMiddleware;
