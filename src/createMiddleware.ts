import { referenceStore } from "./getDispatcher";

type Listener = {
  id: string;
  func: Function;
};

const actionListeners: Listener[] = [];

export function addNewActionListener(listenerFunc, id: string) {
  const listener: Listener = {
    id,
    func: listenerFunc
  };
  const index = actionListeners.findIndex(d => d.id === id);
  if (index >= 0) {
    actionListeners.splice(index, 1);
  }
  actionListeners.push(listener);
}

export function createMiddleware() {
  const middleware = store => {
    referenceStore(store);
    return next => action => {
      const result = next(action);
      actionListeners.forEach(d => d.func(action, store));
      return result;
    };
  };
  return middleware;
}
