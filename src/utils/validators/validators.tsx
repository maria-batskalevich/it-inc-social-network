import React from "react";

type FieldValidatorType = (value: string) => string | null;

export const requiredField: FieldValidatorType  = (value) => {
    if(value) return null
    return 'Field is required'
}
export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if(value.length < maxLength) return null
    return `Max length is ${maxLength} symbols`
}

export const maxLenght20 = maxLengthCreator(20)