import { FileInfo, Token } from './types';
import CancelController from '../tools/CancelController';
export declare enum Status {
    Unknown = "unknown",
    Waiting = "waiting",
    Progress = "progress",
    Error = "error",
    Success = "success"
}
declare type StatusUnknownResponse = {
    status: Status.Unknown;
};
declare type StatusWaitingResponse = {
    status: Status.Waiting;
};
declare type StatusProgressResponse = {
    status: Status.Progress;
    size: number;
    done: number;
    total: number;
};
declare type StatusErrorResponse = {
    status: Status.Error;
    error: string;
};
declare type StatusSuccessResponse = {
    status: Status.Success;
} & FileInfo;
export declare type FromUrlStatusResponse = StatusUnknownResponse | StatusWaitingResponse | StatusProgressResponse | StatusErrorResponse | StatusSuccessResponse;
export declare type FromUrlStatusOptions = {
    publicKey?: string;
    baseURL?: string;
    cancel?: CancelController;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
};
/**
 * Checking upload status and working with file tokens.
 */
export default function fromUrlStatus(token: Token, { publicKey, baseURL, cancel, integration, retryThrottledRequestMaxTimes }?: FromUrlStatusOptions): Promise<FromUrlStatusResponse>;
export {};
