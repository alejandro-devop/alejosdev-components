import { useState, useCallback } from 'react';

const useSimpleHook = () => {
    const [count, setCount] = useState(0);
    const handleCount = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    return [count, handleCount];
};
const myCoolModule = () => {
    alert("Hello world!");
};

export { myCoolModule as default, useSimpleHook };
//# sourceMappingURL=index.js.map
