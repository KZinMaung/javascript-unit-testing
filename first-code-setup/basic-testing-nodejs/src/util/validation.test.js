import {it, expect, describe} from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty()', ()=>{

    it('should throw an error if empty string is passed', () => {
        const input = '';
        const resultFn = ()=>{
            validateStringNotEmpty(input);
        } 
        expect(resultFn).toThrow();
    })
    
    it('should throw an error with a message which contains a reason (must not be empty) if empty string is passed', ()=>{
        const input = '';
        const resultFn = ()=>{
            validateStringNotEmpty(input);
        }
        expect(resultFn).toThrow(/must not be empty/);
    })
    
    it('should throw an error if a long string of blanks is passed', () => {
        const input = '       ';
        const resultFn = ()=>{
            validateStringNotEmpty(input);
        }
        expect(resultFn).toThrow();
    })
    
    it('should throw an error if any other value than a string is provided', ()=>{
        const inputNum = 1;
        const inputBool = true;
        const inputObj = {};
    
        const validationFnNum = ()=>{
            validateStringNotEmpty(inputNum);
        }
        const validationFnBool = ()=>{
            validateStringNotEmpty(inputBool);
        }
        const validationFnObj = ()=>{
            validateStringNotEmpty(inputObj);
        }
    
        expect(validationFnNum).toThrow();
        expect(validationFnBool).toThrow();
        expect(validationFnObj).toThrow();
    })
    
    it('should not throw an error if non-empty string is provided', () => {
        const input = 'valid';
        const validationFn = () => {
            validateStringNotEmpty(input);
        }
    
        expect(validationFn).not.toThrow();
    })
    
    
})



describe('validateNumber()', () => {
    
    it('should throw an error if invalid number is passed', ()=>{
        const input = 'invalid';
        const resultFn = ()=>{
            validateNumber(input);
        }
        expect(resultFn).toThrow();
    })

    it('should throw an error with a message that contains a reason( invalid number )', () => {
        const input = 'invalid';
        const resultFn = () => {
            validateNumber(input);
        }
        expect(resultFn).toThrow(/Invalid number/);
    })
    
    
    it('should throw an error if numeric string value is provided', () =>{
        const input = '1';
        const validationFn = () => {
            validateNumber(input);
        }
        expect(validationFn).toThrow();
    })
    
    it('should not throw an error if a valid number is provided', () => {
        const input = 1;
        const validationFn = () => {
            validateNumber(input);
        }
        expect(validationFn).not.toThrow();
    })
    
})
