"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dispatch = function (action) {
    throw new Error('A reference to a dispatch function must be supplied with useDispatch().');
};
exports.getDispatcher = function () { return dispatch; };
function useDispatch(dispatcher) {
    dispatch = dispatcher;
}
exports.useDispatch = useDispatch;
;
