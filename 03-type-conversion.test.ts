
import { describe, it, expect } from 'vitest';

describe('Type Conversion', () => {

  // Test for explicit string conversion
  it('should convert values to strings explicitly', () => {
    // This should explicitly convert the boolean to string
    const booleanToString: string = String(true); // Initially incorrect
    expect(booleanToString).toBe('true');

    // This should explicitly convert the number to string
    const numberToString: string = String(42); // Initially incorrect
    expect(numberToString).toBe('42');
  });

  // Test for implicit string conversion
  it('should convert values to strings implicitly', () => {
    // This should implicitly convert the number to string
    const numberConcat: string = 1 + '2'; // Initially incorrect
    expect(numberConcat).toBe('12');

    // This should implicitly convert the boolean to string
    const booleanConcat: string = false + 'false'; // Initially incorrect
    expect(booleanConcat).toBe('falsefalse');
  });

  // Test for explicit numeric conversion
  it('should convert strings to numbers explicitly', () => {
    // This should explicitly convert the string to number
    const stringToNumber: number = Number('123'); // Initially incorrect
    expect(stringToNumber).toBe(123);
  });

  // Test for implicit numeric conversion
  it('should convert strings to numbers implicitly', () => {
    // This should implicitly convert the strings to numbers in a mathematical operation
    const result: number = 10 / 2; // Initially incorrect
    expect(result).toBe(5);
  });

  // Test for explicit boolean conversion
  it('should convert values to booleans explicitly', () => {
    // This should explicitly convert the string to boolean
    const stringToBoolean: boolean = Boolean('true'); // Initially incorrect
    expect(stringToBoolean).toBe(true);

    // This should explicitly convert the number to boolean
    const numberToBoolean: boolean = Boolean(1); // Initially incorrect
    expect(numberToBoolean).toBe(true);
  });

  // Test for implicit boolean conversion
  it('should evaluate expressions with implicit boolean conversion', () => {
    // These conditions should implicitly convert values to booleans
    expect('' ? true : false).toBe(false);
    expect(0 ? true : false).toBe(false);
    expect(null ? true : false).toBe(false);
  });

  // Test for string comparison
  it('should compare strings correctly', () => {
    // This should compare strings in lexicographical order
    const isFirstGreaterThanSecond: boolean = 'a' > 'b'; // Initially incorrect
    expect(isFirstGreaterThanSecond).toBe(false);
  });

  // Test for comparison of different types
  it('should use strict equality for comparison of different types', () => {
    // These should use strict equality to avoid type coercion
    expect(1 === '1').toBe(false);
    expect(true === 'true').toBe(false);
    expect(null === undefined).toBe(false);
  });

});