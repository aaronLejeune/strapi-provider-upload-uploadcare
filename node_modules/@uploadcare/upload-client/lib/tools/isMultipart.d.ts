import { NodeFile, BrowserFile } from '../request/types';
/**
 * Get file size.
 */
export declare const getFileSize: (file: NodeFile | BrowserFile) => number;
/**
 * Check if FileData is multipart data.
 */
export declare const isMultipart: (fileSize: number, multipartMinFileSize?: number) => boolean;
