export interface PromiseStatus {
    cancelled: boolean;
    onCancel: () => void;
}
export interface ActionState<PromiseReturn> extends PromiseStatus {
    id: number;
    promise: Promise<PromiseReturn>;
}
export interface SelectorState extends PromiseStatus {
}
