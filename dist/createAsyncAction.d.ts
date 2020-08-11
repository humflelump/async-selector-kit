export declare type ActionState<PromiseReturn> = {
    id: number;
    cancelled: boolean;
    onCancel: () => void;
    promise: Promise<PromiseReturn>;
};
export declare type Store<State> = {
    getState: () => State;
    dispatch: (action: any) => void;
};
export declare type ReduxAction = {
    [key: string]: any;
} & {
    type: string;
};
export declare function createAsyncAction<State, PromiseReturn>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => () => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors?: []): [() => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => () => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1]): [() => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => () => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2]): [() => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => () => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [() => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => () => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [() => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors?: []): [(val1: R1) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1]): [(val1: R1) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2]): [(val1: R1) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [(val1: R1) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [(val1: R1) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors?: []): [(val1: R1, val2: R2) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1]): [(val1: R1, val2: R2) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2]): [(val1: R1, val2: R2) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [(val1: R1, val2: R2) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [(val1: R1, val2: R2) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, val3: R3) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors?: []): [(val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, val3: R3) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1]): [(val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, val3: R3) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2]): [(val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, val3: R3) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [(val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, val3: R3) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [(val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors?: []): [(val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1]): [(val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2]): [(val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [(val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription?: undefined;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [(val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (action: ReduxAction) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store: any) => boolean;
}, selectors?: []): [(action: ReduxAction) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (action: ReduxAction) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store: any) => boolean;
}, selectors: [(state: State) => S1]): [(action: ReduxAction) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (action: ReduxAction) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store: any) => boolean;
}, selectors: [(state: State) => S1, (state: State) => S2]): [(action: ReduxAction) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (action: ReduxAction) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store: any) => boolean;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [(action: ReduxAction) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (action: ReduxAction) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
    dispatchActions?: boolean;
    subscription: (action: ReduxAction, store: any) => boolean;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [(action: ReduxAction) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
