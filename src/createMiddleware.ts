import { useStore } from "./useDispatch";

const stateListeners = [] as any[];
const actionListeners = [] as any[];

export function addNewStateListener(listener) {
  stateListeners.push(listener);
}

export function addNewActionListener(listener) {
  actionListeners.push(listener);
}

export function createMiddleware() {
  const logger = store => next => action => {
    useStore(store);
    let result = next(action);
    const nextState = store.getState();
    actionListeners.forEach(f => f(action, store));
    setTimeout(() => {
      stateListeners.forEach(f => f(nextState));
    });
    return result;
  };
  return logger;
}
