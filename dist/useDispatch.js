"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dispatch = function (action) {
    throw new Error('A reference to a dispatch function must be supplied with useDispatch().');
};
var dispatcherMapping = {};
exports.getDispatcher = function (id) {
    if (id in dispatcherMapping) {
        return dispatcherMapping[id];
    }
    return dispatch;
};
function useDispatch(dispatcher, id) {
    if (typeof id === 'string') {
        dispatcherMapping[id] = dispatcher;
    }
    else {
        dispatch = dispatcher;
    }
}
exports.useDispatch = useDispatch;
;
