import { AxiosRequestConfig, AxiosInstance } from 'axios';
import { RequestState } from './useAxiosReducer';
interface RequestFunctions {
    cancel: () => void;
    refetch: () => Promise<void>;
}
export interface Config extends AxiosRequestConfig {
    axiosInstance?: AxiosInstance;
}
export declare type Props<Data> = RequestState<Data> & RequestFunctions;
export declare type BaseAxios<Data> = [(lazyData?: Config['data']) => Promise<void>, Props<Data>];
declare function useBaseAxios<Data>(url: string): BaseAxios<Data>;
declare function useBaseAxios<Data>(config: Config): BaseAxios<Data>;
declare function useBaseAxios<Data>(url: string, config: Config): BaseAxios<Data>;
export default useBaseAxios;
