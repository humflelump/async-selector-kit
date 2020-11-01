"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var getDispatcher_1 = require("./getDispatcher");
var actions_1 = require("./actions");
var createMiddleware_1 = require("./createMiddleware");
var c = 0;
function throttlePromise(func, throttle) {
    var f = function (res, rej, func, params) {
        func.apply(void 0, params[0]).apply(void 0, params[1]).then(res)
            .catch(rej);
    };
    var throttled = throttle(f);
    return function () {
        var params1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params1[_i] = arguments[_i];
        }
        return function () {
            var params2 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params2[_i] = arguments[_i];
            }
            return new Promise(function (res, rej) {
                throttled(res, rej, func, [params1, params2]);
            });
        };
    };
}
function createAsyncAction(params, selectors) {
    var actionStates = {};
    var error = undefined;
    var loading = false;
    var mostRecentAction = null;
    var idCounter = 0;
    var func = params.async;
    var inputs = selectors || [];
    var throttle = params.throttle || (function (f) { return f; });
    var subscription = params.subscription;
    var spawnActions = typeof params.dispatchActions === "boolean" ? params.dispatchActions : true;
    if (!params.id && subscription) {
        // As of react-scripts 4, the subscriptions are not removed when the app restarts in dev mode
        // So to prevent duplicate subscription, every subscription should have a (preferably) unique id
        throw Error('An id must be provided to use subscriptions');
    }
    var id = params.id || "ASYNC_ACTION" + ++c;
    var transform = function (func) { return function () {
        var params1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params1[_i] = arguments[_i];
        }
        return function (actionState) {
            var params2 = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params2[_i - 1] = arguments[_i];
            }
            var oldPromise = func.apply(void 0, params1).apply(void 0, params2);
            return new Promise(function (res, rej) {
                if (actionStates[mostRecentAction]) {
                    actionStates[mostRecentAction].cancelled = true;
                    actionStates[mostRecentAction].onCancel();
                    delete actionStates[mostRecentAction - 1];
                }
                loading = true;
                var actionCallId = ++idCounter;
                actionStates[actionCallId] = actionState;
                actionState.id = actionCallId;
                var t = Date.now();
                mostRecentAction = actionCallId;
                if (spawnActions) {
                    getDispatcher_1.getDispatcher()(actions_1.actionStarted(params2, actionCallId, id));
                }
                var finish = function (error_, result_) {
                    var took = Date.now() - t;
                    if (actionCallId === mostRecentAction) {
                        loading = false;
                        error = error_;
                        if (spawnActions) {
                            getDispatcher_1.getDispatcher()(actions_1.actionEnded(result_, actionCallId, took, id));
                        }
                    }
                    delete actionStates[actionCallId];
                };
                oldPromise
                    .then(function (d) {
                    finish(undefined, d);
                    res(d);
                })
                    .catch(function (e) {
                    finish(e, undefined);
                    rej(e);
                });
            });
        };
    }; };
    func = throttlePromise(transform(func), throttle);
    var action = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var actionState = {
            cancelled: false,
            onCancel: function (_) { return _; }
        };
        var state = getDispatcher_1.getStore().getState();
        var selectorResults = inputs.map(function (f) { return f(state); });
        var promise = func.apply(void 0, __spreadArrays([getDispatcher_1.getStore(),
            actionState], selectorResults)).apply(void 0, __spreadArrays([actionState], params));
        actionState.promise = promise;
        promise.then(function (_) { return _; }).catch(function (_) { return _; });
        return actionState;
    };
    subscription &&
        createMiddleware_1.addNewActionListener(function (actionObj, store) {
            subscription(actionObj, store) && action(actionObj);
        }, id);
    return [action, function () { return loading; }, function () { return error; }];
}
exports.createAsyncAction = createAsyncAction;
