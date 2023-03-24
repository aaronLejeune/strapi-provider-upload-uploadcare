import { Headers, ErrorRequestInfo } from '../request/types';
declare type ErrorResponseInfo = {
    statusCode: number;
    content: string;
};
export declare class UploadClientError extends Error {
    readonly request?: ErrorRequestInfo;
    readonly response?: ErrorResponseInfo;
    readonly headers?: Headers;
    constructor(message: string, request?: ErrorRequestInfo, response?: ErrorResponseInfo, headers?: Headers);
}
declare type CancelError = {
    message: string;
    request?: ErrorRequestInfo;
    response?: ErrorResponseInfo;
    headers?: Headers;
    isCancel?: boolean;
};
export declare const cancelError: (message?: string) => CancelError;
export {};
