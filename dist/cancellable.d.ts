import { PromiseStatus } from "./types";
declare type AsyncFunction = (...params: any[]) => Promise<any>;
export declare function abortableFetch<F extends AsyncFunction>(status: PromiseStatus | undefined, f: F): F;
export declare function cancellable<F extends AsyncFunction>(status: PromiseStatus | undefined, f: F): F;
export {};
