/// <reference types="node" />
import { Url, Uuid } from '../api/types';
import { NodeFile, BrowserFile } from '../request/types';
/**
 * FileData type guard.
 */
export declare const isFileDataArray: (data: (NodeFile | BrowserFile)[] | Url[] | Uuid[]) => data is (Buffer | Blob | File)[];
/**
 * Uuid type guard.
 */
export declare const isUuidArray: (data: (NodeFile | BrowserFile)[] | Url[] | Uuid[]) => data is string[];
/**
 * Url type guard.
 */
export declare const isUrlArray: (data: (NodeFile | BrowserFile)[] | Url[] | Uuid[]) => data is string[];
