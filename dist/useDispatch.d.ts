export declare const getDispatcher: (id: string) => any;
export declare function getStore(): {
    dispatch: Function;
    getState: any;
};
export declare function useDispatch(dispatcher: Function, id?: string): void;
export declare function useStore(store_: any): void;
