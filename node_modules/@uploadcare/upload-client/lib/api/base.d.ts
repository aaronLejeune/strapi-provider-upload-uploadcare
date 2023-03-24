import CancelController from '../tools/CancelController';
import { Uuid } from './types';
import { NodeFile, BrowserFile } from '../request/types';
export declare type BaseResponse = {
    file: Uuid;
};
export declare type BaseOptions = {
    publicKey: string;
    fileName?: string;
    baseURL?: string;
    secureSignature?: string;
    secureExpire?: string;
    store?: boolean;
    cancel?: CancelController;
    onProgress?: ({ value: number }: {
        value: any;
    }) => void;
    source?: string;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
};
/**
 * Performs file uploading request to Uploadcare Upload API.
 * Can be canceled and has progress.
 */
export default function base(file: NodeFile | BrowserFile, { publicKey, fileName, baseURL, secureSignature, secureExpire, store, cancel, onProgress, source, integration, retryThrottledRequestMaxTimes }: BaseOptions): Promise<BaseResponse>;
