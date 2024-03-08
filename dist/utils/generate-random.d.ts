type GenerateRandomConfigType = {
    /** Minimum range number */
    min?: number;
    /** Maximum range number */
    max?: number;
};
/**
 * Function to generate a random number between the given range.
 * @param config
 * @returns
 */
declare const generateRandom: (config?: GenerateRandomConfigType) => number;
export default generateRandom;
