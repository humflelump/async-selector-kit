export declare function createAsyncSelectorResults<AsyncReturn, State, Props = undefined, DefaultValue = []>(params: {
    async: () => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: () => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: []): [(state: State) => AsyncReturn | DefaultValue, (state: State) => boolean, (state: State) => any | null, (state: State) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, Props = undefined, DefaultValue = []>(params: {
    async: () => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: () => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: []): [(state: State, props: Props) => AsyncReturn | DefaultValue, (state: State, props: Props) => boolean, (state: State, props: Props) => any | null, (state: State, props: Props) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State) => R1]): [(state: State) => AsyncReturn | DefaultValue, (state: State) => boolean, (state: State) => any | null, (state: State) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State, props: Props) => R1]): [(state: State, props: Props) => AsyncReturn | DefaultValue, (state: State, props: Props) => boolean, (state: State, props: Props) => any | null, (state: State, props: Props) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State) => R1, (state: State) => R2]): [(state: State) => AsyncReturn | DefaultValue, (state: State) => boolean, (state: State) => any | null, (state: State) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2]): [(state: State, props: Props) => AsyncReturn | DefaultValue, (state: State, props: Props) => boolean, (state: State, props: Props) => any | null, (state: State, props: Props) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3]): [(state: State) => AsyncReturn | DefaultValue, (state: State) => boolean, (state: State) => any | null, (state: State) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3]): [(state: State, props: Props) => AsyncReturn | DefaultValue, (state: State, props: Props) => boolean, (state: State, props: Props) => any | null, (state: State, props: Props) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4]): [(state: State) => AsyncReturn | DefaultValue, (state: State) => boolean, (state: State) => any | null, (state: State) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4]): [(state: State, props: Props) => AsyncReturn | DefaultValue, (state: State, props: Props) => boolean, (state: State, props: Props) => any | null, (state: State, props: Props) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5]): [(state: State) => AsyncReturn | DefaultValue, (state: State) => boolean, (state: State) => any | null, (state: State) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5]): [(state: State, props: Props) => AsyncReturn | DefaultValue, (state: State, props: Props) => boolean, (state: State, props: Props) => any | null, (state: State, props: Props) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6]): [(state: State) => AsyncReturn | DefaultValue, (state: State) => boolean, (state: State) => any | null, (state: State) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6]): [(state: State, props: Props) => AsyncReturn | DefaultValue, (state: State, props: Props) => boolean, (state: State, props: Props) => any | null, (state: State, props: Props) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7]): [(state: State) => AsyncReturn | DefaultValue, (state: State) => boolean, (state: State) => any | null, (state: State) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7]): [(state: State, props: Props) => AsyncReturn | DefaultValue, (state: State, props: Props) => boolean, (state: State, props: Props) => any | null, (state: State, props: Props) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8]): [(state: State) => AsyncReturn | DefaultValue, (state: State) => boolean, (state: State) => any | null, (state: State) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8]): [(state: State, props: Props) => AsyncReturn | DefaultValue, (state: State, props: Props) => boolean, (state: State, props: Props) => any | null, (state: State, props: Props) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8, (state: State) => R9]): [(state: State) => AsyncReturn | DefaultValue, (state: State) => boolean, (state: State) => any | null, (state: State) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8, (state: State, props: Props) => R9]): [(state: State, props: Props) => AsyncReturn | DefaultValue, (state: State, props: Props) => boolean, (state: State, props: Props) => any | null, (state: State, props: Props) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8, (state: State) => R9, (state: State) => R10]): [(state: State) => AsyncReturn | DefaultValue, (state: State) => boolean, (state: State) => any | null, (state: State) => void];
export declare function createAsyncSelectorResults<AsyncReturn, State, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, Props = undefined, DefaultValue = []>(params: {
    async: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10) => Promise<AsyncReturn>;
    onResolve?: (result: AsyncReturn) => void;
    onReject?: (error: any) => void;
    onCancel?: (promise: Promise<AsyncReturn>) => void;
    shouldUseAsync?: (val1: R1, val2: R2, val3: R3, val4: R4, val5: R5, val6: R6, val7: R7, val8: R8, val9: R9, val10: R10) => boolean;
    throttle?: (f: Function) => Function;
    id?: string;
    defaultValue?: DefaultValue;
}, selectors: [(state: State, props: Props) => R1, (state: State, props: Props) => R2, (state: State, props: Props) => R3, (state: State, props: Props) => R4, (state: State, props: Props) => R5, (state: State, props: Props) => R6, (state: State, props: Props) => R7, (state: State, props: Props) => R8, (state: State, props: Props) => R9, (state: State, props: Props) => R10]): [(state: State, props: Props) => AsyncReturn | DefaultValue, (state: State, props: Props) => boolean, (state: State, props: Props) => any | null, (state: State, props: Props) => void];
