var result = `
export function throttleSelectorResults<State, Return>(
  selector: (state: State) => Return,
  throttleFunction: (f: Function) => Function,
  id?: string
): [
    (state: State) => Return,
    (state: State) => boolean
  ];

export function throttleSelectorResults<State, Props, Return, R1>(
  selector: (state: State) => Return,
  throttleFunction: (f: Function) => Function,
  id?: string
): [
    (state: State, props: Props) => Return,
    (state: State, props: Props) => boolean
  ];
`
