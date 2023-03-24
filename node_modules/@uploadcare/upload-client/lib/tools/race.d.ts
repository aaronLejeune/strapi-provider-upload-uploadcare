import CancelController from './CancelController';
declare type Callback = () => void;
declare type StrangeFn<T> = (args: {
    stopRace: Callback;
    cancel: CancelController;
}) => Promise<T>;
declare const race: <T>(fns: StrangeFn<T>[], { cancel }?: {
    cancel?: CancelController | undefined;
}) => Promise<T>;
export { race };
