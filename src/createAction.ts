import { getDispatcher } from "./useDispatch";

export function createAction<ReturnType>(
  func: (dispatch: (action: object) => any) => Promise<ReturnType>
): [() => Promise<ReturnType | undefined>, () => boolean, () => Error | null];

export function createAction<ReturnType, A1>(
  func: (dispatch: (action: object) => any, i1: A1) => Promise<ReturnType>
): [
  (r1: A1) => Promise<ReturnType | undefined>,
  () => boolean,
  () => Error | null
];

export function createAction<ReturnType, A1, A2>(
  func: (
    dispatch: (action: object) => any,
    i1: A1,
    i2: A2
  ) => Promise<ReturnType>
): [
  (r1: A1, r2: A2) => Promise<ReturnType | undefined>,
  () => boolean,
  () => Error | null
];

export function createAction<ReturnType, A1, A2, A3>(
  func: (
    dispatch: (action: object) => any,
    i1: A1,
    i2: A2,
    i3: A3
  ) => Promise<ReturnType>
): [
  (r1: A1, r2: A2, r3: A3) => Promise<ReturnType | undefined>,
  () => boolean,
  () => Error | null
];

export function createAction<ReturnType, A1, A2, A3, A4>(
  func: (
    dispatch: (action: object) => any,
    i1: A1,
    i2: A2,
    i3: A3,
    i4: A4
  ) => Promise<ReturnType>
): [
  (r1: A1, r2: A2, r3: A3, r4: A4) => Promise<ReturnType | undefined>,
  () => boolean,
  () => Error | null
];

export function createAction<ReturnType, A1, A2, A3, A4, A5>(
  func: (
    dispatch: (action: object) => any,
    i1: A1,
    i2: A2,
    i3: A3,
    i4: A4,
    i5: A5
  ) => Promise<ReturnType>
): [
  (r1: A1, r2: A2, r3: A3, r4: A4, r5: A5) => Promise<ReturnType | undefined>,
  () => boolean,
  () => Error | null
];

export function createAction<ReturnType, A1, A2, A3, A4, A5, A6>(
  func: (
    dispatch: (action: object) => any,
    i1: A1,
    i2: A2,
    i3: A3,
    i4: A4,
    i5: A5,
    i6: A6
  ) => Promise<ReturnType>
): [
  (
    r1: A1,
    r2: A2,
    r3: A3,
    r4: A4,
    r5: A5,
    r6: A6
  ) => Promise<ReturnType | undefined>,
  () => boolean,
  () => Error | null
];

export function createAction<ReturnType, A1, A2, A3, A4, A5, A6, A7>(
  func: (
    dispatch: (action: object) => any,
    i1: A1,
    i2: A2,
    i3: A3,
    i4: A4,
    i5: A5,
    i6: A6,
    i7: A7
  ) => Promise<ReturnType>
): [
  (
    r1: A1,
    r2: A2,
    r3: A3,
    r4: A4,
    r5: A5,
    r6: A6,
    r7: A7
  ) => Promise<ReturnType | undefined>,
  () => boolean,
  () => Error | null
];

export function createAction<ReturnType, A1, A2, A3, A4, A5, A6, A7, A8>(
  func: (
    dispatch: (action: object) => any,
    i1: A1,
    i2: A2,
    i3: A3,
    i4: A4,
    i5: A5,
    i6: A6,
    i7: A7,
    i8: A8
  ) => Promise<ReturnType>
): [
  (
    r1: A1,
    r2: A2,
    r3: A3,
    r4: A4,
    r5: A5,
    r6: A6,
    r7: A7,
    r8: A8
  ) => Promise<ReturnType | undefined>,
  () => boolean,
  () => Error | null
];

export function createAction<ReturnType, A1, A2, A3, A4, A5, A6, A7, A8, A9>(
  func: (
    dispatch: (action: object) => any,
    i1: A1,
    i2: A2,
    i3: A3,
    i4: A4,
    i5: A5,
    i6: A6,
    i7: A7,
    i8: A8,
    i9: A9
  ) => Promise<ReturnType>
): [
  (
    r1: A1,
    r2: A2,
    r3: A3,
    r4: A4,
    r5: A5,
    r6: A6,
    r7: A7,
    r8: A8,
    r9: A9
  ) => Promise<ReturnType | undefined>,
  () => boolean,
  () => Error | null
];

export function createAction<
  ReturnType,
  A1,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  A10
>(
  func: (
    dispatch: (action: object) => any,
    i1: A1,
    i2: A2,
    i3: A3,
    i4: A4,
    i5: A5,
    i6: A6,
    i7: A7,
    i8: A8,
    i9: A9,
    i10: A10
  ) => Promise<ReturnType>
): [
  (
    r1: A1,
    r2: A2,
    r3: A3,
    r4: A4,
    r5: A5,
    r6: A6,
    r7: A7,
    r8: A8,
    r9: A9,
    r10: A10
  ) => Promise<ReturnType | undefined>,
  () => boolean,
  () => Error | null
];

export function createAction(func: any): any {
  let isWaiting = false;
  let error = null;
  let id = 0;
  const dispatch = getDispatcher("createAction");
  const action = async (...params) => {
    const thisId = ++id;
    isWaiting = true;
    error = null;
    let result = undefined;
    try {
      result = await func(dispatch, ...params);
    } catch (e) {
      if (id === thisId) {
        error = e;
      }
    }
    if (id === thisId) {
      isWaiting = false;
    }
    return result;
  };
  return [action, () => isWaiting, () => error];
}
