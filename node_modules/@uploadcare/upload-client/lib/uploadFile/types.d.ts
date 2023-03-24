/// <reference types="node" />
import { Url, Uuid } from '..';
import { NodeFile, BrowserFile } from '../request/types';
/**
 * FileData type guard.
 */
export declare const isFileData: (data: NodeFile | BrowserFile | Url | Uuid) => data is Buffer | Blob | File;
/**
 * Uuid type guard.
 */
export declare const isUuid: (data: NodeFile | BrowserFile | Url | Uuid) => data is string;
/**
 * Url type guard.
 *
 * @param {NodeFile | BrowserFile | Url | Uuid} data
 */
export declare const isUrl: (data: NodeFile | BrowserFile | Url | Uuid) => data is string;
