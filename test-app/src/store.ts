import { combineReducers, createStore, applyMiddleware } from "redux";
import { createReducer } from "async-selector-kit";
import { createMiddleware } from "async-selector-kit";

const blah = (state = { text: "wow" }, action: any) => {
  if (action.type === "settext") {
    return {
      text: action.text
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
