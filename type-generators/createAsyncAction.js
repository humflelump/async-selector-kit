var ar = n => {
  const L = [];
  for (let i = 1; i <= n; i++) {
    L.push(i);
  }
  return L;
};

// prettier-ignore
function makeType (n, s) {
      return `
    export function createAsyncAction<
      State, PromiseReturn${n > 0 ? ', ' : ''}
      ${ar(n).map(i => `R${i}`).join(', ')}${s > 0 ? ', ' : ''}
      ${ar(s).map(i => `S${i}`).join(', ')}
    >(
      params: {
        async: (store: Store<State>, status: ActionState<PromiseReturn>${s > 0 ? ', ' : ''}${ar(s).map(i => `s${i}: S${i}`).join(', ')}) => (${ar(n).map(i => `val${i}: R${i}`).join(', ')}${n > 0 ? ', ' : ''}) => Promise<PromiseReturn>
        id?: string;
        throttle?: (f: () => any) => (() => any);
      },
      selectors${s > 0 ? '' : '?'}:[${ar(s).map(i => `(state: State) => S${i}`).join(', ')}] 
    ): [
      (${ar(n).map(i => `val${i}: R${i}`).join(', ')}) => ActionState<PromiseReturn>,
      () => boolean,
      () => any | undefined,
    ];
    `
    }

var L = [];
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    L.push(makeType(i, j));
  }
}
L.join("");
