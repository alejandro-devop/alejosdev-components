/**
 * Detect click outside of an element
 * @example
 * const ref = useRef<HTMLDivElement>(null);
 * useClickOutsideEffect(ref, () => {
 *  // Do something
 * });
 * @param ref The element you want to detect click outside
 * @param callBack The callback function when click outside
 * @returns
 */
declare const useClickOutsideEffect: (ref: any, callBack?: () => void) => null;
export default useClickOutsideEffect;
