import createAsyncSelector from "async-selector";
import { createSelector } from "reselect";
import { getDispatcher } from "./getDispatcher";
import { promiseResolved, promiseRejected } from "./actions";
import { SelectorState } from "./types";

let createdCount = 0;

function validate(params, selectors) {
  if (!params || typeof params.async !== "function") {
    throw Error("No async function was passed in.");
  }
  if (!Array.isArray(selectors)) {
    throw Error(`Selectors must be an array. Instead got ${typeof selectors}.`);
  }
  for (let i = 0; i < selectors.length; i++) {
    if (typeof selectors[i] !== "function") {
      throw Error(
        `All selectors must be functions. Instead got ${selectors
          .map(f => typeof f)
          .join(", ")}`
      );
    }
  }
}



export function createAsyncSelectorResults<AsyncReturn, State, Props = undefined, DefaultValue = []>(params: {
  async: (status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: () => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: []): [
    (state: State) => AsyncReturn | DefaultValue,
    (state?: State) => boolean,
    (state?: State) => any | null,
    (state: State) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, Props = undefined, DefaultValue = []>(params: {
  async: (status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: () => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: []): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state?: State, props?: Props) => boolean,
    (state?: State, props?: Props) => any | null,
    (state: State, props: Props) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1]): [
    (state: State) => AsyncReturn | DefaultValue,
    (state?: State) => boolean,
    (state?: State) => any | null,
    (state: State) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1]): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state?: State, props?: Props) => boolean,
    (state?: State, props?: Props) => any | null,
    (state: State, props: Props) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2]): [
    (state: State) => AsyncReturn | DefaultValue,
    (state?: State) => boolean,
    (state?: State) => any | null,
    (state: State) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2]): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state?: State, props?: Props) => boolean,
    (state?: State, props?: Props) => any | null,
    (state: State, props: Props) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3]): [
    (state: State) => AsyncReturn | DefaultValue,
    (state?: State) => boolean,
    (state?: State) => any | null,
    (state: State) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3]): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state?: State, props?: Props) => boolean,
    (state?: State, props?: Props) => any | null,
    (state: State, props: Props) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4]): [
    (state: State) => AsyncReturn | DefaultValue,
    (state?: State) => boolean,
    (state?: State) => any | null,
    (state: State) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4]): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state?: State, props?: Props) => boolean,
    (state?: State, props?: Props) => any | null,
    (state: State, props: Props) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5]): [
    (state: State) => AsyncReturn | DefaultValue,
    (state?: State) => boolean,
    (state?: State) => any | null,
    (state: State) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5]): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state?: State, props?: Props) => boolean,
    (state?: State, props?: Props) => any | null,
    (state: State, props: Props) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6]): [
    (state: State) => AsyncReturn | DefaultValue,
    (state?: State) => boolean,
    (state?: State) => any | null,
    (state: State) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6]): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state?: State, props?: Props) => boolean,
    (state?: State, props?: Props) => any | null,
    (state: State, props: Props) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7]): [
    (state: State) => AsyncReturn | DefaultValue,
    (state?: State) => boolean,
    (state?: State) => any | null,
    (state: State) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7]): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state?: State, props?: Props) => boolean,
    (state?: State, props?: Props) => any | null,
    (state: State, props: Props) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8]): [
    (state: State) => AsyncReturn | DefaultValue,
    (state?: State) => boolean,
    (state?: State) => any | null,
    (state: State) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8]): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state?: State, props?: Props) => boolean,
    (state?: State, props?: Props) => any | null,
    (state: State, props: Props) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8, (state: State) => R9]): [
    (state: State) => AsyncReturn | DefaultValue,
    (state?: State) => boolean,
    (state?: State) => any | null,
    (state: State) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8, (state: State, props: Props) => R9]): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state?: State, props?: Props) => boolean,
    (state?: State, props?: Props) => any | null,
    (state: State, props: Props) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8, (state: State) => R9, (state: State) => R10]): [
    (state: State) => AsyncReturn | DefaultValue,
    (state?: State) => boolean,
    (state?: State) => any | null,
    (state: State) => Promise<AsyncReturn>
  ];

export function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, Props = undefined, DefaultValue = []>(params: {
  async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10, status: SelectorState) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8, (state: State, props: Props) => R9, (state: State, props: Props) => R10]): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state?: State, props?: Props) => boolean,
    (state?: State, props?: Props) => any | null,
    (state: State, props: Props) => Promise<AsyncReturn>
  ];


export function createAsyncSelectorResults(params, selectors: any = []) {
  const id = params.id || `ASYNC_SELECTOR_${++createdCount}`;
  validate(params, selectors);
  let activePromise: any = null;
  let activeSelectorState: SelectorState | null = null;

  const asyncSelector = createAsyncSelector(
    {
      ...params,
      onResolve: ({ result, took }) => {
        getDispatcher()(promiseResolved(result, took, id));
        params.onResolve && params.onResolve(result);
      },
      onReject: error => {
        getDispatcher()(promiseRejected(error, id));
        params.onReject && params.onReject(error);
      },
      onCancel: (cancelledPromise) => {
        if (cancelledPromise === activePromise && activeSelectorState) {
          activeSelectorState.cancelled = true;
          activeSelectorState.onCancel();
        }
        params.onCancel && params.onCancel(cancelledPromise);
      },
      async: (...vals) => {
        const promise = new Promise((resolve, reject) => {
          const t = Date.now();
          const selectorState: SelectorState = {
            onCancel: () => null,
            cancelled: false,
          }
          activeSelectorState = selectorState;
          params.async(...vals, selectorState)
            .then((result) => {
              const took = Date.now() - t;
              resolve({ result, took })
            })
            .catch(reject)
        });
        activePromise = promise;
        return promise;
      },
      id
    },
    selectors
  );

  const error = (state) => {
    const d = state
      ? asyncSelector(state)
      : asyncSelector.getResult();
    return (d && d.isRejected) ? d.value : null
  }

  const isWaiting = (state) => {
    const d = state
      ? asyncSelector(state)
      : asyncSelector.getResult();
    return Boolean(d && d.isWaiting);
  }

  const results = createSelector([asyncSelector], (d: any) => {
    if (d.previous === undefined) {
      if (params.defaultValue === undefined) {
        return [];
      } else {
        return params.defaultValue;
      }
    } else {
      return d.previous.result;
    }
  });

  const forceUpdate = (state, props) => {
    asyncSelector.forceUpdate(state, props);
    return new Promise((resolve, reject) => {
      activePromise.then(d => resolve(d.result)).catch(reject);
    });
  }

  return [results, isWaiting, error as Function, forceUpdate];
}
