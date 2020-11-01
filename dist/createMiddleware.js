"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDispatcher_1 = require("./getDispatcher");
var actionListeners = [];
function addNewActionListener(listenerFunc, id) {
    var listener = {
        id: id,
        func: listenerFunc
    };
    var index = actionListeners.findIndex(function (d) { return d.id === id; });
    if (index >= 0) {
        actionListeners.splice(index, 1);
    }
    actionListeners.push(listener);
}
exports.addNewActionListener = addNewActionListener;
function createMiddleware() {
    var middleware = function (store) {
        getDispatcher_1.referenceStore(store);
        return function (next) { return function (action) {
            var result = next(action);
            actionListeners.forEach(function (d) { return d.func(action, store); });
            return result;
        }; };
    };
    return middleware;
}
exports.createMiddleware = createMiddleware;
