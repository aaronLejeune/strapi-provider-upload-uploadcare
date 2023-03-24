import { FileInfo } from '../api/types';
import CancelController from './CancelController';
declare type ArgsIsReadyPool = {
    file: string;
    publicKey: string;
    baseURL?: string;
    source?: string;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
    onProgress?: (args: {
        value: number;
    }) => void;
    cancel?: CancelController;
};
declare function isReadyPoll({ file, publicKey, baseURL, source, integration, retryThrottledRequestMaxTimes, cancel, onProgress }: ArgsIsReadyPool): FileInfo | PromiseLike<FileInfo>;
export { isReadyPoll };
