let dispatch: Function = (action: object) => {
  throw new Error(
    "A reference to a dispatch function must be supplied with useDispatch()."
  );
};
const dispatcherMapping = {};
let store = null as any;

export const getDispatcher = (id: string) => {
  if (id in dispatcherMapping) {
    return dispatcherMapping[id];
  }
  return dispatch;
};

export function getStore() {
  return {
    dispatch,
    getState: store
      ? store.getState
      : () => {
          throw new Error(
            "Can't access getState() because middleware not created"
          );
        }
  };
}

export function useDispatch(dispatcher: Function, id?: string) {
  if (typeof id === "string") {
    dispatcherMapping[id] = dispatcher;
  } else {
    dispatch = dispatcher;
  }
}

export function useStore(store_: any) {
  store = store_;
  useDispatch(store.dispatch);
}
