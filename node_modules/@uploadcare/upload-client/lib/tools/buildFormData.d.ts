import * as NodeFormData from 'form-data';
import { BrowserFile, NodeFile } from '../request/types';
/**
 * Constructs FormData instance from array.
 * Uses 'form-data' package in node or native FormData
 * in browsers.
 */
declare type FileTuple = ['file', BrowserFile | NodeFile, string];
declare type BaseType = string | number | void;
declare type FormDataTuple = [string, BaseType | BaseType[]];
declare function buildFormData(body: (FormDataTuple | FileTuple)[]): FormData | NodeFormData;
export default buildFormData;
