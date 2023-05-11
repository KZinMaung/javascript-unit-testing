import {it, expect} from 'vitest';
import {add} from './math';

it('should summarize all numbers in an array', () => {
    //Arrange
    const numbers = [1,2,3];

    //Act
    const result = add(numbers);

    //Assert
    const expectedResult = numbers.reduce(
        (preValue, curValue) => preValue + curValue, 0
    );
    expect(result).toBe(expectedResult);
})

it('should yield NaN if at least one number is invalid', () =>{
    const numbers = ['invalid',1];
    const result = add(numbers);
    expect(result).toBeNaN();
})


it('should yield correct sum if an array of numberic string values is provided', ()=>{
    const numbers = ['1','2'];
    const result = add(numbers);
    const expectedResult = numbers.reduce(
        (preValue, curValue) => +preValue + +curValue, 0
    );

    expect(result).toBe(expectedResult);
})

it('should yeild 0 if an empty array is provided', () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
})

it('should throw an errow if no value is passed into the funtion', ()=> {
    const resultFn = ()=>{
        add();
    }
    expect(resultFn).toThrow();
})

it('should throw an error if provided multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = ()=>{
        add(num1, num2);
    }

    expect(resultFn).toThrow(/is not iterable/);
})