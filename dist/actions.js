"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROMISE_RESOLVED = 'ASYNC_SELECTOR_PROMISE_RESOLVED';
exports.PROMISE_REJECTED = 'ASYNC_SELECTOR_PROMISE_REJECTED';
function promiseResolved(result, took, id) {
    return {
        type: exports.PROMISE_RESOLVED,
        id: id,
        result: result,
        took: took,
    };
}
exports.promiseResolved = promiseResolved;
function promiseRejected(error, id) {
    return {
        type: exports.PROMISE_REJECTED,
        id: id,
        error: error,
    };
}
exports.promiseRejected = promiseRejected;
