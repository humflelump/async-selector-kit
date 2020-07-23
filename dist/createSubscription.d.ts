export declare type Store<State> = {
    getState: () => State;
    dispatch: (action: any) => void;
};
export declare function createSubscription<AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [], store: Store<State>) => void;
    onInputsChanged?: (current: [], previous: [] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string;
}, selectors?: []): [(state: State) => DefaultValue, (val: DefaultValue) => void, (state: State) => number | null];
export declare function createSubscription<R1, AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [R1], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [R1], store: Store<State>) => void;
    onInputsChanged?: (current: [R1], previous: [R1] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string;
}, selectors: [(state: State) => R1]): [(state: State) => DefaultValue, (val: DefaultValue) => void, (state: State) => number | null];
export declare function createSubscription<R1, R2, AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [R1, R2], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [R1, R2], store: Store<State>) => void;
    onInputsChanged?: (current: [R1, R2], previous: [R1, R2] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string;
}, selectors: [(state: State) => R1, (state: State) => R2]): [(state: State) => DefaultValue, (val: DefaultValue) => void, (state: State) => number | null];
export declare function createSubscription<R1, R2, R3, AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [R1, R2, R3], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [R1, R2, R3], store: Store<State>) => void;
    onInputsChanged?: (current: [R1, R2, R3], previous: [R1, R2, R3] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3]): [(state: State) => DefaultValue, (val: DefaultValue) => void, (state: State) => number | null];
export declare function createSubscription<R1, R2, R3, R4, AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [R1, R2, R3, R4], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [R1, R2, R3, R4], store: Store<State>) => void;
    onInputsChanged?: (current: [R1, R2, R3, R4], previous: [R1, R2, R3, R4] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4]): [(state: State) => DefaultValue, (val: DefaultValue) => void, (state: State) => number | null];
export declare function createSubscription<R1, R2, R3, R4, R5, AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [R1, R2, R3, R4, R5], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [R1, R2, R3, R4, R5], store: Store<State>) => void;
    onInputsChanged?: (current: [R1, R2, R3, R4, R5], previous: [R1, R2, R3, R4, R5] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5]): [(state: State) => DefaultValue, (val: DefaultValue) => void, (state: State) => number | null];
export declare function createSubscription<R1, R2, R3, R4, R5, R6, AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [R1, R2, R3, R4, R5, R6], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [R1, R2, R3, R4, R5, R6], store: Store<State>) => void;
    onInputsChanged?: (current: [R1, R2, R3, R4, R5, R6], previous: [R1, R2, R3, R4, R5, R6] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6]): [(state: State) => DefaultValue, (val: DefaultValue) => void, (state: State) => number | null];
export declare function createSubscription<R1, R2, R3, R4, R5, R6, R7, AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [R1, R2, R3, R4, R5, R6, R7], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [R1, R2, R3, R4, R5, R6, R7], store: Store<State>) => void;
    onInputsChanged?: (current: [R1, R2, R3, R4, R5, R6, R7], previous: [R1, R2, R3, R4, R5, R6, R7] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7]): [(state: State) => DefaultValue, (val: DefaultValue) => void, (state: State) => number | null];
export declare function createSubscription<R1, R2, R3, R4, R5, R6, R7, R8, AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [R1, R2, R3, R4, R5, R6, R7, R8], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [R1, R2, R3, R4, R5, R6, R7, R8], store: Store<State>) => void;
    onInputsChanged?: (current: [R1, R2, R3, R4, R5, R6, R7, R8], previous: [R1, R2, R3, R4, R5, R6, R7, R8] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8]): [(state: State) => DefaultValue, (val: DefaultValue) => void, (state: State) => number | null];
export declare function createSubscription<R1, R2, R3, R4, R5, R6, R7, R8, R9, AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [R1, R2, R3, R4, R5, R6, R7, R8, R9], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [R1, R2, R3, R4, R5, R6, R7, R8, R9], store: Store<State>) => void;
    onInputsChanged?: (current: [R1, R2, R3, R4, R5, R6, R7, R8, R9], previous: [R1, R2, R3, R4, R5, R6, R7, R8, R9] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8, (state: State) => R9]): [(state: State) => DefaultValue, (val: DefaultValue) => void, (state: State) => number | null];
export declare function createSubscription<R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10], store: Store<State>) => void;
    onInputsChanged?: (current: [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10], previous: [R1, R2, R3, R4, R5, R6, R7, R8, R9, R10] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string;
}, selectors: [(state: State) => R1, (state: State) => R2, (state: State) => R3, (state: State) => R4, (state: State) => R5, (state: State) => R6, (state: State) => R7, (state: State) => R8, (state: State) => R9, (state: State) => R10]): [(state: State) => DefaultValue, (val: DefaultValue) => void, (state: State) => number | null];
