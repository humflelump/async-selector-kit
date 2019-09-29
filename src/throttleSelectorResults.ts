import { createAsyncSelectorResults } from './createAsyncSelectorResults';
import { createSelector } from 'reselect';

let createdCount = 0;

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

export function throttleSelectorResults(selector, throttleFunction, id) {
  id = id || 'THROTTLE_SELECTOR_' + (++createdCount);

  const DEFAULT_VALUE = {};
  const [getValue, waiting] = createAsyncSelectorResults(
    {
      async: val => Promise.resolve(val),
      throttle: throttleFunction,
      defaultValue: DEFAULT_VALUE,
      id
    },
    [selector]
  );

  let prev: any = DEFAULT_VALUE;
  const value = createSelector(
    [getValue, selector],
    (a, b) => {
      if (a === DEFAULT_VALUE) {
        if (prev !== DEFAULT_VALUE) return prev;
        prev = b;
        return b;
      } else {
        return a;
      }
    }
  );

  return [value as any, waiting as any];
}
