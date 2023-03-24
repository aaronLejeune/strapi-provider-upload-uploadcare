import { FileInfo, Uuid, ImageInfo, VideoInfo } from '../api/types';
export declare class UploadcareFile {
    readonly uuid: Uuid;
    readonly name: null | string;
    readonly size: null | number;
    readonly isStored: null | boolean;
    readonly isImage: null | boolean;
    readonly cdnUrl: null | string;
    readonly cdnUrlModifiers: null | string;
    readonly originalUrl: null | string;
    readonly originalFilename: null | string;
    readonly imageInfo: null | ImageInfo;
    readonly videoInfo: null | VideoInfo;
    constructor(fileInfo: FileInfo, { baseCDN, defaultEffects, fileName }: {
        baseCDN?: string;
        defaultEffects?: string;
        fileName?: string;
    });
}
