let dispatch: Function = (action: object) => {
  throw new Error('A reference to a dispatch function must be supplied with useDispatch().')
};

export const getDispatcher = () => dispatch;

export function useDispatch(dispatcher: Function) {
  dispatch = dispatcher;
};