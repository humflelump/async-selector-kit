import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { State } from "./store";
import { useSelector, useDispatch, connect } from "react-redux";
import { createAsyncSelectorResults } from "async-selector-kit";
import { createSubscription } from "async-selector-kit";
import { createAsyncAction } from "async-selector-kit";
import { Store, ActionState } from "../../src/createAsyncAction";

const text = (state: State) => state.blah.text as string;

const [longText, loading] = createAsyncSelectorResults(
  {
    async: async text => {
      await new Promise(res => setTimeout(res, 500));
      return "" + text + text;
    },
    defaultValue: ""
  },
  [text]
);

const [newSelector] = createSubscription(
  {
    defaultValue: "wow",
    onSubscribe: (inputs, setter) => {
      console.log("onSubscribe", inputs, setter);
    },
    onUnsubscribe: (inputs, setter) => {
      console.log("onSubscribe", inputs, setter);
    }
  },
  []
);

// function grr<A, R>(props: { f: (a: A) => R }): (a: A, c: number) => R;

// function grr<A, B, R>(props: {
//   f: (a: A, b: B) => R;
// }): (a: A, b: B, c: number) => R;

// function grr(a: any) {
//   return a;
// }

// const r = grr({ f: (a: string) => 5 });
// r("");

const [action, loadingAction, error] = createAsyncAction(
  {
    id: "wowowowow",
    async: (store, status) => async (val: string, wow: number) => {
      status.onCancel = () => console.log("cancelled");
      await new Promise(res => setTimeout(res, 1000));
      return true;
    }
  },
  [(state: State) => state.async]
);

const App: React.FC = () => {
  const text = useSelector((state: State) => state.blah.text);
  const long = useSelector(longText);
  const pending = useSelector(loading);
  const ugh = useSelector(loadingAction);
  useSelector(newSelector);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input
        value={text}
        onChange={e => {
          dispatch({ type: "settext", text: e.target.value });
        }}
      />
      <div>{long}</div>
      <div>{pending ? "..." : "done"}</div>
      <div>Loading Action: {ugh ? "true" : "false"}</div>
    </div>
  );
};

export default connect(state => {
  return state;
})(App);
