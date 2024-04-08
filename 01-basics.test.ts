
import { describe, it, expect } from 'vitest';

// This test suite will cover the basics of TypeScript types and code structure
describe('TypeScript Basics', () => {

  // Testing variable declarations with types
  it('should declare a variable with a type', () => {
    // Students will fix this code to include types
    let stringValue: string = 'This is a string';
    let numberValue: number = 69;

    expect(typeof stringValue).toBe('string');
    // The test expects 'numberValue' to be a number
    expect(typeof numberValue).toBe('number');
  });

});