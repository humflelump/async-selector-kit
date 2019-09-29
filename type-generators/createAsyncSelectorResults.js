var list = n => {
  const L = []
  for (let i = 1; i <= n; i++) {
    L.push(i)
  }
  return L
}

// prettier-ignore
function makeType (n) {
  return `
export function createAsyncSelectorResults<AsyncReturn, State, ${list(n).map(n => `R${n}`)}${n == 0 ? '' : ', '}Props = undefined, DefaultValue = []>(params: {
  async: (${list(n).map(n => `val${n}: R${n}`).join(', ')}) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (${list(n).map(n => `val${n}: R${n}`).join(', ')}) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [${list(n).map(n => `(state: State) => R${n}`).join(', ')}]): [
    (state: State) => AsyncReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | null,
    (state: State) => void
  ];
  
export function createAsyncSelectorResults<AsyncReturn, State, ${list(n).map(n => `R${n}`)}${n == 0 ? '' : ', '}Props = undefined, DefaultValue = []>(params: {
  async: (${list(n).map(n => `val${n}: R${n}`).join(', ')}) => Promise<AsyncReturn>;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (${list(n).map(n => `val${n}: R${n}`).join(', ')}) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [${list(n).map(n => `(state: State, props: Props) => R${n}`).join(', ')}]): [
    (state: State, props: Props) => AsyncReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | null,
    (state: State, props: Props) => void
  ];
`
}

var L = []
for (let i = 0; i < 11; i++) {
  L.push(makeType(i))
}
L.join('')
