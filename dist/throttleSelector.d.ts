export declare function throttleSelector<State, Return>(selector: (state: State) => Return, throttleFunction: (f: Function) => Function, id?: string): (state: State) => Return;
export declare function throttleSelector<State, Props, Return>(selector: (state: State, props: Props) => Return, throttleFunction: (f: Function) => Function, id?: string): (state: State, props: Props) => Return;
