/// <reference types="node" />
import { UploadcareFile } from './tools/UploadcareFile';
import { UploadcareGroup } from './tools/UploadcareGroup';
import { Settings } from './types';
import { NodeFile, BrowserFile } from './request/types';
import { BaseOptions, BaseResponse } from './api/base';
import { FileInfo, GroupId, GroupInfo, Token, Url, Uuid } from './api/types';
import { InfoOptions } from './api/info';
import { FromUrlOptions, FromUrlResponse } from './api/fromUrl';
import { FromUrlStatusOptions, FromUrlStatusResponse } from './api/fromUrlStatus';
import { GroupOptions } from './api/group';
import { GroupInfoOptions } from './api/groupInfo';
import { MultipartStartOptions, MultipartStartResponse, MultipartPart } from './api/multipartStart';
import { MultipartCompleteOptions } from './api/multipartComplete';
import { MultipartUploadOptions, MultipartUploadResponse } from './api/multipartUpload';
import { FileFromOptions } from './uploadFile';
import { GroupFromOptions } from './uploadFileGroup';
declare class UploadClient {
    private settings;
    constructor(settings?: Settings);
    updateSettings(newSettings?: Settings): void;
    getSettings(): Settings;
    base(file: NodeFile | BrowserFile, options: BaseOptions): Promise<BaseResponse>;
    info(uuid: Uuid, options: InfoOptions): Promise<FileInfo>;
    fromUrl(sourceUrl: Url, options: FromUrlOptions): Promise<FromUrlResponse>;
    fromUrlStatus(token: Token, options: FromUrlStatusOptions): Promise<FromUrlStatusResponse>;
    group(uuids: Uuid[], options: GroupOptions): Promise<GroupInfo>;
    groupInfo(id: GroupId, options: GroupInfoOptions): Promise<GroupInfo>;
    multipartStart(size: number, options: MultipartStartOptions): Promise<MultipartStartResponse>;
    multipartUpload(part: Buffer | Blob, url: MultipartPart, options: MultipartUploadOptions): Promise<MultipartUploadResponse>;
    multipartComplete(uuid: Uuid, options: MultipartCompleteOptions): Promise<FileInfo>;
    uploadFile(data: NodeFile | BrowserFile | Url | Uuid, options: FileFromOptions): Promise<UploadcareFile>;
    uploadFileGroup(data: (NodeFile | BrowserFile)[] | Url[] | Uuid[], options: FileFromOptions & GroupFromOptions): Promise<UploadcareGroup>;
}
export default UploadClient;
