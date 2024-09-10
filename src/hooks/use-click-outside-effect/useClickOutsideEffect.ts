import { useEffect, useState } from 'react'

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
const useClickOutsideEffect = (ref: any, callBack?: () => void) => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        const handleClickOutsite = (event: MouseEvent) => {
            if (!ref.current) return
            if (ref.current.contains(event.target as Node)) return
            callBack?.()
        }
        if (!ref.current || !mounted) return
        document.addEventListener('click', handleClickOutsite)
        return () => {
            document.removeEventListener('click', handleClickOutsite)
        }
    }, [ref, callBack, mounted])

    useEffect(() => {
        if (!mounted) {
            setMounted(true)
        }
    }, [mounted])
    return null
}

export default useClickOutsideEffect
