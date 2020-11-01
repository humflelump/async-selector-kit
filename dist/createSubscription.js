"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createMiddleware_1 = require("./createMiddleware");
var reselect_1 = require("reselect");
var getDispatcher_1 = require("./getDispatcher");
var actions_1 = require("./actions");
var createdCount = 0;
function createSubscription(params, selectors) {
    if (selectors === void 0) { selectors = []; }
    var onSubscribe = params.onSubscribe, onUnsubscribe = params.onUnsubscribe, onInputsChanged = params.onInputsChanged, onSelectorCalled = params.onSelectorCalled, defaultValue = params.defaultValue;
    var id = params.id || "SUBSCRIPTION_" + ++createdCount;
    var states = [];
    var isSubscribed = false;
    var value = defaultValue;
    var prevInputs = null;
    var lastUpdate = null;
    var selector = reselect_1.createSelector(selectors, function () {
        var vals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vals[_i] = arguments[_i];
        }
        onInputsChanged && onInputsChanged(vals, prevInputs);
        prevInputs = vals;
    });
    var setter = function (val) {
        value = val;
        lastUpdate = Date.now();
        getDispatcher_1.getDispatcher(id)(actions_1.subscriptionUpdated(value, id));
    };
    var setSubscriptionState = function (bool) {
        if (bool && !isSubscribed) {
            onSubscribe && onSubscribe(prevInputs, getDispatcher_1.getStore());
        }
        else if (!bool && isSubscribed) {
            onUnsubscribe && onUnsubscribe(prevInputs, getDispatcher_1.getStore());
        }
        isSubscribed = bool;
    };
    createMiddleware_1.addNewStateListener(function (state) {
        setSubscriptionState(states.indexOf(state) !== -1);
        var index = states.indexOf(state);
        for (var i = 0; i < index; i++) {
            states.shift();
        }
    });
    var returnSelector = function (state) {
        selector(state);
        onSelectorCalled && onSelectorCalled(state);
        states.push(state);
        return value;
    };
    return [returnSelector, setter, function () { return lastUpdate; }];
}
exports.createSubscription = createSubscription;
