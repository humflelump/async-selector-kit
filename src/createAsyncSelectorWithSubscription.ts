import { createAsyncSelectorResults } from "./createAsyncSelectorResults";

function hasChanged(oldValues, newValues) {
  if (oldValues === null) return true;
  if (oldValues.length !== newValues.length) return true;
  for (let i = 0; i < oldValues.length; i++) {
    if (newValues[i] !== oldValues[i]) {
      return true;
    }
  }
  return false;
}

export function notifyNewState(state: any) {
  newStateCallbacks.forEach(f => f(state));
}

const newStateCallbacks = [] as any;

export function createAsyncSelectorWithSubscription(params, selectors) {
  if (typeof params.onUnsubscribe !== "function") {
    throw new Error("onUnsubscribe must be a function");
  }
  let isSubscribed = false;
  let lastStatePassedIn = null;
  const newState = state => {
    if (state !== lastStatePassedIn) {
      if (isSubscribed) {
        params.onUnsubscribe(state);
      }
      isSubscribed = false;
    }
  };
  newStateCallbacks.push(newState);

  const results = createAsyncSelectorResults(params, selectors);

  let prevInputs = null;
  const getValues = (state, ...other) => {
    const inputs = selectors.map(f => f(state, ...other));
    if (hasChanged(prevInputs, inputs)) {
      params.inputsChanged && params.inputsChanged(inputs);
    }
    lastStatePassedIn = state;
    if (!isSubscribed) {
      isSubscribed = true;
      params.onSubscribe && params.onSubscribe(state);
    }
    return (results[0] as any)(state, ...other);
  };
  results[0] = getValues;
  return results;
}
