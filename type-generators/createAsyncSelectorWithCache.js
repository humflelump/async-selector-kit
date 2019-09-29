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
export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, ${list(n).map(n => `R${n}`)}${n == 0 ? '' : ', '}DefaultValue = []>(params: {
  async: (${list(n).map(n => `val${n}: R${n}`)}${n == 0 ? '' : ', '}cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (${list(n).map(n => `val${n}: R${n}`)}) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (${list(n).map(n => `val${n}: R${n}`)}${n == 0 ? '' : ', '}cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [${list(n).map(n => `(state: State) => R${n}`)}]): [
    (state: State) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State) => boolean,
    (state: State) => any | undefined
  ];

export function createAsyncSelectorWithCache<AsyncReturn, CacheReturn, State, ${list(n).map(n => `R${n}`)}${n == 0 ? '' : ', '}Props, DefaultValue = []>(params: {
  async: (${list(n).map(n => `val${n}: R${n}`)}${n == 0 ? '' : ', '}cache: CacheReturn) => Promise<AsyncReturn>;
  getCache: (${list(n).map(n => `val${n}: R${n}`)}) => CacheReturn;
  onResolve?: (result: AsyncReturn) => void;
  onReject?: (error: any) => void;
  onCancel?: (promise: Promise<AsyncReturn>) => void;
  shouldUseAsync?: (${list(n).map(n => `val${n}: R${n}`)}${n == 0 ? '' : ', '}cache: CacheReturn) => boolean;
  throttle?: (f: Function) => Function;
  id?: string,
  defaultValue?: DefaultValue,
}, selectors: [${list(n).map(n => `(state: State, props: Props) => R${n}`)}]): [
    (state: State, props: Props) => AsyncReturn | CacheReturn | DefaultValue,
    (state: State, props: Props) => boolean,
    (state: State, props: Props) => any | undefined
  ];
`
}

var L = []
for (let i = 0; i < 11; i++) {
  L.push(makeType(i))
}
L.join('')
