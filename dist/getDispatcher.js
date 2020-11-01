"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dispatch = function () {
    throw Error("A reference to a dispatch function must be supplied with useDispatch().");
};
var store = null;
exports.getDispatcher = function () {
    return dispatch;
};
function getStore() {
    return {
        dispatch: dispatch,
        getState: store
            ? store.getState
            : function () {
                throw Error("Can't access getState() because middleware not created");
            }
    };
}
exports.getStore = getStore;
function referenceStore(store_) {
    store = store_;
    dispatch = store.dispatch;
}
exports.referenceStore = referenceStore;
