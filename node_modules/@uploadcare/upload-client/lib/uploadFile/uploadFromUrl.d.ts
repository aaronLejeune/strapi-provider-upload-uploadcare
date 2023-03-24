import CancelController from '../tools/CancelController';
import { UploadcareFile } from '../tools/UploadcareFile';
declare type FromUrlOptions = {
    publicKey: string;
    fileName?: string;
    baseURL?: string;
    baseCDN?: string;
    checkForUrlDuplicates?: boolean;
    saveUrlForRecurrentUploads?: boolean;
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
    pusherKey?: string;
};
declare const uploadFromUrl: (sourceUrl: string, { publicKey, fileName, baseURL, baseCDN, checkForUrlDuplicates, saveUrlForRecurrentUploads, secureSignature, secureExpire, store, cancel, onProgress, source, integration, retryThrottledRequestMaxTimes, pusherKey }: FromUrlOptions) => Promise<UploadcareFile>;
export default uploadFromUrl;
