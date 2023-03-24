import CancelController from '../tools/CancelController';
import { UploadcareFile } from '../tools/UploadcareFile';
import { Uuid } from '..';
declare type FromUploadedOptions = {
    publicKey: string;
    fileName?: string;
    baseURL?: string;
    cancel?: CancelController;
    onProgress?: ({ value: number }: {
        value: any;
    }) => void;
    source?: string;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
    baseCDN?: string;
};
declare const uploadFromUploaded: (uuid: Uuid, { publicKey, fileName, baseURL, cancel, onProgress, source, integration, retryThrottledRequestMaxTimes, baseCDN }: FromUploadedOptions) => Promise<UploadcareFile>;
export default uploadFromUploaded;
