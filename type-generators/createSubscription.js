var ar = n => {
  const L = [];
  for (let i = 1; i <= n; i++) {
    L.push(i);
  }
  return L;
};

// prettier-ignore
function makeType (n) {
    return `
export function createSubscription<${ar(n).map(i => `R${i}`).join(', ')}${n > 0 ? ', ' : ''}AsyncReturn, State, Props = undefined, DefaultValue = undefined>(params: {
    onSubscribe?: (inputs: [${ar(n).map(i => `R${i}`).join(', ')}], store: Store<State>) => void;
    onUnsubscribe?: (inputs: [${ar(n).map(i => `R${i}`).join(', ')}], store: Store<State>) => void;
    onInputsChanged?: (current: [${ar(n).map(i => `R${i}`).join(', ')}], previous: [${ar(n).map(i => `R${i}`).join(', ')}] | null) => void;
    onSelectorCalled?: (state: State) => void;
    defaultValue: DefaultValue;
    id?: string,
    }, selectors${n > 0 ? '' : '?'}: [${ar(n).map(i => `(state: State) => R${i}`).join(', ')}]): [
        (state: State) => DefaultValue,
        (val: DefaultValue) => void
    ];
  `
  }

var L = [];
for (let i = 0; i < 11; i++) {
  L.push(makeType(i));
}
L.join("");
