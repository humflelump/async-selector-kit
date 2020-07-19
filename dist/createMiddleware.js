"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useDispatch_1 = require("./useDispatch");
var listeners = [];
function addNewStateListener(listener) {
    listeners.push(listener);
}
exports.addNewStateListener = addNewStateListener;
function createMiddleware() {
    var logger = function (store) { return function (next) { return function (action) {
        useDispatch_1.useStore(store);
        var result = next(action);
        var nextState = store.getState();
        setTimeout(function () {
            listeners.forEach(function (f) { return f(nextState); });
        });
        return result;
    }; }; };
    return logger;
}
exports.createMiddleware = createMiddleware;
