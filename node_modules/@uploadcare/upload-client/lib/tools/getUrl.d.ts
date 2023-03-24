declare type BaseTypes = string | number | void;
declare type Query = {
    [key: string]: BaseTypes | BaseTypes[];
};
declare const getUrl: (base: string, path: string, query?: Query | undefined) => string;
export default getUrl;
