
import { describe, it, expect } from 'vitest';

// This test suite will cover the basics of JavaScript variables and code structure
describe('JavaScript Basics', () => {

  // Testing variable declarations
  it('should declare a variable with let and const correctly', () => {
    // Students will fix this code to use 'let' and 'const' appropriately
    var changeableValue = 'initial';
    const unchangeableValue = 'constant';

    // Attempt to change the values
    changeableValue = 'changed';

    // The test expects the 'unchangeableValue' to remain 'constant'
    expect(changeableValue).toBe('changed');
    expect(unchangeableValue).toBe('constant');
  });

  // Testing semicolons and line breaks
  it('should understand the use of semicolons and line breaks', () => {
    // Students will add semicolons where appropriate
    const firstPart = 'Hello'; 
    const secondPart = 'World';

    const combined = firstPart + secondPart
    expect(combined).toBe('HelloWorld');
  });

  // Testing comments
  it('should use comments to describe code', () => {
    // Students will add a comment explaining what the function does
    function add(a, b) {
      return a + b; // Adds two numbers
    }
    console.log(add.toString());
    // The test expects a comment above the function
    expect(add.toString()).toMatch(/\/\/ Adds two numbers/);
  });

});