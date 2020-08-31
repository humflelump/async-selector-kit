import { throttleSelectorResults } from "./throttleSelectorResults";

export function throttleSelector<State, Return>(
  selector: (state: State) => Return,
  throttleFunction: (f: Function) => Function,
  id?: string
): (state: State) => Return;

export function throttleSelector<State, Props, Return>(
  selector: (state: State, props: Props) => Return,
  throttleFunction: (f: Function) => Function,
  id?: string
): (state: State, props: Props) => Return;

export function throttleSelector(selector, throttleFunction, id?: string) {
  return throttleSelectorResults(selector, throttleFunction, id)[0];
}
