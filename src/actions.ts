export const PROMISE_RESOLVED = 'ASYNC_SELECTOR_PROMISE_RESOLVED';
export const PROMISE_REJECTED = 'ASYNC_SELECTOR_PROMISE_REJECTED';

export function promiseResolved(result: any, took: number, id: string | undefined) {
  return {
    type: PROMISE_RESOLVED,
    id,
    result,
    took,
  };
}

export function promiseRejected(error, id: string | undefined) {
  return {
    type: PROMISE_REJECTED,
    id,
    error,
  };
}