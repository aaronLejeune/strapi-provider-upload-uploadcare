import { Uuid, FileInfo } from './types';
import CancelController from '../tools/CancelController';
export declare type MultipartCompleteOptions = {
    publicKey: string;
    baseURL?: string;
    cancel?: CancelController;
    source?: string;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
};
/**
 * Complete multipart uploading.
 */
export default function multipartComplete(uuid: Uuid, { publicKey, baseURL, source, cancel, integration, retryThrottledRequestMaxTimes }: MultipartCompleteOptions): Promise<FileInfo>;
