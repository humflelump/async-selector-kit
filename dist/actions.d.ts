export declare const PROMISE_RESOLVED = "ASYNC_SELECTOR_PROMISE_RESOLVED";
export declare const PROMISE_REJECTED = "ASYNC_SELECTOR_PROMISE_REJECTED";
export declare function promiseResolved(result: any, took: number, id: string | undefined): {
    type: string;
    id: string | undefined;
    result: any;
    took: number;
};
export declare function promiseRejected(error: any, id: string | undefined): {
    type: string;
    id: string | undefined;
    error: any;
};
