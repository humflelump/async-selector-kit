import { PROMISE_RESOLVED, PROMISE_REJECTED } from "./actions"

export function createReducer() {
  return (state = {} as { [id: string]: any }, action: any) => {
    if (action.type === PROMISE_RESOLVED) {
      return { ...state };
    } else if (action.type === PROMISE_REJECTED) {
      return { ...state };
    } else {
      return state;
    }
  }
}