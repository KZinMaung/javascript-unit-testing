import {it, expect} from 'vitest';
import { transformToNumber } from './numbers';

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

