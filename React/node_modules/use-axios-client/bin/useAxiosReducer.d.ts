/// <reference types="react" />
export interface RequestState<Data> {
    data: Data | undefined;
    loading: boolean;
    error: Error | undefined;
}
declare type Action<Data> = {
    type: 'REQUEST_INIT';
} | {
    type: 'REQUEST_SUCCESS';
    payload: Data;
} | {
    type: 'REQUEST_FAILED';
    payload: Error;
};
export declare const initialState: {
    data: undefined;
    error: undefined;
    loading: boolean;
};
declare const _default: <Data>() => [RequestState<Data>, import("react").Dispatch<Action<Data>>];
export default _default;
