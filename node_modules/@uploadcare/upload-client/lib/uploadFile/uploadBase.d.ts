import { UploadcareFile } from '../tools/UploadcareFile';
import CancelController from '../tools/CancelController';
import { NodeFile, BrowserFile } from '../request/types';
declare type FromObjectOptions = {
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
    baseCDN?: string;
};
declare const uploadFromObject: (file: NodeFile | BrowserFile, { publicKey, fileName, baseURL, secureSignature, secureExpire, store, cancel, onProgress, source, integration, retryThrottledRequestMaxTimes, baseCDN }: FromObjectOptions) => Promise<UploadcareFile>;
export default uploadFromObject;
