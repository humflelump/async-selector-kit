var list = n => {
  const L = [];
  for (let i = 1; i <= n; i++) {
    L.push(i);
  }
  return L;
};

// prettier-ignore
function makeType (n) {
  return `
  export function createAction<ReturnType${n === 0 ? '' : ', '}${list(n).map(n => `A${n}`).join(', ')}>(
    func: (
      dispatch: (action: object) => any, ${list(n).map(n => `i${n}: A${n}`).join(', ')}
    ) => Promise<ReturnType>
  ): [
    (${list(n).map(n => `r${n}: A${n}`).join(', ')}) => Promise<ReturnType | undefined>,
    () => boolean,
    () => Error | null
  ];
`
}

var L = [];
for (let i = 0; i < 11; i++) {
  L.push(makeType(i));
}
L.join("");
