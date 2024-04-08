
import { describe, it, expect } from 'vitest';

describe('Functions', () => {

  // Test for function declaration
  it('should declare and call a function', () => {
    function greet(): string {
      return 'Hello, world!'; // Initially correct
    }
    expect(greet()).toBe('Hello, world!');
  });

  // Test for function return value
  it('should return the correct value from a function', () => {
    function add(a: number, b: number): number {
      // Students need to fix this function to add correctly
      return a + b; // Initially incorrect
    }
    expect(add(2, 3)).toBe(5);
  });

  // Test for function expression
  it('should assign a function to a variable', () => {
    // Students need to fix this function expression
    const subtract = function(a: number, b: number): number {
      return a - b; // Initially incorrect
    };
    expect(subtract(5, 3)).toBe(2);
  });

  // Test for arrow function syntax
  it('should use arrow functions correctly', () => {
    // Students need to create an arrow function with the correct syntax
    const multiply = (a: number, b: number): number => {
      return a * b; // Initially incorrect
    };
    expect(multiply(2, 4)).toBe(8);
  });

  // Test for arrow function with implicit return
  it('should use implicit return in arrow functions', () => {
    // Students need to use implicit return correctly
    const divide: (a: number, b: number) => number = (a, b) => 
      a / b; // Initially incorrect
    ;
    expect(divide(10, 2)).toBe(5);
  });

  // Test for function hoisting
  it('should understand function hoisting', () => {
    // This test will check if the student understands function hoisting
    // Students need to correct the order of function declaration and calling
    let result = declaredLater();
    function declaredLater(): string {
      return 'Hoisted!'; // Initially correct
    }
    expect(result).toBe('Hoisted!');
    // The below line should cause an error if uncommented, as function expressions are not hoisted.
    // expect(declaredNever()).toBe('Not hoisted!');
  });

});