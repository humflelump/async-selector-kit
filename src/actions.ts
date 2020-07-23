export const PROMISE_RESOLVED = "ASYNC_SELECTOR_PROMISE_RESOLVED";
export const PROMISE_REJECTED = "ASYNC_SELECTOR_PROMISE_REJECTED";
export const ACTION_STARTED = "ASYNC_SELECTOR_ACTION_STARTED";
export const ACTION_FINISHED = "ASYNC_SELECTOR_ACTION_FINISHED";
export const SUBSCRIPTION_UPDATED = "ASYNC_SELECTOR_SUBSCRIPTION_UPDATED";

export function promiseResolved(
  result: any,
  took: number,
  id: string | undefined
) {
  return {
    type: PROMISE_RESOLVED,
    id,
    result,
    took
  };
}

export function promiseRejected(error: any, id: string | undefined) {
  return {
    type: PROMISE_REJECTED,
    id,
    error
  };
}

export function actionStarted(
  inputs: any[],
  callId: number,
  id: string | undefined
) {
  return {
    type: ACTION_STARTED,
    id,
    inputs,
    callId
  };
}

export function actionEnded(
  result: any,
  callId: number,
  took: number,
  id: string | undefined
) {
  return {
    type: ACTION_FINISHED,
    id,
    result,
    took,
    callId
  };
}

export function subscriptionUpdated(value: any, id: string | undefined) {
  return {
    type: SUBSCRIPTION_UPDATED,
    value,
    id
  };
}
