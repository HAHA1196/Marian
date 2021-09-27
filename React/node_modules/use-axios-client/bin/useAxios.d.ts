import { Props, Config } from './useBaseAxios';
declare function useAxios<Data>(url: string): Props<Data>;
declare function useAxios<Data>(config: Config): Props<Data>;
declare function useAxios<Data>(url: string, config: Config): Props<Data>;
export default useAxios;
