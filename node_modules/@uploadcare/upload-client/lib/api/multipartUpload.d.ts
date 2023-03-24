import { MultipartPart } from './multipartStart';
import CancelController from '../tools/CancelController';
import { NodeFile, BrowserFile } from '../request/types';
export declare type MultipartUploadOptions = {
    publicKey?: string;
    cancel?: CancelController;
    onProgress?: ({ value: number }: {
        value: any;
    }) => void;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
};
export declare type MultipartUploadResponse = {
    code?: number;
};
/**
 * Complete multipart uploading.
 */
export default function multipartUpload(part: NodeFile | BrowserFile, url: MultipartPart, { publicKey, cancel, onProgress, integration }: MultipartUploadOptions): Promise<MultipartUploadResponse>;
