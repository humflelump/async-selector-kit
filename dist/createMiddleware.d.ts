export declare function addNewActionListener(listenerFunc: any, id: string): void;
export declare function createMiddleware(): (store: any) => (next: any) => (action: any) => any;
