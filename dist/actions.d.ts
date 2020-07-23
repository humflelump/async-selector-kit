export declare const PROMISE_RESOLVED = "ASYNC_SELECTOR_PROMISE_RESOLVED";
export declare const PROMISE_REJECTED = "ASYNC_SELECTOR_PROMISE_REJECTED";
export declare const ACTION_STARTED = "ASYNC_SELECTOR_ACTION_STARTED";
export declare const ACTION_FINISHED = "ASYNC_SELECTOR_ACTION_FINISHED";
export declare const SUBSCRIPTION_UPDATED = "ASYNC_SELECTOR_SUBSCRIPTION_UPDATED";
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
export declare function actionStarted(inputs: any[], callId: number, id: string | undefined): {
    type: string;
    id: string | undefined;
    inputs: any[];
    callId: number;
};
export declare function actionEnded(result: any, callId: number, took: number, id: string | undefined): {
    type: string;
    id: string | undefined;
    result: any;
    took: number;
    callId: number;
};
export declare function subscriptionUpdated(value: any, id: string | undefined): {
    type: string;
    value: any;
    id: string | undefined;
};
