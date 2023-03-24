export declare type GeoLocation = {
    latitude: number;
    longitude: number;
};
export declare type ImageInfo = {
    height: number;
    width: number;
    geoLocation: GeoLocation | null;
    datetimeOriginal: string;
    format: string;
    colorMode: string;
    dpi: {
        '0': number;
        '1': number;
    } | null;
    orientation: number | null;
    sequence: boolean | null;
};
export declare type AudioInfo = {
    bitrate: number | null;
    codec: string | null;
    sampleRate: number | null;
    channels: string | null;
};
export declare type VideoInfo = {
    duration: number;
    format: string;
    bitrate: number;
    audio: AudioInfo | null;
    video: {
        height: number;
        width: number;
        frameRate: number;
        bitrate: number;
        codec: string;
    };
};
export declare type FileInfo = {
    size: number;
    done: number;
    total: number;
    uuid: Uuid;
    fileId: Uuid;
    originalFilename: string;
    filename: string;
    mimeType: string;
    isImage: boolean;
    isStored: boolean;
    isReady: string;
    imageInfo: ImageInfo | null;
    videoInfo: VideoInfo | null;
    s3Bucket: string | null;
};
export declare type GroupInfo = {
    datetimeCreated: string;
    datetimeStored: string | null;
    filesCount: string;
    cdnUrl: string;
    files: FileInfo[];
    url: string;
    id: GroupId;
};
export declare type Token = string;
export declare type Uuid = string;
export declare type GroupId = string;
export declare type Url = string;
