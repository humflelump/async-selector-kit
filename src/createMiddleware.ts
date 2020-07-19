import { useStore } from "./useDispatch";

const listeners = [] as any[];

export function addNewStateListener(listener) {
  listeners.push(listener);
}

export function createMiddleware() {
  const logger = store => next => action => {
    useStore(store);
    let result = next(action);
    const nextState = store.getState();
    setTimeout(() => {
      listeners.forEach(f => f(nextState));
    });
    return result;
  };
  return logger;
}
