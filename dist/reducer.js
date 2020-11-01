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
var actions = [
    actions_1.PROMISE_RESOLVED,
    actions_1.PROMISE_REJECTED,
    actions_1.ACTION_STARTED,
    actions_1.ACTION_FINISHED
];
function createReducer() {
    return function (state, action) {
        if (state === void 0) { state = {}; }
        if (actions.includes(action.type)) {
            return __assign({}, state);
        }
        return state;
    };
}
exports.createReducer = createReducer;
