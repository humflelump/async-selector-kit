

import {
  combineReducers,
  createStore,
} from "redux";
import { createReducer } from 'async-selector-kit';


const blah = (state = { text: 'wow' }, action: any) => {
  console.log(action);
  if (action.type === 'settext') {
    return {
      text: action.text,
    }
  }
  return state;
}

const appReducer = combineReducers({
  blah,
  async: createReducer(),
});

export type State = ReturnType<typeof appReducer>;

export const store = createStore(appReducer);
console.log(store);
