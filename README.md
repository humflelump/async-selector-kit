# Why Async Selectors?

If you understand why regular selectors are important, you already understand the value of async-selectors. As a concrete example, imagine you were implementing a search field with a dropdown, and the search logic is done in the database. A common approach would be to dispatch an action which sets the text and have some middleware (like a saga) subscribe to that action and perform the query. This seems like a reasonable approach, but it has several drawbacks:

1. ) If another developer adds another action which effects the searchText variable like "UNDO" or "CLEAR", they will create a bug if they didn't know that middleware existed. For simple cases like this it may not seem a huge issue, but for complicated situations, in can be difficult to know which state variables should trigger which async requests. For example, if the search results are based on the user, and another developer adds a "Switch User" option, they would almost certainly never think to trigger a new query.

2. ) You may think "Why not have middleware listen to changes in state variables/selectors". That would help, but you lose effortless lazy evaluation. What if the search component is unmounted when the "Switch User" button is clicked? You will send an unnecessary request.

3. ) You have to handle the initial fetch inside components which are very brittle, error prone, and hard to do optimally. For example, what if you have a parent SearchComponent that either renders a SearchDropdown or a LoadingIndicator, and then inside the SearchDropdown, you fetch data on mount if necessary. Seems like a reasonable approach. Unfortunately, if the SearchDropdown ever sends a request, you will get an infinite loop! This is because it will unmount because its loading and then remount and re-fetch data forever. Even after you fix that bug, you will still have duplicate queries when the SearchDropdown component mounts and un-mounts. If you are having such problems in even the simplest cases, clearly it isn't a good idea to manually handle data fetches and caching based on the component life-cycles.

4. ) Boilerplate. May not be profound, but carpel tunnel is a real problem. Having to handle actions, reducers, state variables, etc for every single data fetch is quite a chore and some developers will skip some steps and hope nobody notices. Async selector kit generates convenient selectors for data, loading, and error, allowing you to spend more time actually solving problems rather than writing stupid code. You might be saying "But that's a hack! The app should be a function of state which includes all those variables." Not really. First of all, putting the data in state violates single-source-of-truth principle. The data belongs only in the database. Secondly, it's perfectly fine to encapsulate state inside of react components, and this isn't that different. Finally what if you implement persisting the state and reloading it back (like using redux-persist). If you don't blacklist those 3 variables (data, loading, error), you will have actually created a bug because all those variable are not relevant when the user reloads the app. It actually seems easier to argue that putting those variables in state is the hack.

5. ) You will have to handle caching, throttling, and ensuring old or no-longer-relevant data is never accidentally rendered. You need to make sure that if an old request comes back after a new request, you won't accidentally render the wrong search results. Also, you will probably want to debounce and cache the queries. Async selectors handle all this effortlessly.

6. ) Moving the searching logic from client to server or vice versa will require quite a surgery. It will require far-reaching changes and you may be tempted to leave the code where it is to avoid the effort. With async selectors, whether or not the search is done on the client or the server is an implementation detail of the selector.

7. ) Readability. This is obviously subjective - if you have never seen an async selector, you probably won't find them particularly readable. But because async selectors are far more constrained in what they can do compared to middleware approaches, it allows you to express intent more clearly. Additionally they result in way less code and allow clear documentation of async dependencies (without reading middleware and reducer code). Finally, they play well with typescript which is a big plus.

# Installation

```
yarn add async-selector-kit
```

# Glossary

