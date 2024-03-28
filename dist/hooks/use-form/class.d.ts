import { FieldConfigType } from './types';
/**
 * Validator class
 * @param fields
 * @param otherConfig
 * @constructor
 * @example
 * const validator = new Validator(fields, { required: ["email"] });
 * const error = validator.validate({ field: "email", value: "test" });
 */
export declare class Validator {
    private fields;
    private required;
    constructor(fields: {
        [k: string]: FieldConfigType;
    }, otherConfig?: {
        required?: string[];
    });
    /**
     * Interprets a string of rules and validates the value
     * @param config
     * @returns
     */
    private validateASString;
    /**
     * Checks if the given value is empty
     * @param value
     * @returns
     */
    private validateRequired;
    /**
     * Checks if the given value is a valid email
     * @param value
     * @returns
     */
    private validateEmail;
    /**
     * Checks if the given value is greather or equals to the given min
     * @param value
     * @param min
     * @returns
     */
    private validateMin;
    /**
     * Checks if the given value is lower or equals to the given max
     * @param value
     * @param max
     * @returns
     */
    private validateMax;
    /**
     * Checks if the given value matches the given field
     * @param value
     * @param fieldToMatch
     * @param currentValue
     * @returns
     */
    private matchField;
    /**
     * Executes the validation of the given field
     * @param config
     * @returns
     */
    validate: (config: {
        field: string;
        value: any;
        form: any;
    }) => string | null;
}
