import {
  PROMISE_RESOLVED,
  PROMISE_REJECTED,
  ACTION_STARTED,
  ACTION_FINISHED
} from "./actions";

export function createReducer() {
  return (state = {} as { [id: string]: any }, action: any) => {
    if (action.type === PROMISE_RESOLVED) {
      return { ...state };
    } else if (action.type === PROMISE_REJECTED) {
      return { ...state };
    } else if (action.type === ACTION_STARTED) {
      return { ...state };
    } else if (action.type === ACTION_FINISHED) {
      return { ...state };
    } else {
      return state;
    }
  };
}
