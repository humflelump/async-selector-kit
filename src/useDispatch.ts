let dispatch: Function = (action: object) => {
  throw new Error('A reference to a dispatch function must be supplied with useDispatch().')
};
const dispatcherMapping = {};

export const getDispatcher = (id: string) => {
  if (id in dispatcherMapping) {
    return dispatcherMapping[id];
  }
  return dispatch;
}

export function useDispatch(dispatcher: Function, id?: string) {
  if (typeof id === 'string') {
    dispatcherMapping[id] = dispatcher;
  } else {
    dispatch = dispatcher;
  }
};