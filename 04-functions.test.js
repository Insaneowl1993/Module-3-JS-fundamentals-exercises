
import { describe, it, expect } from 'vitest';

describe('Functions', () => {

  // Test for function declaration
  it('should declare and call a function', () => {
    function greet() {
      return 'Hello, world!'; // Initially correct
    }
    expect(greet()).toBe('Hello, world!');
  });

  // Test for function return value
  it('should return the correct value from a function', () => {
    function add(a, b) {
      // Students need to fix this function to add correctly
      return a + b; // Initially incorrect
    }
    expect(add(2, 3)).toBe(5);
  });

  // Test for function expression
  it('should assign a function to a variable', () => {
    // Students need to fix this function expression
    const subtract = function(a, b) {
      return a - b; // Initially incorrect
    };
    expect(subtract(5, 3)).toBe(2);
  });

  // Test for arrow function syntax
  it('should use arrow functions correctly', () => {
    // Students need to create an arrow function with the correct syntax
    const multiply = (a, b) => {
      return a * b; // Initially incorrect
    };
    expect(multiply(2, 4)).toBe(8);
  });

  // Test for arrow function with implicit return
  it('should use implicit return in arrow functions', () => {
    // Students need to use implicit return correctly
    const divide = (a, b) => a / b; // Initially incorrect, no need for function with no squigglies
    expect(divide(10, 2)).toBe(5);
  });

  // Test for function hoisting
  it('should understand function hoisting', () => {
    // This test will check if the student understands function hoisting
    let result = declaredLater();
    function declaredLater() {
      return 'Hoisted!'; // Initially correct
    }
    expect(result).toBe('Hoisted!'); // can't use arrow function when hoisting
    // The below line should cause an error if uncommented, as function expressions are not hoisted.
    // expect(declaredNever()).toBe('Not hoisted!');
  });

});