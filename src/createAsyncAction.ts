import { getStore, getDispatcher } from "./getDispatcher";
import { actionStarted, actionEnded } from "./actions";
import { addNewActionListener } from "./createMiddleware";

let c = 0;

function throttlePromise(func, throttle) {
  const f = (res, rej, func, params) => {
    func(...params[0])(...params[1])
      .then(res)
      .catch(rej);
  };
  const throttled = throttle(f);
  return (...params1) => (...params2) =>
    new Promise((res, rej) => {
      throttled(res, rej, func, [params1, params2]);
    });
}

export type ActionState<PromiseReturn> = {
  id: number;
  cancelled: boolean;
  onCancel: () => void;
  promise: Promise<PromiseReturn>;
};

export type Store<State> = {
  getState: () => State;
  dispatch: (action: any) => void;
};

export type ReduxAction = { [key: string]: any } & { type: string };

export function createAsyncAction<
  State, PromiseReturn
  
  
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => () => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors?:[] 
): [
  () => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => () => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1] 
): [
  () => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => () => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2] 
): [
  () => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => () => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3] 
): [
  () => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3, S4
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => () => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4] 
): [
  () => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3, S4, S5
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => () => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5] 
): [
  () => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3, S4, S5, S6
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6) => () => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6] 
): [
  () => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3, S4, S5, S6, S7
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7) => () => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7] 
): [
  () => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3, S4, S5, S6, S7, S8
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8) => () => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7, (state: State) => S8] 
): [
  () => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1
  
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors?:[] 
): [
  (val1: R1) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, 
  S1
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1] 
): [
  (val1: R1) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, 
  S1, S2
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2] 
): [
  (val1: R1) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, 
  S1, S2, S3
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3] 
): [
  (val1: R1) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, 
  S1, S2, S3, S4
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4] 
): [
  (val1: R1) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, 
  S1, S2, S3, S4, S5
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5] 
): [
  (val1: R1) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, 
  S1, S2, S3, S4, S5, S6
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6) => (val1: R1, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6] 
): [
  (val1: R1) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, 
  S1, S2, S3, S4, S5, S6, S7
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7) => (val1: R1, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7] 
): [
  (val1: R1) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, 
  S1, S2, S3, S4, S5, S6, S7, S8
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8) => (val1: R1, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7, (state: State) => S8] 
): [
  (val1: R1) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2
  
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors?:[] 
): [
  (val1: R1, val2: R2) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, 
  S1
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1] 
): [
  (val1: R1, val2: R2) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, 
  S1, S2
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2] 
): [
  (val1: R1, val2: R2) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, 
  S1, S2, S3
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3] 
): [
  (val1: R1, val2: R2) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, 
  S1, S2, S3, S4
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4] 
): [
  (val1: R1, val2: R2) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, 
  S1, S2, S3, S4, S5
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, val2: R2, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5] 
): [
  (val1: R1, val2: R2) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, 
  S1, S2, S3, S4, S5, S6
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6) => (val1: R1, val2: R2, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6] 
): [
  (val1: R1, val2: R2) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, 
  S1, S2, S3, S4, S5, S6, S7
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7) => (val1: R1, val2: R2, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7] 
): [
  (val1: R1, val2: R2) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, 
  S1, S2, S3, S4, S5, S6, S7, S8
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8) => (val1: R1, val2: R2, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7, (state: State) => S8] 
): [
  (val1: R1, val2: R2) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3
  
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, val3: R3, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors?:[] 
): [
  (val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, 
  S1
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, val3: R3, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1] 
): [
  (val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, 
  S1, S2
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, val3: R3, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2] 
): [
  (val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, 
  S1, S2, S3
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, val3: R3, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3] 
): [
  (val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, 
  S1, S2, S3, S4
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, val3: R3, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4] 
): [
  (val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, 
  S1, S2, S3, S4, S5
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, val2: R2, val3: R3, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5] 
): [
  (val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, 
  S1, S2, S3, S4, S5, S6
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6) => (val1: R1, val2: R2, val3: R3, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6] 
): [
  (val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, 
  S1, S2, S3, S4, S5, S6, S7
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7) => (val1: R1, val2: R2, val3: R3, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7] 
): [
  (val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, 
  S1, S2, S3, S4, S5, S6, S7, S8
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8) => (val1: R1, val2: R2, val3: R3, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7, (state: State) => S8] 
): [
  (val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4
  
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, val3: R3, val4: R4, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors?:[] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, 
  S1
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, val3: R3, val4: R4, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, 
  S1, S2
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, val3: R3, val4: R4, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, 
  S1, S2, S3
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, val3: R3, val4: R4, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, 
  S1, S2, S3, S4
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, val3: R3, val4: R4, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, 
  S1, S2, S3, S4, S5
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, val2: R2, val3: R3, val4: R4, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, 
  S1, S2, S3, S4, S5, S6
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6) => (val1: R1, val2: R2, val3: R3, val4: R4, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, 
  S1, S2, S3, S4, S5, S6, S7
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7) => (val1: R1, val2: R2, val3: R3, val4: R4, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, 
  S1, S2, S3, S4, S5, S6, S7, S8
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8) => (val1: R1, val2: R2, val3: R3, val4: R4, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7, (state: State) => S8] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5
  
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors?:[] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, 
  S1
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, 
  S1, S2
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, 
  S1, S2, S3
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, 
  S1, S2, S3, S4
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, 
  S1, S2, S3, S4, S5
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, 
  S1, S2, S3, S4, S5, S6
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, 
  S1, S2, S3, S4, S5, S6, S7
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, 
  S1, S2, S3, S4, S5, S6, S7, S8
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7, (state: State) => S8] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6
  
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors?:[] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, 
  S1
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, 
  S1, S2
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, 
  S1, S2, S3
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, 
  S1, S2, S3, S4
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, 
  S1, S2, S3, S4, S5
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, 
  S1, S2, S3, S4, S5, S6
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, 
  S1, S2, S3, S4, S5, S6, S7
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, 
  S1, S2, S3, S4, S5, S6, S7, S8
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7, (state: State) => S8] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7
  
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors?:[] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, 
  S1
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, 
  S1, S2
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, 
  S1, S2, S3
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, 
  S1, S2, S3, S4
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, 
  S1, S2, S3, S4, S5
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, 
  S1, S2, S3, S4, S5, S6
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, 
  S1, S2, S3, S4, S5, S6, S7
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, 
  S1, S2, S3, S4, S5, S6, S7, S8
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7, (state: State) => S8] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, R8
  
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors?:[] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, R8, 
  S1
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, R8, 
  S1, S2
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, R8, 
  S1, S2, S3
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, R8, 
  S1, S2, S3, S4
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, R8, 
  S1, S2, S3, S4, S5
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, R8, 
  S1, S2, S3, S4, S5, S6
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, R8, 
  S1, S2, S3, S4, S5, S6, S7
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn, 
  R1, R2, R3, R4, R5, R6, R7, R8, 
  S1, S2, S3, S4, S5, S6, S7, S8
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, ) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription?: undefined
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7, (state: State) => S8] 
): [
  (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  
  
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (action: ReduxAction) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store) => boolean;
  },
  selectors?:[] 
): [
  (action: ReduxAction) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (action: ReduxAction) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store) => boolean;
  },
  selectors:[(state: State) => S1] 
): [
  (action: ReduxAction) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (action: ReduxAction) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store) => boolean;
  },
  selectors:[(state: State) => S1, (state: State) => S2] 
): [
  (action: ReduxAction) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (action: ReduxAction) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store) => boolean;
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3] 
): [
  (action: ReduxAction) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3, S4
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (action: ReduxAction) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store) => boolean;
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4] 
): [
  (action: ReduxAction) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3, S4, S5
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (action: ReduxAction) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store) => boolean;
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5] 
): [
  (action: ReduxAction) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3, S4, S5, S6
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6) => (action: ReduxAction) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store) => boolean;
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6] 
): [
  (action: ReduxAction) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3, S4, S5, S6, S7
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7) => (action: ReduxAction) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store) => boolean;
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7] 
): [
  (action: ReduxAction) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];
