declare const runWithConcurrency: <T>(concurrency: number, tasks: (() => Promise<T>)[]) => Promise<T[]>;
export default runWithConcurrency;
