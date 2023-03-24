import CancelController from '../tools/CancelController';
import { UploadcareFile } from '../tools/UploadcareFile';
import { NodeFile, BrowserFile } from '../request/types';
declare type progressCallback = ({ value: number }: {
    value: any;
}) => void;
export declare type MultipartOptions = {
    publicKey: string;
    contentType?: string;
    multipartChunkSize?: number;
    fileName?: string;
    fileSize?: number;
    baseURL?: string;
    secureSignature?: string;
    secureExpire?: string;
    store?: boolean;
    cancel?: CancelController;
    onProgress?: progressCallback;
    source?: string;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
    maxConcurrentRequests?: number;
    multipartMaxAttempts?: number;
    baseCDN?: string;
};
declare const uploadMultipart: (file: NodeFile | BrowserFile, { publicKey, fileName, fileSize, baseURL, secureSignature, secureExpire, store, cancel, onProgress, source, integration, retryThrottledRequestMaxTimes, contentType, multipartChunkSize, maxConcurrentRequests, multipartMaxAttempts, baseCDN }: MultipartOptions) => Promise<UploadcareFile>;
export default uploadMultipart;