export function createAsyncAction<
  State, PromiseReturn
  , 
  S1, S2, S3, S4, S5, S6, S7, S8
>(
  params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5, s6: S6, s7: S7, s8: S8) => (action: ReduxAction) => Promise<PromiseReturn>
    id?: string;
    throttle?: (f: () => any) => (() => any);
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store) => boolean;
  },
  selectors:[(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5, (state: State) => S6, (state: State) => S7, (state: State) => S8] 
): [
  (action: ReduxAction) => ActionState<PromiseReturn>,
  () => boolean,
  () => any | undefined,
];


export function createAsyncAction(params: any, selectors?: any[]) {
  const actionStates = {};
  let error = undefined;
  let loading = false;
  let mostRecentAction = null as any;
  let idCounter = 0;

  let func = params.async;
  const inputs = selectors || [];

  const throttle = params.throttle || (f => f);
  const { subscription } = params;
  const spawnActions =
    typeof params.dispatchActions === "boolean" ? params.dispatchActions : true;

  if (!params.id && subscription) {
    // As of react-scripts 4, the subscriptions are not removed when the app restarts in dev mode
    // So to prevent duplicate subscription, every subscription should have a (preferably) unique id
    throw Error('An id must be provided to use subscriptions');
  }
  const id = params.id || `ASYNC_ACTION${++c}`;

  const transform = func => (...params1) => (actionState, ...params2) => {
    const oldPromise = func(...params1)(...params2);
    return new Promise((res, rej) => {
      if (actionStates[mostRecentAction]) {
        actionStates[mostRecentAction].cancelled = true;
        actionStates[mostRecentAction].onCancel();
        delete actionStates[mostRecentAction - 1];
      }
      loading = true;
      const actionCallId = ++idCounter;
      actionStates[actionCallId] = actionState;
      actionState.id = actionCallId;

      let t = Date.now();
      mostRecentAction = actionCallId;

      if (spawnActions) {
        getDispatcher()(actionStarted(params2, actionCallId, id));
      }

      const finish = (error_: any, result_: any) => {
        const took = Date.now() - t;
        if (actionCallId === mostRecentAction) {
          loading = false;
          error = error_;
          if (spawnActions) {
            getDispatcher()(actionEnded(result_, actionCallId, took, id));
          }
        }
        delete actionStates[actionCallId];
      };
      oldPromise
        .then(d => {
          finish(undefined, d);
          res(d);
        })
        .catch(e => {
          finish(e, undefined);
          rej(e);
        });
    });
  };

  func = throttlePromise(transform(func), throttle);

  const action = (...params) => {
    const actionState: any = {
      cancelled: false,
      onCancel: _ => _
    };
    const state = getStore().getState();
    const selectorResults = inputs.map(f => f(state));
    const promise = func(
      getStore(),
      actionState,
      ...selectorResults
    )(actionState, ...params);

    actionState.promise = promise;
    promise.then(_ => _).catch(_ => _);
    return actionState;
  };

  subscription &&
    addNewActionListener((actionObj, store) => {
      subscription(actionObj, store) && action(actionObj);
    }, id);

  return [action, () => loading, () => error];
}
