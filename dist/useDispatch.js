"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dispatch = function (action) {
    throw new Error("A reference to a dispatch function must be supplied with useDispatch().");
};
exports.getDispatcher = function (id) {
    if (id in dispatcherMapping) {
        return dispatcherMapping[id];
    }
    return dispatch;
};
function getStore() {
    return {
        dispatch: dispatch,
        getState: store
            ? store.getState
            : function () {
                throw new Error("Can't access getState() because middleware not created");
            }
    };
}
exports.getStore = getStore;
function useDispatch(dispatcher, id) {
    if (typeof id === "string") {
        dispatcherMapping[id] = dispatcher;
    }
    else {
        dispatch = dispatcher;
    }
}
exports.useDispatch = useDispatch;
function useStore(store_) {
    store = store_;
    useDispatch(store.dispatch);
}
exports.useStore = useStore;
