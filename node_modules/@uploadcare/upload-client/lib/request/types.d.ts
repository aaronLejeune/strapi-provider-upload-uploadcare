/// <reference types="node" />
import * as NodeFormData from 'form-data';
import CancelController from '../tools/CancelController';
export declare type Headers = {
    [key: string]: string | string[] | undefined;
};
export declare type RequestOptions = {
    method?: string;
    url: string;
    query?: string;
    data?: NodeFormData | FormData | BrowserFile | NodeFile;
    headers?: Headers;
    cancel?: CancelController;
    onProgress?: ({ value: number }: {
        value: any;
    }) => void;
};
export declare type ErrorRequestInfo = {
    method?: string;
    url: string;
    query?: string;
    data?: NodeFormData | FormData | BrowserFile | NodeFile;
    headers?: Headers;
};
export declare type RequestResponse = {
    request: RequestOptions;
    data: string;
    headers: Headers;
    status?: number;
};
export declare type FailedResponse = {
    error: {
        content: string;
        statusCode: number;
    };
};
export declare type BrowserFile = Blob | File;
export declare type NodeFile = Buffer;
