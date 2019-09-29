This library is built on top of [async-selector](https://github.com/humflelump/async-selector). The goal of this library is:
1. **Provide a set of functions to simplify development using async-selector**
2. **Ensure these functions are well tested and have full typescript support**

# Installation
```
yarn add async-selector-kit
```
# Glossary
* [createAsyncSelectorResults()](https://github.com/humflelump/async-selector-kit/wiki#createasyncselectorresultsparams-selectors-value-waiting-error-forceupdate)
* [createThrottledSelector()](https://github.com/humflelump/async-selector-kit/wiki#createthrottledselectorselectors-func-throttler-id-selector)
* [throttleSelector()](https://github.com/humflelump/async-selector-kit/wiki#throttleselectorselector-throttler-id-selector)
* [createAsyncSelectorWithCache()](https://github.com/humflelump/async-selector-kit/wiki#createasyncselectorwithcacheparams-selectors-value-waiting-error-forceupdate)
* [useDispatch()](https://github.com/humflelump/async-selector-kit/wiki#usedispatchdispatcher-function-id-string-void)
* [createReducer()](https://github.com/humflelump/async-selector-kit/wiki#createreducer-state---action--state)
* [Miscellaneous](https://github.com/humflelump/async-selector-kit/wiki#miscellaneous)

# Getting Started
Before creating new async selectors, you must do two things. You must provide a reference to a dispatch function so re-render actions can be generated. You must have your reducer handle these actions.
```js
import { combineReducers, createStore } from "redux";
import { useDispatch, createReducer } from "async-selector-kit";

const rootReducer = combineReducers({
  // Your other sub-reducers go here ...
  AsyncSelector: createReducer(),
});

export const store = createStore(rootReducer);
useDispatch(store.dispatch);
```

With that set up, you can start creating async selectors. Here is basic example:
```js
import { createAsyncSelectorResults } from "async-selector-kits";

// Your real request code goes here. This is just for example.
const getEmployees = searchText => {
  return new Promise((resolve) => {
    const database = ["Mark Metzger", "Steve Miller"];
    setTimeout(() => {
      resolve(database.filter(name => searchText.includes(name)));
    }, 1000);
  });
};

const [employees, isLoading, error] = createAsyncSelectorResults({
  async: getEmployees,
  id: 'myFirstAsyncSelector',
  defaultValue: []
}, [state => state.searchText]);

// employees(state) returns the last value returned from the async function or the defaultValue if it has not yet successfully returned a value
// isLoading(state) return a boolean for if the async function is pending
// error(state) returns the error created by async function or null if there was no error
```

# API

## createAsyncSelectorResults(params, selectors): [value, waiting, error, forceUpdate]
This is the main function exposed by the library, and it provides the basic functionality for creating async selectors. The basic idea is that you pass in a list of selectors and an async function (instead of a normal function as in reselect). It outputs three selectors to access the result of the function. Whenever, the promise resolves or rejects, an action is dispatched behind the scenes which triggers the application to render the new data.

### Example
```js
const [employees, isLoading, error, forceUpdate] = createAsyncSelectorResults({
  async: getEmployees,
  id: 'myFirstAsyncSelector',
  defaultValue: [],
  onResolve: employees => console.log(employees),
  onReject: error => console.log(error),
  onCancel: cancelledPromise => console.log(cancelledPromise),
  throttle: f => _.debounce(f, 250),
  shouldUseAsync: text => text !== '',
}, [state => state.searchText]);
```

### selectors: Selector[] = []
The second parameter is an array of selectors to be used to generate the value passed into the async function.

### params.async: (...values) => Promise
The async function used to generate the returned selectors. The return values of the selectors are passed into the function and it will be all any time any of the values changes.

### id?: string
An identifier which will be passed into the generated actions and is useful for debugging. The id must be unique.

### defaultValue: any = []
If the promise has not yet resolved, this value will be returned instead.

### onResolve?: (result: AsyncReturn) => void
A callback for when the promise resolved. This is called after the action was dispatched.

### onReject?: (error: Error) => void
A callback for when the promise rejects. This is called after the action was dispatched.

### onCancel?: (promise: Promise) => void
A callback for when a promise is cancelled because a new promise was generated before the first one finished.

### throttle?: (f: Function) => Function
This provides a method for limiting how often the async function is called. For example, you might want to debounce queries so the server only gets a request after the user stops typing. Commonly, this will be achieved using lodash's debounce and throttle functions.

### shouldUseAsync?: (...values) => boolean
This provides a method to stop calling the async function if some condition is not met. If this returns false, the async selector will be in the waiting state. The return values of the selectors are passed into this function.

### Return Values:

### value: (state: State) => Result | DefaultValue
A selector used to access the return value of the async function. If there was no return value yet, it will return the defaultValue (or empty list if that was not defined).

### waiting: (state: State) => boolean
A selector used to access if the promise is in the pending state

### error: (state: State) => Error | null
A Selector used to access the error the promise returned. It returns null if the promise did not reject.

### forceUpdate: (state: State) => void
This will force the async function to be called even if the state was not changed. This is useful if you know the data in the database has changed.

## createThrottledSelector(selectors, func, throttler, id?): selector
A powerful technique async selectors allow you to use is delaying expensive calculations so they don't negative effect user experience. This function is very similar to reselect's createSelector except you pass in an additional throttle function. When the expensive function is ready to be computed, a re-render action will be dispatched. If the function is very expensive, you may want to consider using an async function that calls a web worker instead so it is non-blocking.

### Example
```js
import { createThrottledSelector } from "async-selector-kit";
import _ from "underscore";

function expensiveFunction(text) {
  for (let i = 0; i < 10000; i++) {
    text += text;
  }
  return text;
}

// The calculation will only be triggered if searchText hasn't changed for 500ms (the first calculation will be done no matter what)
// the selector will return the last computed value
export const text10000 = createThrottledSelector(
  [state => state.searchText],
  expensiveFunction,
  f => _.debounce(f, 500),
  'myThrottledSelector'
);
```

## throttleSelector(selector, throttler, id?): selector
This function is slightly different from createThrottledSelector and is useful for when you need both the original selector and a throttled version of it. For example you might want to do an expensive calculation after the user is done typing but you don't want to make the textfield rendering debounced.

### Example
```js
import { throttleSelector } from "async-selector-kit";
import _ from "underscore";
import { createSelector } from "reselect";

function expensiveFunction(text) {
  for (let i = 0; i < 10000; i++) {
    text += text;
  }
  return text;
}

// This selector can be used by the textfield component
const getText = state => state.searchText;

const throttledText = throttleSelector(getText, f => _.debounce(f, 250), 'getText');

// This selector will only re-compute if the user hasn't typed for 250ms.
const text10000 = createSelector([throttledText], expensiveFunction);
```

## createAsyncSelectorWithCache(params, selectors): [value, waiting, error, forceUpdate]
Sometimes you will want to implement a client-side cache to prevent unnecessary requests. This is perfectly doable with async selectors but there is minor flaw. A re-render action will always be dispatched, even if the data is already cached and can be obtained synchronously. This function solves that problem. The function is the exact same as createAsyncSelectorResults() except it takes in an addition getCache() argument. If getCache() returns a truthy value, the async function will never get called, and the cache is returned instead.

### Example
```js
class CachedApi {
  constructor () {
    this.db = {
      mark: 'metzger',
      project: 'euler'
    }
    this.cache = {}
  }

  getCache (name) {
    return this.cache[name]
  }

  async getName (name) {
    await new Promise(res => setTimeout(res, 50))
    const result = this.db[name]
    this.cache[name] = result
    return result
  }
}
const api = new CachedApi()

const [getValue, waiting, error] = createAsyncSelectorWithCache(
  {
    async: (name, cachedResult) => api.getName(name),
    getCache: name => api.getCache(name),
    defaultValue: null
  },
  [state => state.name]
)
```
## useDispatch(dispatcher: Function, id?: string): void
This function gives the package the ability to dispatch actions. Not calling useDispatch() will cause an error to be thrown. If you would like to pass a dispatch function to a specific async selector, you can use the optional id parameter.

### Example
```js
import { combineReducers, createStore } from "redux";
import { useDispatch, createReducer } from "async-selector-kit";
import _ from "underscore";

const rootReducer = combineReducers({
  // Your other sub-reducers go here ...
  AsyncSelector: createReducer(),
});

export const store = createStore(rootReducer);
// This trick may be useful in some apps.
// This will prevent re-render events from firing to close together causing over-rendering
const throttledDispatch = _.throttle(store.dispatch, 50);
useDispatch(throttledDispatch);
```
## createReducer(): (state = {}, action) => state 
This a very simple function which returns a sub-reducer designed to be used in conjunction with combineReducers(). You don't have to use this function. You are free to handle the re-render actions generated by the library however you choose. The only requirement is that your reducer should alway return a reference to a new state or else the app will not correctly re-render. It also strongly discouraged to access any data in the re-render actions as the async selectors should represent the "single source of truth".

### Example
```js
import { combineReducers } from "redux";
import { createReducer } from "async-selector-kit";

const rootReducer = combineReducers({
  // Your other sub-reducers go here ...
  AsyncSelector: createReducer(),
});
```
Alternatively, an example without using createReducer():
```js
import { combineReducers } from "redux";
import { PROMISE_RESOLVED, PROMISE_REJECTED } from "async-selector-kit";

const subReducers = combineReducers({
  // Your sub-reducers go here ...
});

const rootReducer = (state, action) => {
  if (action.type === PROMISE_RESOLVED || action.type === PROMISE_REJECTED) {
    return { ...state };
  }
  return subReducers(state, action);
}
```
An example showing how you can log errors generated async selectors.
```js
import { PROMISE_REJECTED } from "redux-starter-kit";

const loggerMiddleware = store => next => action => {
  let result = next(action)
  if (action.type === PROMISE_REJECTED) {
    // Alternatively, you could show the error to the user by dispatching another action, or send the actions to a DB.
    console.log(action.error)
  }
  return result
}
```

## Miscellaneous

### createThrottledSelectorResults(selectors, func, throttleFunc, id?): [getValue, waiting]
Exact same as createThrottledSelector() except it returns a tuple containing both the value and the waiting state

### throttleSelectorResults(selector, throttleFunc, id?): [getValue, waiting]
Exact same as throttleSelector() except it returns a tuple containing both the value and the waiting state

### promiseResolved(result: any, took: number, id? string): ActionObject
Generates an action object representing a promise resolution

### promiseRejected(error: any, id?: string: ActionObject
Generates an action object representing a promise rejection

### createSelector(...selectors, func): Selector
A re-export from the reselect library

### createAsyncSelector(params, ...selectors): Selector
A re-export from the async-selector library