import { PromiseStatus } from "./types";

type AsyncFunction = (...params: any[]) => Promise<any>

export function abortableFetch<F extends AsyncFunction>(
  status: PromiseStatus | undefined,
  f: F,
): F {
  const newFn = (url, params, ...extra) => new Promise<any>((resolve, reject) => {
    if (status && status.cancelled) {
      return reject(Error('Cancelled'));
    }
    const controller = new AbortController();
    const signal = controller.signal;
    const newParams = {
      ...(params || {}),
      signal
    }
    if (status) {
      const currentOnCancel = status.onCancel;
      const newOnCancel = () => {
        currentOnCancel();
        controller.abort();
      }
      status.onCancel = newOnCancel;
    }
    return f(url, newParams, ...extra).then(resolve).catch(reject);
  });
  return newFn as F;
}


export function cancellable<F extends AsyncFunction>(
  status: PromiseStatus | undefined,
  f: F,
): F {
  const newFn = (...args) => new Promise<any>((resolve, reject) => {
    if (status && status.cancelled) {
      return reject(Error('Cancelled'));
    }
    return f(...args).then(resolve).catch(reject);
  });
  return newFn as F;
}