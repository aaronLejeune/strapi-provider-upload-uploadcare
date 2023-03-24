import { FileInfo } from './types';
import CancelController from '../tools/CancelController';
declare type Url = string;
export declare enum TypeEnum {
    Token = "token",
    FileInfo = "file_info"
}
declare type TokenResponse = {
    type: TypeEnum.Token;
    token: string;
};
declare type FileInfoResponse = {
    type: TypeEnum.FileInfo;
} & FileInfo;
declare type FromUrlSuccessResponse = FileInfoResponse | TokenResponse;
export declare type FromUrlResponse = FromUrlSuccessResponse;
/**
 * TokenResponse Type Guard.
 */
export declare const isTokenResponse: (response: FromUrlSuccessResponse) => response is TokenResponse;
/**
 * FileInfoResponse Type Guard.
 */
export declare const isFileInfoResponse: (response: FromUrlSuccessResponse) => response is FileInfoResponse;
export declare type FromUrlOptions = {
    publicKey: string;
    baseURL?: string;
    store?: boolean;
    fileName?: string;
    checkForUrlDuplicates?: boolean;
    saveUrlForRecurrentUploads?: boolean;
    secureSignature?: string;
    secureExpire?: string;
    cancel?: CancelController;
    source?: string;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
};
/**
 * Uploading files from URL.
 */
export default function fromUrl(sourceUrl: Url, { publicKey, baseURL, store, fileName, checkForUrlDuplicates, saveUrlForRecurrentUploads, secureSignature, secureExpire, source, cancel, integration, retryThrottledRequestMaxTimes }: FromUrlOptions): Promise<FromUrlSuccessResponse>;
export {};
