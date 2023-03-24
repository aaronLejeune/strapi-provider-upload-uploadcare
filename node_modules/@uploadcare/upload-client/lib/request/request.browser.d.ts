import { RequestOptions, RequestResponse } from './types';
declare const request: ({ method, url, data, headers, cancel, onProgress }: RequestOptions) => Promise<RequestResponse>;
export default request;
