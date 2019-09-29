var result = `
export function throttleSelector<State, Return>(
  selector: (state: State) => Return,
  throttleFunction: (f: Function) => Function,
  id?: string
): (state: State) => Return;

export function throttleSelector<State, Props, Return, R1>(
  selector: (state: State) => Return,
  throttleFunction: (f: Function) => Function,
  id?: string
): (state: State, props: Props) => Return
`
