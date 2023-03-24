import { Uuid, GroupInfo } from './types';
import CancelController from '../tools/CancelController';
export declare type GroupOptions = {
    publicKey: string;
    baseURL?: string;
    jsonpCallback?: string;
    secureSignature?: string;
    secureExpire?: string;
    cancel?: CancelController;
    source?: string;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
};
/**
 * Create files group.
 */
export default function group(uuids: Uuid[], { publicKey, baseURL, jsonpCallback, secureSignature, secureExpire, cancel, source, integration, retryThrottledRequestMaxTimes }: GroupOptions): Promise<GroupInfo>;
