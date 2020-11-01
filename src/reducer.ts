import {
  PROMISE_RESOLVED,
  PROMISE_REJECTED,
  ACTION_STARTED,
  ACTION_FINISHED
} from "./actions";

const actions = [
  PROMISE_RESOLVED,
  PROMISE_REJECTED,
  ACTION_STARTED,
  ACTION_FINISHED
];

export function createReducer() {
  return (state = {} as { [id: string]: any }, action: any) => {
    if (actions.includes(action.type)) {
      return { ...state };
    }
    return state;
  };
}
