type UseInputIDConfigType = {
    /** Input name */
    name?: string;
    /** Input id */
    id?: string;
};
/**
 * Hook used to generate input ids, you can use it without
 * params in order to receive an auto generated id
 * if no id or name given the output will be a generated id
 * otherwise the hook decides whether id or name attribute (id has priority)
 * @param config
 * @returns
 */
declare const useInputId: (config?: UseInputIDConfigType) => string | undefined;
export default useInputId;
