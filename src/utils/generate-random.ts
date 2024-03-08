type GenerateRandomConfigType = {
    /** Minimum range number */
    min?: number
    /** Maximum range number */
    max?: number
}
/**
 * Function to generate a random number between the given range.
 * @param config
 * @returns
 */
const generateRandom = (config?: GenerateRandomConfigType) => {
    const { min = 0, max = 200000 } = config || {}
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default generateRandom
