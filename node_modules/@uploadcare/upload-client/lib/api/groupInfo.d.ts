import { GroupId, GroupInfo } from './types';
import CancelController from '../tools/CancelController';
export declare type GroupInfoOptions = {
    publicKey: string;
    baseURL?: string;
    cancel?: CancelController;
    source?: string;
    integration?: string;
    retryThrottledRequestMaxTimes?: number;
};
/**
 * Get info about group.
 */
export default function groupInfo(id: GroupId, { publicKey, baseURL, cancel, source, integration, retryThrottledRequestMaxTimes }: GroupInfoOptions): Promise<GroupInfo>;
