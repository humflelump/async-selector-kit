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
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
function createReducer() {
    return function (state, action) {
        if (state === void 0) { state = {}; }
        if (action.type === actions_1.PROMISE_RESOLVED) {
            return __assign({}, state);
        }
        else if (action.type === actions_1.PROMISE_REJECTED) {
            return __assign({}, state);
        }
        else {
            return state;
        }
    };
}
exports.createReducer = createReducer;
