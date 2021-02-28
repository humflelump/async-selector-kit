import {
  createAsyncSelectorResults,
  throttleSelectorResults,
  createSelector,
  createAsyncSelectorWithCache,
  createThrottledSelectorResults,
  createAsyncAction,
  createMiddleware,
  ACTION_STARTED,
  ACTION_FINISHED
} from "../dist/index";

/* random underscore functions */
const _ = {};

var restArguments = function (func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function () {
    var length = Math.max(arguments.length - startIndex, 0);

    var rest = Array(length);

    var index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0:
        return func.call(this, rest);
      case 1:
        return func.call(this, arguments[0], rest);
      case 2:
        return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
};

_.delay = restArguments(function (func, wait, args) {
  return setTimeout(function () {
    return func.apply(null, args);
  }, wait);
});

_.now =
  Date.now ||
  function () {
    return new Date().getTime();
  };

_.debounce = function (func, wait, immediate) {
  var timeout, result;

  var later = function (context, args) {
    timeout = null;
    if (args) result = func.apply(context, args);
  };

  var debounced = restArguments(function (args) {
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(later, wait);
      if (callNow) result = func.apply(this, args);
    } else {
      timeout = _.delay(later, wait, this, args);
    }

    return result;
  });

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  return debounced;
};

_.throttle = function (func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function () {
    previous = options.leading === false ? 0 : _.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function () {
    var now = _.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
};

test("Tests Work", done => {
  expect(true).toBe(true);
  done();
});

function makeMiddleware(dispatcher) {
  createMiddleware()({ dispatch: dispatcher });
}

test("Basic createAsyncSelectorResults example", done => {
  let state = {
    text: "hello"
  };

  let generatedAction;
  const dispatch = action => {
    generatedAction = action;
  };
  makeMiddleware(dispatch);
  let count = 0;
  const [getValue, waiting, error] = createAsyncSelectorResults(
    {
      async: async function exampleApi(text) {
        await new Promise(res => setTimeout(res, 25));
        count += 1;
        return "hi " + text;
      }
    },
    [state => state.text]
  );

  expect(getValue({ ...state })).toEqual([]);
  expect(getValue({ ...state })).toEqual([]);
  expect(waiting({ ...state })).toEqual(true);
  expect(waiting({ ...state })).toEqual(true);
  expect(error({ ...state })).toEqual(null);
  setTimeout(() => {
    try {
      expect(getValue({ ...state })).toBe("hi hello");
      expect(getValue({ ...state })).toBe("hi hello");
      expect(waiting({ ...state })).toEqual(false);
      expect(error({ ...state })).toEqual(null);
      expect(count).toBe(1);
      expect(generatedAction.result).toBe("hi hello");
      state = { ...state, text: "new" };
      expect(getValue({ ...state })).toEqual("hi hello");
      expect(waiting({ ...state })).toEqual(true);
      expect(error({ ...state })).toEqual(null);
      setTimeout(() => {
        expect(getValue({ ...state })).toEqual("new hello");
        expect(generatedAction.result).toBe("new hello");
        expect(waiting({ ...state })).toEqual(false);
        expect(error({ ...state })).toEqual(null);
      }, 50);
    } catch (e) {
      done.fail(e);
    }
    done();
  }, 50);
});

test("createAsyncSelectorResults onResolve, onReject, onCancel", done => {
  let state = {
    text: "hello"
  };

  let generatedAction;
  const dispatch = action => {
    generatedAction = action;
  };
  makeMiddleware(dispatch);
  let count = 0;
  let resolved, rejected, cancelled, cancelledText, cancelledBool
  const [getValue, waiting, error] = createAsyncSelectorResults(
    {
      async: async function exampleApi(text, status) {
        status.onCancel = () => {
          cancelledText = text;
          cancelledBool = status.cancelled;
        }
        if (text.length > 10) {
          throw new Error("Text to long");
        }
        await new Promise(res => setTimeout(res, 25));
        count += 1;
        return "hi " + text;
      },
      onResolve: val => {
        resolved = val;
      },
      onReject: val => {
        rejected = val;
      },
      onCancel: val => {
        cancelled = val;
      },
      defaultValue: null
    },
    [state => state.text]
  );

  expect(getValue({ ...state })).toBe(null);
  expect(count).toBe(0);
  expect(cancelled || resolved || rejected).toBeFalsy();
  expect(cancelledBool).toBe(undefined);
  expect(cancelledText).toBe(undefined);
  setTimeout(() => {
    expect(getValue({ ...state })).toBe("hi hello");
    expect(getValue({ ...state })).toBe("hi hello");
    expect(waiting({ ...state })).toEqual(false);
    expect(error({ ...state })).toEqual(null);
    expect(count).toBe(1);
    expect(generatedAction.result).toBe("hi hello");
    expect(resolved).toBe("hi hello");
    state = { ...state, text: "new" };
    expect(getValue({ ...state })).toBe("hi hello");
    expect(waiting({ ...state })).toBe(true);
    expect(Boolean(cancelled)).toBe(false);
    state = { ...state, text: "new2" };
    expect(getValue({ ...state })).toBe("hi hello");
    expect(cancelledBool).toBe(true);
    expect(cancelledText).toBe('new');
    expect(waiting({ ...state })).toBe(true);
    expect(Boolean(cancelled.then)).toBe(true);
    state = { ...state, text: "errorerrorerror" };
    expect(getValue({ ...state })).toBe("hi hello");
    expect(waiting({ ...state })).toBe(true);
    expect(cancelledBool).toBe(true);
    expect(cancelledText).toBe('new2');
    setTimeout(() => {
      try {
        expect(getValue({ ...state })).toBe("hi hello");
        expect(waiting({ ...state })).toBe(false);
        expect(String(error({ ...state }))).toBe("Error: Text to long");
        expect(cancelled.then).toBeTruthy();
        expect(String(rejected)).toBe("Error: Text to long");
        expect(String(generatedAction.error)).toBe("Error: Text to long");
        expect(cancelledBool).toBe(true);
        expect(cancelledText).toBe('new2');
        done();
      } catch (e) {
        done.fail(e);
      }
    }, 50);
  }, 50);
});

test("createAsyncSelectorResults forceUpdate", done => {
  let state = {
    text: "hello"
  };

  let generatedAction;
  const dispatch = action => {
    generatedAction = action;
  };
  makeMiddleware(dispatch);
  let count = 0;
  let concat = "hi ";
  const [getValue, waiting, error, forceUpdate] = createAsyncSelectorResults(
    {
      async: async function exampleApi(text) {
        if (text.length > 10) {
          throw new Error("Text to long");
        }
        await new Promise(res => setTimeout(res, 25));
        count += 1;
        return concat + text;
      }
    },
    [state => state.text]
  );
  expect(getValue({ ...state })).toEqual([]);
  setTimeout(() => {
    try {
      expect(getValue({ ...state })).toEqual("hi hello");
      expect(count).toBe(1);
      concat = "new ";
      forceUpdate({ ...state });
      setTimeout(() => {
        try {
          expect(getValue({ ...state })).toEqual("new hello");
          expect(count).toBe(2);
          done();
        } catch (e) {
          done.fail(e);
        }
      }, 50);
    } catch (e) {
      done.fail(e);
    }
  }, 50);
});


test("createAsyncSelectorResults forceUpdate promise", done => {
  let state = {
    text: "hello"
  };

  let generatedAction;
  const dispatch = action => {
    generatedAction = action;
  };
  makeMiddleware(dispatch);
  let count = 0;
  let concat = "hi ";
  const [getValue, waiting, error, forceUpdate] = createAsyncSelectorResults(
    {
      async: async function exampleApi(text) {
        if (text.length > 10) {
          throw new Error("Text to long");
        }
        await new Promise(res => setTimeout(res, 25));
        count += 1;
        return concat + text;
      }
    },
    [state => state.text]
  );
  console.log('hrumph');
  try {
    expect(getValue({ ...state })).toEqual([]);
    expect(getValue({ ...state })).toEqual([]);
    expect(waiting()).toEqual(true);
    setTimeout(() => {
      try {
        expect(getValue({ ...state })).toEqual('hi hello');
        expect(waiting()).toEqual(false);
        const promise = forceUpdate(state);
        let result = null;
        promise.then(text => {
          result = text;
        })
        setTimeout(() => {
          try {
            expect(result).toEqual(null)
            setTimeout(() => {
              try {
                expect(result).toEqual('hi hello')
                done();
              } catch (e) {
                done.fail(e);
              }
            }, 25);
          } catch (e) {
            done.fail(e);
          }
        }, 10);
      } catch (e) {
        done.fail(e);
      }
    }, 35);
  } catch (e) {
    done.fail(e);
  }
});

test("createAsyncSelectorResults throttle shouldUseAsync", done => {
  let state = {
    text: "hello"
  };

  makeMiddleware(action => null);
  let count = 0;
  const [getValue, waiting, error] = createAsyncSelectorResults(
    {
      async: async function exampleApi(text) {
        if (text.length > 10) {
          throw new Error("Text to long");
        }
        await new Promise(res => setTimeout(res, 25));
        count += 1;
        return "hi " + text;
      },
      shouldUseAsync: text => text.length <= 10,
      throttle: f => _.debounce(f, 200)
    },
    [state => state.text]
  );

  expect(getValue({ ...state })).toEqual([]);
  expect(count).toBe(0);
  setTimeout(() => {
    try {
      expect(getValue({ ...state })).toEqual([]);
      expect(getValue({ ...state })).toEqual([]);
      expect(waiting({ ...state })).toEqual(true);
      expect(error({ ...state })).toEqual(null);
      setTimeout(() => {
        try {
          state = { ...state, text: "new" };
          expect(getValue({ ...state })).toEqual([]);
          expect(getValue({ ...state })).toEqual([]);
          expect(waiting({ ...state })).toEqual(true);
          expect(error({ ...state })).toEqual(null);
          setTimeout(() => {
            try {
              state = { ...state, text: "new" };
              expect(getValue({ ...state })).toEqual([]);
              expect(getValue({ ...state })).toEqual([]);
              expect(waiting({ ...state })).toEqual(true);
              expect(error({ ...state })).toEqual(null);
              setTimeout(() => {
                try {
                  state = { ...state, text: "new" };
                  expect(getValue({ ...state })).toEqual("hi new");
                  expect(getValue({ ...state })).toEqual("hi new");
                  expect(waiting({ ...state })).toEqual(false);
                  expect(error({ ...state })).toEqual(null);
                  setTimeout(() => {
                    try {
                      state = { ...state, text: "errorerrorerror" };
                      expect(getValue({ ...state })).toEqual("hi new");
                      expect(getValue({ ...state })).toEqual("hi new");
                      expect(waiting({ ...state })).toEqual(true);
                      expect(error({ ...state })).toEqual(null);
                      setTimeout(() => {
                        try {
                          state = { ...state, text: "errorerrorerror" };
                          expect(getValue({ ...state })).toEqual("hi new");
                          expect(getValue({ ...state })).toEqual("hi new");
                          expect(waiting({ ...state })).toEqual(true);
                          expect(error({ ...state })).toEqual(null);
                          done();
                        } catch (e) {
                          setTimeout(() => {
                            try {
                              state = { ...state, text: "new2" };
                              expect(getValue({ ...state })).toEqual("hi new");
                              expect(getValue({ ...state })).toEqual("hi new");
                              expect(waiting({ ...state })).toEqual(true);
                              expect(error({ ...state })).toEqual(null);
                              setTimeout(() => {
                                try {
                                  state = { ...state, text: "new2" };
                                  expect(getValue({ ...state })).toEqual(
                                    "hi new2"
                                  );
                                  expect(getValue({ ...state })).toEqual(
                                    "hi new2"
                                  );
                                  expect(waiting({ ...state })).toEqual(false);
                                  expect(error({ ...state })).toEqual(null);
                                  done();
                                } catch (e) {
                                  done.fail(e);
                                }
                              }, 50);
                            } catch (e) {
                              done.fail(e);
                            }
                          }, 50);
                        }
                      }, 300);
                    } catch (e) {
                      done.fail(e);
                    }
                  }, 50);
                } catch (e) {
                  done.fail(e);
                }
              }, 100);
            } catch (e) {
              done.fail(e);
            }
          }, 150);
        } catch (e) {
          done.fail(e);
        }
      }, 50);
    } catch (e) {
      done.fail(e);
    }
  }, 50);
});

test("throttleSelectorResults", done => {
  let state = {
    text: "hello"
  };

  const selector = createSelector([state => state.text], text => {
    return text + " hi";
  });
  const [getValue, waiting] = throttleSelectorResults(selector, f =>
    _.debounce(f, 100)
  );

  expect(waiting()).toBe(false);
  expect(getValue({ ...state })).toBe("hello hi");
  expect(waiting({ ...state, text: "new1" })).toBe(true);
  expect(getValue({ ...state, text: "new1" })).toBe("hello hi");
  expect(waiting({ ...state, text: "new2" })).toBe(true);
  expect(getValue({ ...state, text: "new2" })).toBe("hello hi");
  setTimeout(() => {
    expect(waiting({ ...state, text: "new2" })).toBe(true);
    expect(getValue({ ...state, text: "new2" })).toBe("hello hi");
    setTimeout(() => {
      try {
        expect(waiting({ ...state, text: "new2" })).toBe(false);
        expect(getValue({ ...state, text: "new2" })).toBe("new2 hi");
        expect(waiting({ ...state, text: "new3" })).toBe(true);
        expect(getValue({ ...state, text: "new3" })).toBe("new2 hi");
        expect(waiting({ ...state, text: "new3" })).toBe(true);
        done();
      } catch (e) {
        done.fail(e);
      }
    }, 100);
  }, 50);
});

test("createThrottledSelectorResults", done => {
  let callCount = 0;
  const [getValue, waiting] = createThrottledSelectorResults(
    [state => state.text],
    text => {
      callCount += 1;
      return text + "!";
    },
    f => _.debounce(f, 100)
  );

  expect(callCount).toBe(0);
  expect(getValue({ text: "hello" })).toBe("hello!");
  expect(getValue({ text: "new1" })).toBe("hello!");
  expect(waiting({ text: "new1" })).toBe(true);
  setTimeout(() => {
    expect(getValue({ text: "new1" })).toBe("hello!");
    expect(waiting({ text: "new1" })).toBe(true);
    expect(callCount).toBe(1);
    setTimeout(() => {
      expect(getValue({ text: "new1" })).toBe("new1!");
      expect(waiting({ text: "new1" })).toBe(false);
      expect(callCount).toBe(2);
      expect(getValue({ text: "new1" })).toBe("new1!");
      expect(getValue({ text: "new1" })).toBe("new1!");
      expect(callCount).toBe(2);
      done();
    }, 100);
  }, 50);
});

test("createAsyncSelectorWithCache", done => {
  class Api {
    constructor() {
      this.db = {
        mark: "metzger",
        project: "euler"
      };
      this.cache = {};
    }

    getCache(name) {
      return this.cache[name];
    }

    async getName(name) {
      await new Promise(res => setTimeout(res, 50));
      const result = this.db[name];
      this.cache[name] = result;
      return result;
    }
  }
  const api = new Api();

  const [getValue, waiting, error] = createAsyncSelectorWithCache(
    {
      async: name => api.getName(name),
      getCache: name => api.getCache(name),
      defaultValue: null
    },
    [state => state.name]
  );
  try {
    expect(getValue({ name: "project" })).toEqual(null);
    expect(waiting({ name: "project" })).toEqual(true);
    setTimeout(() => {
      try {
        expect(getValue({ name: "mark" })).toEqual("euler");
        expect(waiting({ name: "mark" })).toEqual(true);
      } catch (e) {
        done.fail(e);
      }
      setTimeout(() => {
        try {
          expect(getValue({ name: "mark" })).toEqual("metzger");
          expect(waiting({ name: "mark" })).toEqual(false);
        } catch (e) {
          done.fail(e);
        }
        setTimeout(() => {
          try {
            expect(getValue({ name: "project" })).toEqual("euler");
            expect(waiting({ name: "project" })).toEqual(false);
            expect(getValue({ name: "mark" })).toEqual("metzger");
            expect(waiting({ name: "mark" })).toEqual(false);
          } catch (e) {
            done.fail(e);
          }
          done();
        }, 100);
      }, 100);
    }, 100);
  } catch (e) {
    done.fail(e);
  }
});

// test("createAsyncSelectorWithSubscription", done => {
//   class ManageSubscription {
//     constructor() {
//       this.counter = 0;
//       this.id = this.counter;
//     }

//     setNewIdCallback(callback) {
//       this.callback = callback;
//     }

//     openSubscription() {
//       this.interval = setInterval(() => {
//         this.id = ++this.counter;
//         this.callback(this.getId);
//       }, 25);
//     }

//     closeSubscription() {
//       clearInterval(this.interval);
//     }

//     getId() {
//       return this.id;
//     }
//   }
//   const manager = new ManageSubscription();

//   const state = {
//     text: "hello"
//   };

//   const [
//     getValue,
//     waiting,
//     error,
//     forceUpdate
//   ] = createAsyncSelectorWithSubscription({
//     async: async () => manager.getId(),
//     onUnsubscribe: () => manager.closeSubscription(),
//     inputsChanged: text => console.log(text)
//   });
//   manager.setNewIdCallback(() => forceUpdate());
// });

test("createAsyncAction", done => {
  const state = {
    name: "mark"
  };
  let cancelCount = 0;
  let store_ = undefined;
  let input_ = undefined;
  const actions = [];
  function createMiddlewareTest() {
    const middleware = createMiddleware();
    const store = {
      getState: () => state,
      dispatch: action => actions.push(action)
    };
    middleware(store)(store.dispatch)({ type: "test" });
  }
  createMiddlewareTest();
  const [action, loading, error] = createAsyncAction({
    id: "my-action",
    async: (store, status) => async input => {
      status.onCancel = () => {
        cancelCount += 1;
      };
      store_ = store;
      input_ = input;
      await new Promise(res => setTimeout(res, 50));
      return input;
    }
  });
  expect(loading(state)).toEqual(false);
  const status = action("hello");
  expect(loading(state)).toEqual(true);
  expect(error(state)).toEqual(undefined);
  expect(status.cancelled).toEqual(false);
  expect(typeof status.onCancel).toEqual("function");
  setTimeout(() => {
    try {
      expect(typeof store_).toEqual("object");
      expect(input_).toEqual("hello");
      action("wow");
      expect(loading(state)).toEqual(true);
      expect(error(state)).toEqual(undefined);
      expect(status.cancelled).toEqual(true);
      expect(cancelCount).toEqual(1);
      action("wow2");
      expect(cancelCount).toEqual(2);
    } catch (e) {
      done.fail(e);
    }
    setTimeout(() => {
      try {
        expect(loading(state)).toEqual(true);
        expect(error(state)).toEqual(undefined);
      } catch (e) {
        done.fail(e);
      }

      setTimeout(() => {
        try {
          expect(loading(state)).toEqual(false);
          expect(actions[1].type).toEqual(ACTION_STARTED);
          expect(actions[2].type).toEqual(ACTION_STARTED);
          expect(actions[3].type).toEqual(ACTION_STARTED);
          expect(actions[4].type).toEqual(ACTION_FINISHED);
          expect(actions[4].result).toEqual("wow2");
          done();
        } catch (e) {
          done.fail(e);
        }
      }, 20);
    }, 40);
  }, 25);
});

test("createAsyncAction should catch error", done => {
  const errorThrowingFunc = async () => {
    await new Promise(res => setTimeout(res, 50));
    throw new Error("Expect this to be caught");
  };

  const [command, loading, error] = createAsyncAction({
    id: "my-action",
    async: (_store, _status) => async () => {
      await errorThrowingFunc();
    }
  });
  command();
  expect(error()).toBeFalsy();
  setTimeout(() => {
    try {
      expect(error()).toBeTruthy();
      expect(loading()).toBeFalsy();
      done();
    } catch (e) {
      done.fail(e);
    }
  }, 75);
});

test("createAsyncAction should work as middleware", done => {
  const actions = [];
  function createMiddlewareTest() {
    const middleware = createMiddleware();
    const store = {
      getState: () => true,
      dispatch: action => null
    };
    return action => middleware(store)(store.dispatch)(action);
  }
  const dispatch = createMiddlewareTest();
  const [command, loading, error] = createAsyncAction({
    id: "my-action",
    async: (_store, _status) => async action => {
      actions.push(action);
      return true;
    },
    subscription: (action, store) => {
      return action.type === "wow";
    }
  });
  const action1 = { type: "wow" };
  const action2 = { type: "omg" };
  const action3 = { type: "wow" };
  dispatch(action1);
  setTimeout(() => {
    dispatch(action2);
    setTimeout(() => {
      dispatch(action3);
      setTimeout(() => {
        try {
          expect(actions.length).toEqual(2);
          expect(actions[0]).toEqual(action1);
          expect(actions[1]).toEqual(action3);
          done();
        } catch (e) {
          done.fail(e);
        }
      }, 10);
    }, 10);
  }, 10);
});

test("createAsyncAction debounced", done => {
  const state = {
    name: "mark"
  };
  let cancelCount = 0;
  let store_ = undefined;
  let input_ = undefined;
  const actions = [];
  function createMiddlewareTest() {
    const middleware = createMiddleware();
    const store = {
      getState: () => state,
      dispatch: action => actions.push(action)
    };
    middleware(store)(store.dispatch)({ type: "test" });
  }
  createMiddlewareTest();
  const [action, loading, error] = createAsyncAction({
    id: "my-action",
    async: (store, status) => async input => {
      status.onCancel = () => {
        cancelCount += 1;
      };
      store_ = store;
      input_ = input;
      await new Promise(res => setTimeout(res, 50));
      return input;
    },
    throttle: f => _.debounce(f, 50)
  });
  expect(loading(state)).toEqual(false);
  const status = action("hello");
  expect(loading(state)).toEqual(false);
  expect(error(state)).toEqual(undefined);
  expect(status.cancelled).toEqual(false);
  expect(typeof status.onCancel).toEqual("function");
  setTimeout(() => {
    // 25
    try {
      expect(store_).toEqual(undefined);
      expect(input_).toEqual(undefined);
      action("wow");
      expect(loading(state)).toEqual(false);
      expect(error(state)).toEqual(undefined);
      expect(status.cancelled).toEqual(false);
      expect(cancelCount).toEqual(0);
      action("wow2");
      expect(cancelCount).toEqual(0);
    } catch (e) {
      done.fail(e);
    }
    setTimeout(() => {
      //40
      try {
        expect(loading(state)).toEqual(false);
        expect(error(state)).toEqual(undefined);
      } catch (e) {
        done.fail(e);
      }

      setTimeout(() => {
        //20
        try {
          expect(loading(state)).toEqual(true);
          expect(actions[1].type).toEqual(ACTION_STARTED);
          expect(actions[1].inputs[0]).toEqual("wow2");
          setTimeout(() => {
            // 50
            try {
              expect(loading(state)).toEqual(false);
              expect(actions[2].type).toEqual(ACTION_FINISHED);
              expect(actions[2].result).toEqual("wow2");
              done();
            } catch (e) {
              done.fail(e);
            }
          }, 50);
        } catch (e) {
          done.fail(e);
        }
      }, 20);
    }, 40);
  }, 25);
});
