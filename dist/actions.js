"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROMISE_RESOLVED = "ASYNC_SELECTOR_PROMISE_RESOLVED";
exports.PROMISE_REJECTED = "ASYNC_SELECTOR_PROMISE_REJECTED";
exports.ACTION_STARTED = "ASYNC_SELECTOR_ACTION_STARTED";
exports.ACTION_FINISHED = "ASYNC_SELECTOR_ACTION_FINISHED";
exports.SUBSCRIPTION_UPDATED = "ASYNC_SELECTOR_SUBSCRIPTION_UPDATED";
function promiseResolved(result, took, id) {
    return {
        type: exports.PROMISE_RESOLVED,
        id: id,
        result: result,
        took: took
    };
}
exports.promiseResolved = promiseResolved;
function promiseRejected(error, id) {
    return {
        type: exports.PROMISE_REJECTED,
        id: id,
        error: error
    };
}
exports.promiseRejected = promiseRejected;
function actionStarted(inputs, callId, id) {
    return {
        type: exports.ACTION_STARTED,
        id: id,
        inputs: inputs,
        callId: callId
    };
}
exports.actionStarted = actionStarted;
function actionEnded(result, callId, took, id) {
    return {
        type: exports.ACTION_FINISHED,
        id: id,
        result: result,
        took: took,
        callId: callId
    };
}
exports.actionEnded = actionEnded;
function subscriptionUpdated(value, id) {
    return {
        type: exports.SUBSCRIPTION_UPDATED,
        value: value,
        id: id
    };
}
exports.subscriptionUpdated = subscriptionUpdated;
