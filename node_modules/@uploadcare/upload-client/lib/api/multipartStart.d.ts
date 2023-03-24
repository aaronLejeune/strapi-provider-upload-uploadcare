import { Uuid } from './types';
import CancelController from '../tools/CancelController';
export declare type MultipartStartOptions = {
    publicKey: string;
    contentType?: string;
    fileName?: string;
    baseURL?: string;
    secureSignature?: string;
    secureExpire?: string;
    store?: boolean;
    multipartChunkSize?: number;
    cancel?: CancelController;
    source?: string;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
};
export declare type MultipartPart = string;
export declare type MultipartStartResponse = {
    parts: MultipartPart[];
    uuid: Uuid;
};
/**
 * Start multipart uploading.
 */
export default function multipartStart(size: number, { publicKey, contentType, fileName, multipartChunkSize, baseURL, secureSignature, secureExpire, store, cancel, source, integration, retryThrottledRequestMaxTimes }: MultipartStartOptions): Promise<MultipartStartResponse>;
