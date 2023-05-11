import {it, expect , describe} from 'vitest';
import { generateResultText } from './output';

describe('generateResultText()', () =>{
    it('should return a string , no matter which value is passed',() => {
        const val1 = 1;
        const val2 = 'invalid';
        const val3 = false;

        const result1 = generateResultText(val1);
        const result2 = generateResultText(val2);
        const result3 = generateResultText(val3);

        expect(result1).toBeTypeOf('string');
        expect(result2).toBeTypeOf('string');
        expect(result3).toBeTypeOf('string');

    })

    it('should return a string that contains the calculation result if a number is provided as a result', () => {
        const input = 5;
        const resultText = generateResultText(input);
        expect(resultText).toContain(input.toString());
    })

    it('should return a empty string if "no-calc" is provided as a result', () =>{
        const input = 'no-calc';
        const resultText = generateResultText(input);
        expect(resultText).toBe('');
    })

    it('should return a string that contains "Invalid" if "invalid" is passed as a result',()=>{
        const input = 'invalid';
        const resultText = generateResultText(input);
        expect(resultText).toContain('Invalid');
    })
})