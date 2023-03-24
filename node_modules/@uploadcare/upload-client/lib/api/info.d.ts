import CancelController from '../tools/CancelController';
import { Uuid, FileInfo } from './types';
export declare type InfoOptions = {
    publicKey: string;
    baseURL?: string;
    cancel?: CancelController;
    onProgress?: ({ value: number }: {
        value: any;
    }) => void;
    source?: string;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
};
/**
 * Returns a JSON dictionary holding file info.
 */
export default function info(uuid: Uuid, { publicKey, baseURL, cancel, source, integration, retryThrottledRequestMaxTimes }: InfoOptions): Promise<FileInfo>;
