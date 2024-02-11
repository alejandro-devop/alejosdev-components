import {useCallback, useState} from 'react';

export const useSimpleHook = (): [
    number, () => void
] => {
    const [count, setCount] = useState(0)
    const handleCount = useCallback(() => {
        setCount(count + 1)
    }, [count])
    return [count, handleCount]
}

const myCoolModule = () => {
    alert("Hello world!")
}

export default myCoolModule;