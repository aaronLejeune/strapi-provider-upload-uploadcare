import CancelController from './CancelController';
declare type CheckFunction<T> = (cancel: CancelController | undefined) => Promise<false | T> | false | T;
declare const poll: <T>({ check, interval, cancel }: {
    check: CheckFunction<T>;
    timeout?: number | undefined;
    interval?: number | undefined;
    cancel?: CancelController | undefined;
}) => Promise<T>;
export { poll, CheckFunction };
