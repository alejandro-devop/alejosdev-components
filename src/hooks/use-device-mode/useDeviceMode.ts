import { useCallback, useMemo, useState } from 'react'

const useDeviceMode = () => {
    const currentMode = useMemo(() => {
        return window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
    }, [])
    const [mode, setMode] = useState<'dark' | 'light'>(currentMode)
    const toggleMode = useCallback(() => {
        setMode(mode === 'dark' ? 'light' : 'dark')
    }, [mode])
    return { mode, toggleMode }
}

export default useDeviceMode
