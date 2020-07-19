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
export declare function createAsyncAction<State, PromiseReturn>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => () => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors?: []): [() => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => () => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1]): [() => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => () => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2]): [() => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => () => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [() => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => () => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [() => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, S1, S2, S3, S4, S5>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => () => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5]): [() => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors?: []): [(val1: R1) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1]): [(val1: R1) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2]): [(val1: R1) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [(val1: R1) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [(val1: R1) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, S1, S2, S3, S4, S5>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5]): [(val1: R1) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors?: []): [(val1: R1, val2: R2) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1]): [(val1: R1, val2: R2) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2]): [(val1: R1, val2: R2) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [(val1: R1, val2: R2) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [(val1: R1, val2: R2) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, S1, S2, S3, S4, S5>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, val2: R2) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5]): [(val1: R1, val2: R2) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, val3: R3) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors?: []): [(val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, val3: R3) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1]): [(val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, val3: R3) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2]): [(val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, val3: R3) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [(val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, val3: R3) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [(val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, S1, S2, S3, S4, S5>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, val2: R2, val3: R3) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5]): [(val1: R1, val2: R2, val3: R3) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors?: []): [(val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1]): [(val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2]): [(val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [(val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [(val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, S1, S2, S3, S4, S5>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5]): [(val1: R1, val2: R2, val3: R3, val4: R4) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, R5>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors?: []): [(val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, R5, S1>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1]): [(val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, R5, S1, S2>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2]): [(val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, R5, S1, S2, S3>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3]): [(val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, R5, S1, S2, S3, S4>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4]): [(val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
export declare function createAsyncAction<State, PromiseReturn, R1, R2, R3, R4, R5, S1, S2, S3, S4, S5>(params: {
    async: (store: Store<State>, status: ActionState<PromiseReturn>, s1: S1, s2: S2, s3: S3, s4: S4, s5: S5) => (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => Promise<PromiseReturn>;
    id?: string;
    throttle?: (f: () => any) => () => any;
}, selectors: [(state: State) => S1, (state: State) => S2, (state: State) => S3, (state: State) => S4, (state: State) => S5]): [(val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => ActionState<PromiseReturn>, () => boolean, () => any | undefined];
