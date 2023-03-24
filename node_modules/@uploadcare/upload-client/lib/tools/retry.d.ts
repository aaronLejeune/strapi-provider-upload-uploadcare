declare type Args<T> = {
    attempt: number;
    retry: (delayMs?: number) => Promise<T>;
};
declare type Options = {
    factor: number;
    time: number;
};
declare type Creator<T> = (args: Args<T>) => Promise<T>;
declare function retrier<T>(fn: Creator<T>, options?: Options): Promise<T>;
export default retrier;
