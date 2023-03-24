import { FileFromOptions } from '../uploadFile';
import { UploadcareGroup } from '../tools/UploadcareGroup';
import { Url, Uuid } from '../api/types';
import { NodeFile, BrowserFile } from '../request/types';
export declare type GroupFromOptions = {
    defaultEffects?: string;
    jsonpCallback?: string;
};
/**
 * Uploads file from provided data.
 * @param data
 * @param options
 * @param [options.publicKey]
 * @param [options.fileName]
 * @param [options.baseURL]
 * @param [options.secureSignature]
 * @param [options.secureExpire]
 * @param [options.store]
 * @param [options.cancel]
 * @param [options.onProgress]
 * @param [options.source]
 * @param [options.integration]
 * @param [options.retryThrottledRequestMaxTimes]
 * @param [options.contentType]
 * @param [options.multipartChunkSize]
 * @param [options.baseCDN]
 */
export default function uploadFileGroup(data: (NodeFile | BrowserFile)[] | Url[] | Uuid[], { publicKey, fileName, baseURL, secureSignature, secureExpire, store, cancel, onProgress, source, integration, retryThrottledRequestMaxTimes, contentType, multipartChunkSize, baseCDN, jsonpCallback, defaultEffects }: FileFromOptions & GroupFromOptions): Promise<UploadcareGroup>;
