import { GroupId, GroupInfo } from '../api/types';
import { UploadcareFile } from './UploadcareFile';
export declare class UploadcareGroup {
    readonly uuid: GroupId;
    readonly filesCount: string;
    readonly totalSize: number;
    readonly isStored: boolean;
    readonly isImage: boolean;
    readonly cdnUrl: string;
    readonly files: UploadcareFile[];
    readonly createdAt: string;
    readonly storedAt: string | null;
    constructor(groupInfo: GroupInfo, files: UploadcareFile[]);
}
