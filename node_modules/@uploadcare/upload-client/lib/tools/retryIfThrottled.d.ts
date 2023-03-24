declare function retryIfThrottled<T>(fn: () => Promise<T>, retryThrottledMaxTimes: number): Promise<T>;
export default retryIfThrottled;
