import React from "react";
import logo from "./logo.svg";
import { State } from "./store";
import { useSelector, useDispatch, connect } from "react-redux";
import { abortableFetch, createAsyncSelectorResults } from "async-selector-kit";
import { createAsyncAction } from "async-selector-kit";
// import { Store, ActionState } from "async-selector-kit";
import { debounce } from "lodash";
import { Action } from "redux";

const text = (state: State) => state.blah.text as string;

const [longText, loading, err, forceUpdate] = createAsyncSelectorResults(
  {
    id: "wow",
    async: async (text, status) => {
      await new Promise(res => setTimeout(res, 500));
      const resp = await abortableFetch(status, fetch)(
        'https://setpoint-iterator.svc.eogresources.com/env',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
        });
      return "" + text + text;
    },
    defaultValue: ""
  },
  [text]
);

// const [newSelector] = createSubscription(
//   {
//     defaultValue: "wow",
//     onSubscribe: (inputs, setter) => {
//       console.log("onSubscribe", inputs, setter);
//     },
//     onUnsubscribe: (inputs, setter) => {
//       console.log("onSubscribe", inputs, setter);
//     }
//   },
//   []
// );

// function grr<A, R>(props: { f: (a: A) => R }): (a: A, c: number) => R;

// function grr<A, B, R>(props: {
//   f: (a: A, b: B) => R;
// }): (a: A, b: B, c: number) => R;

// function grr(a: any) {
//   return a;
// }

// const r = grr({ f: (a: string) => 5 });
// r("");

const [action2, loadingAction2, error2] = createAsyncAction(
  {
    id: "wowowowow",
    async: (store, status, val) => async () => {
      status.onCancel = () => console.log("cancelled");
      //console.log("started", val, wow);
      console.log("called", action);
      await new Promise(res => setTimeout(res, 1000));
      //console.log("ended", val, wow);
      try {
        const val = await forceUpdate(store.getState());
      } catch (e) {
        console.log({ e });
      }


      return true;
    },
  },
  [(state: State) => state.async]
);

const [action, loadingAction, error] = createAsyncAction(
  {
    id: "wowowowow",
    async: (store, status, val) => async action => {
      status.onCancel = () => console.log("cancelled");
      //console.log("started", val, wow);
      console.log("called", action);
      await new Promise(res => setTimeout(res, 1000));
      //console.log("ended", val, wow);
      const val = await forceUpdate(store.getState());
      console.log({ val });
      return true;
    },
    subscription: (action, store) => {
      console.log("wowowowo", { action, store });
      return false;
    }
  },
  [(state: State) => state.async]
);

const Sub = () => {
  //useSelector(newSelector);
  return <div>Sub</div>;
};

const App: React.FC = () => {
  const text = useSelector((state: State) => state.blah.text);
  const long = useSelector(longText);
  const pending = useSelector(loading);
  const ugh = useSelector(loadingAction);
  const visible = useSelector((state: any) => state.blah.show);
  console.log({ visible });
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input
        value={text}
        onChange={e => {
          dispatch({ type: "settext", text: e.target.value });
          //action("555", 666);
        }}
      />
      <div>{long}</div>
      <div>{pending ? "..." : "done"}</div>
      <div>Loading Action: {ugh ? "true" : "false"}</div>
      {visible && <Sub />}
      <button
        onClick={() => {
          dispatch({ type: "toggle" });
          action2();
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default connect(state => {
  return state;
})(App);
