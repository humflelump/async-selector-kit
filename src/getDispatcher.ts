let dispatch: Function = () => {
  throw Error(
    "A reference to a dispatch function must be supplied with useDispatch()."
  );
};

let store: any = null;

export const getDispatcher = () => {
  return dispatch;
};

export function getStore() {
  return {
    dispatch,
    getState: store
      ? store.getState
      : () => {
          throw Error("Can't access getState() because middleware not created");
        }
  };
}

export function referenceStore(store_: any) {
  store = store_;
  dispatch = store.dispatch;
}
