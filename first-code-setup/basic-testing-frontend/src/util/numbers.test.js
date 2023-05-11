import {it, expect, describe} from 'vitest';
import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber()',()=> {

    it('should transform a numeric string value to a number of type number', () =>{
        const value = '1';
    
        const result = transformToNumber(value);
    
        expect(result).toBeTypeOf('number').toBe(+value);
    })
    
    /*
    it('should yeild a correct number of passing numeric string value', () =>{
        const value = '1';
    
        const result = transformToNumber(value);
    
        expect(result).toBe(+value);
    })
    */
    
    it('should yield NaN if passed invalid string', () => {
        const value = 'invalid';
        const value2 = {};
    
        const result = transformToNumber(value);
        const result2 = transformToNumber(value2);
    
        expect(result).toBeNaN;
        expect(result2).toBeNaN;
    })
    
    
})

describe('cleanNumbers()', () => {
    it('should return an array of number values if an array of string number values is provided', () => {
        const numberValues = ['1','2'];
        const cleanedNumbers = cleanNumbers(numberValues);
        //expect(cleanedNumbers[0]).toBeTypeOf('number');
        expect(cleanedNumbers).toEqual([1,2]);
    })

    it('should throw an error if an array with at least one empty string is provided', () =>{
        const numberValues = ['', '1'];
        const cleanFn = () => {
            cleanNumbers(numberValues);
        }

        expect(cleanFn).toThrow();
    })
})

