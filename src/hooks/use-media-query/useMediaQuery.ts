import { MediaQueryCTX } from 'providers/media-query-provider'
import { useContext } from 'react'

const useMediaQuery = () => {
    const context = useContext(MediaQueryCTX)
    return context
}

export default useMediaQuery
