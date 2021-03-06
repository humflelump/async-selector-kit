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
export function createThrottledSelector<State${n == 0 ? '' : ', '}${list(n).map(n => `R${n}`).join(', ')}, SyncReturn>(
  selectors: [${list(n).map(n => `(state: State) => R${n}`).join(', ')}],
  func: (${list(n).map(n => `val${n}: R${n}`).join(', ')}) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): (state: State) => SyncReturn

export function createThrottledSelector<State${n == 0 ? '' : ','}${list(n).map(n => `R${n}`).join(', ')}, SyncReturn, Props>(
  selectors: [${list(n).map(n => `(state: State, props: Props) => R${n}`).join(', ')}],
  func: (${list(n).map(n => `val${n}: R${n}`).join(', ')}) => SyncReturn,
  throttleFunc: (f: Function) => Function,
  id?: string,
): (state: State, props: Props) => SyncReturn
`
}

var L = []
for (let i = 0; i < 11; i++) {
  L.push(makeType(i))
}
L.join('')
