import { UseFormHookConfigType, UseFormHookReturnType } from './types';
/**
 * Hook to manage forms
 * @param config
 * @returns
 */
declare const useForm: <FT extends Object = {}>(config?: UseFormHookConfigType<FT>) => UseFormHookReturnType<FT>;
export default useForm;
