import { BaseAxios, Config } from './useBaseAxios';
declare function useLazyAxios<Data>(url: string): BaseAxios<Data>;
declare function useLazyAxios<Data>(config: Config): BaseAxios<Data>;
declare function useLazyAxios<Data>(url: string, config: Config): BaseAxios<Data>;
export default useLazyAxios;