- [createAsyncSelectorResults()](https://github.com/humflelump/async-selector-kit/wiki#createasyncselectorresultsparams-selectors-value-waiting-error-forceupdate)
- [createAsyncAction()](https://github.com/humflelump/async-selector-kit/wiki#createasyncaction-selectors-func-throttler-id-action-loadingselector-errorselector)
- [createThrottledSelector()](https://github.com/humflelump/async-selector-kit/wiki#createthrottledselectorselectors-func-throttler-id-selector)
- [throttleSelector()](https://github.com/humflelump/async-selector-kit/wiki#throttleselectorselector-throttler-id-selector)
- [createAsyncSelectorWithCache()](https://github.com/humflelump/async-selector-kit/wiki#createasyncselectorwithcacheparams-selectors-value-waiting-error-forceupdate)
- [createReducer()](https://github.com/humflelump/async-selector-kit/wiki#createreducer-state---action--state)
- [Miscellaneous](https://github.com/humflelump/async-selector-kit/wiki#miscellaneous)

# Getting Started

Before creating new async selectors, you must do two things. You must provide a reference to a dispatch function so re-render actions can be generated. You must have your reducer handle these actions.

```js
import { combineReducers, createStore, applyMiddleware } from "redux";
import { createMiddleware, createReducer } from "async-selector-kit";

const rootReducer = combineReducers({
  // Your other sub-reducers go here ...
  AsyncSelector: createReducer()
});

const middlewares = [
  // your other middleware goes here ...
  createMiddleware()
];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
```

With that set up, you can start creating async selectors. Here is basic example:

```js
import { createAsyncSelectorResults } from "async-selector-kit";

// Your real request code goes here. This is just for example.
const getEmployees = searchText => {
  return new Promise(resolve => {
    const database = ["Mark Metzger", "Steve Miller"];
    setTimeout(() => {
      resolve(database.filter(name => searchText.includes(name)));
    }, 1000);
  });
};

const [employees, isLoading, error] = createAsyncSelectorResults(
  {
    async: getEmployees,
    id: "myFirstAsyncSelector",
    defaultValue: []
  },
  [state => state.searchText]
);

// employees(state) returns the last value returned from the async function or the defaultValue if it has not yet successfully returned a value
// isLoading(state) return a boolean for if the async function is pending
// error(state) returns the error created by async function or null if there was no error
```

# API

## createAsyncSelectorResults(params, selectors): [value, waiting, error, forceUpdate]

This is the main function exposed by the library, and it provides the basic functionality for creating async selectors. The basic idea is that you pass in a list of selectors and an async function (instead of a normal function as in reselect). It outputs three selectors to access the result of the function. Whenever, the promise resolves or rejects, an action is dispatched behind the scenes which triggers the application to render the new data.

### Example 1

```js
import { createAsyncSelectorResults } from 'async-selector-kit';
import { getEmployees } from './api';
import _ from 'lodash';

const [employees, isLoading, error, forceUpdate] = createAsyncSelectorResults(
  {
    async: getEmployees,
    id: "myFirstAsyncSelector",
    defaultValue: [],
    onResolve: employees => console.log(employees),
    onReject: error => console.log(error),
    onCancel: cancelledPromise => console.log(cancelledPromise),
    throttle: f => _.debounce(f, 250),
    shouldUseAsync: text => text !== ""
  },
  [state => state.searchText]
);
```

### Example 2 (Managing Request Cancellation)
The final parameter of the "async" callback is a status object ```{cancelled: boolean, onCancel: () => void}```. If the existing promise is pending and a new promise is generated, the cancelled flag will be updated to true and onCancel() will be called. You can use this to halt promises and even abort network requests. This is available in version 3.0.0.
```js
import { createAsyncSelectorResults, abortableFetch, PromiseStatus } from 'async-selector-kit';

async function getEmployees(search: string, status?: PromiseStatus) {
  const response = await abortableFetch(status, fetch)('/employees');
  if (status?.cancelled) return [];
  const employees = await resp.json();
  return employees;
}

const [employees] = createAsyncSelectorResults(
  {
    async: async (text, status) => {
      status.onCancel = () => console.log('Cancelled Request', text);
      return await getEmployees(text, status);
    },
    id: "myFirstAsyncSelector",
    defaultValue: [],
  },
  [state => state.searchText]
);
```

### selectors: Selector[] = []

The second parameter is an array of selectors to be used to generate the value passed into the async function.

### params.async: (...values, status: PromiseStatus) => Promise

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

## createAsyncAction: (selectors, func, throttler, id?: [action, loadingSelector, errorSelector]

A very common problem in app development is doing async operations with side-effects like saving some data to a database. This library provides provides a convenient, boilerplate-free way of doing this. You can cancel and throttle the action easily, and you are provided with selectors exposing the error and loading states of the promise. And since it isn't reliant on middleware, it code-splits effectively unlike other common approaches.

### Example 1

```js
import { createAsyncAction } from "async-selector-kit";
import { sendMessage } from "./api";

const getMessage = state => state.message;

const [action, loadingSelector, errorSelector] = createAsyncAction({
  id: "sendMessage",
  async: (store, status) => async () => {
    status.onCancel = () => sendMessage.abort();
    const message = getMessage(store.getState());
    await sendMessage(message);
  }
});
console.log(loadingSelector()); // false
console.log(errorSelector()); // undefined
const status = action();
console.log(status); // { id: 1, cancelled: false, onCancel: Function, promise: Promise }
console.log(loadingSelector()); // true
action();
console.log(status); // { id: 1, cancelled: true, onCancel: Function, promise: Promise }
console.log(loadingSelector()); // true
```

You can also pass parameters to the action and inject the results of selectors.

### Example 2

```js
import { createAsyncAction } from "async-selector-kit";
import { sendMessage } from "./api";

const getMessage = state => state.message;

const [action, loadingSelector, errorSelector] = createAsyncAction(
  {
    id: "sendMessage",
    async: (store, status, message) => async upperCase => {
      const newMessage = upperCase ? message.toUpperCase() : message;
      await sendMessage(newMessage);
    },
    throttle: f => debounce(f, 500)
  },
  [getMessage]
);
console.log(loadingSelector()); // false
console.log(errorSelector()); // undefined
const status = action(true);
action(true);
// The promise hasn't been started because the debounce
console.log(status); // { cancelled: false, onCancel: Function, promise: Promise }
console.log(loadingSelector()); // false
```

You can rig your actions to be triggered in response to actions dispatched by passing a "subscription" callback function. You can also pass in `"dispatchActions": false` to stop actions from being spawned by the library. Be warned, the loading selector may not be called as soon as loading starts and stops

### Example 3

```js
import { createAsyncAction } from "async-selector-kit";
import { sendMessage } from "./api";
import { store } from "./store";

const getMessage = state => state.message;

createAsyncAction(
  {
    id: "sendMessage",
    async: (store, status, message) => async action => {
      console.log(action);
      const newMessage = upperCase ? message.toUpperCase() : message;
      await sendMessage(newMessage);
    },
    subscription: (action, store) => action.type === "MESSAGE",
    dispatchActions: false
  },
  [getMessage]
);

store.dispatch({ type: "MESSAGE" });
```

### selectors: Selector[] = []

list of selectors whose results are injected into the provided function.

### params.id?: string

an id that is passed into actions created by the library

### params.throttle?: (f: Function) => Function

an optional function that can prevent too many requests being made

### params.dispatchActions?: boolean = true

boolean for whether or not the library automtically generates actions when the function is called.

### params.subscription?: (action, store) => boolean

if passed a subscription, any actions that satify the condition will be passed as the first parameter to params.async's passedParams

### params.async: (store: ReduxStore, status: Status, ...selectorResults) => (...passedParams) => Promise

async function to be executed. The status contains an id (if the promise was generated), the cancelled status (it will be true if another action was fired before the first finished), onCancel callaback, and the actual promise.

### Outputs:

### action: (...params) => Status

The action function. You can pass in any parameters

### loadingSelector: () => boolean

True if the most recent action has resolved or rejected

### errorSelector: () => undefined | any

The rejected value of the promise if any

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
  "myThrottledSelector"
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

const throttledText = throttleSelector(
  getText,
  f => _.debounce(f, 250),
  "getText"
);

// This selector will only re-compute if the user hasn't typed for 250ms.
const text10000 = createSelector([throttledText], expensiveFunction);
```

## createAsyncSelectorWithCache(params, selectors): [value, waiting, error, forceUpdate]

Sometimes you will want to implement a client-side cache to prevent unnecessary requests. This is perfectly doable with async selectors but there is minor flaw. A re-render action will always be dispatched, even if the data is already cached and can be obtained synchronously. This function solves that problem. The function is the exact same as createAsyncSelectorResults() except it takes in an addition getCache() argument. If getCache() returns a truthy value, the async function will never get called, and the cache is returned instead.

### Example

```js
class CachedApi {
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
const api = new CachedApi();

const [getValue, waiting, error] = createAsyncSelectorWithCache(
  {
    async: (name, cachedResult) => api.getName(name),
    getCache: name => api.getCache(name),
    defaultValue: null
  },
  [state => state.name]
);
```

## createReducer(): (state = {}, action) => state

This a very simple function which returns a sub-reducer designed to be used in conjunction with combineReducers(). You don't have to use this function. You are free to handle the re-render actions generated by the library however you choose. The only requirement is that your reducer should alway return a reference to a new state or else the app will not correctly re-render. It also strongly discouraged to access any data in the re-render actions as the async selectors should represent the "single source of truth".

### Example

```js
import { combineReducers } from "redux";
import { createReducer } from "async-selector-kit";

const rootReducer = combineReducers({
  // Your other sub-reducers go here ...
  AsyncSelector: createReducer()
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
};
```

An example showing how you can log errors generated async selectors.

```js
import { PROMISE_REJECTED } from "redux-starter-kit";

const loggerMiddleware = store => next => action => {
  let result = next(action);
  if (action.type === PROMISE_REJECTED) {
    // Alternatively, you could show the error to the user by dispatching another action, or send the actions to a DB.
    console.log(action.error);
  }
  return result;
};
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
