import { combineReducers, createStore, applyMiddleware } from "redux";
import { createReducer } from "async-selector-kit";
import { createMiddleware } from "async-selector-kit";

const blah = (state = { text: "wow", show: true }, action: any) => {
  if (action.type === "settext") {
    return {
      ...state,
      text: action.text
    };
  }
  if (action.type === "toggle") {
    return {
      ...state,
      show: !state.show
    };
  }
  return state;
};

const appReducer = combineReducers({
  blah,
  async: createReducer()
});

export type State = ReturnType<typeof appReducer>;

const middlewares = [createMiddleware()];

export const store = createStore(appReducer, applyMiddleware(...middlewares));
