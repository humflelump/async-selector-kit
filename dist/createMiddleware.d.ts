export declare function addNewStateListener(listener: any): void;
export declare function addNewActionListener(listener: any): void;
export declare function createMiddleware(): (store: any) => (next: any) => (action: any) => any;
