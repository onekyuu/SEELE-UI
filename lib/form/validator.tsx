import {FormValue} from "./form";

interface FormRule {
    key: string,
    required?: boolean,
    maxLength?: number,
    minLength?: number,
    pattern?: RegExp,
}

type FormRules = Array<FormRule>

interface FormErrors {
    [K: string]: string[],
}

function isEmpty (value: any) {
    return value === undefined || value === null || value === '';
}

export function noError (errors: any) {
    return Object.keys(errors).length === 0;
}

const Validator = (formValue: FormValue, formRules: FormRules): FormErrors => {
    const errors: any = {};
    const addError = (key: string, message: string) => {
        if (errors[key] === undefined) {
            errors[key] = [];
        }
        errors[key].push(message);
    };
    formRules.map(rule => {
        const value = formValue[rule.key];
        if (rule.required && isEmpty(value)) {
            addError(rule.key, `${rule.key} is required`);
        }
        if (rule.minLength && !isEmpty(value) && value.length <
            rule.minLength) {
            addError(rule.key, `${rule.key} must more than 6 characters`);
        }
        if (rule.maxLength && !isEmpty(value) && value.length >
            rule.maxLength) {
            addError(rule.key, `${rule.key} must less than 16 characters`);
        }
        if (rule.pattern && !(rule.pattern.test(value))) {
            addError(rule.key, `${rule.key} is invalid`);
        }
    });
    return errors;
};

export default Validator;
