
import { describe, it, expect } from 'vitest';

describe('Type Conversion', () => {

  // Test for explicit string conversion
  it('should convert values to strings explicitly', () => { 
    const booleanToString = String(false); // This should be explicitly converted to string
    expect(booleanToString).toBe('false');

    const numberToString = String(0); // This should be explicitly converted to string
    expect(numberToString).toBe('0');
  });

  // Test for implicit string conversion
  it('should convert values to strings implicitly', () => {
    const nullToString = null + ''; // This should implicitly convert null to string
    expect(nullToString).toBe('null');

    const undefinedToString = undefined + ''; // This should implicitly convert undefined to string
    expect(undefinedToString).toBe('undefined');
  });

  // Test for explicit numeric conversion
  it('should convert strings to numbers explicitly', () => {
    const stringToNumber = Number('123'); // This should explicitly convert the string to number
    expect(stringToNumber).toBe(123);

    const booleanToNumber = Number(true); // This should explicitly convert the boolean to number
    expect(booleanToNumber).toBe(1);
  });

  // Test for implicit numeric conversion
  it('should convert strings to numbers implicitly', () => {
    const result = '10' / '2'; // This should implicitly convert the strings to numbers
    expect(result).toBe(5);
    const result2 = "1" - "1"
    expect(result2).toBe(0);
  });

  // Test for explicit boolean conversion
  it('should convert values to booleans explicitly', () => {
    const stringToBoolean = Boolean(''); // This should explicitly convert the string to boolean
    expect(stringToBoolean).toBe(false);

    const numberToBoolean = Boolean(0); // This should explicitly convert the number to boolean
    expect(numberToBoolean).toBe(false);
  });

  // Test for implicit boolean conversion
  it('should evaluate expressions with implicit boolean conversion', () => {
    const isEmptyStringFalse = !!''; // This should implicitly convert empty string to false
    expect(isEmptyStringFalse).toBe(false);

    const isZeroFalse = !!0; // This should implicitly convert 0 to false
    expect(isZeroFalse).toBe(false);
  });

  // Test for string comparison
  it('should compare strings correctly', () => {
    const isFirstLessThanSecond = 'a' < 'b'; // This should compare strings in lexicographical order
    expect(isFirstLessThanSecond).toBe(true);
  });

  // Test for comparison of different types
  it('should use strict equality for comparison of different types', () => {
    const isEqualValueAndType = 1 === '1'; // This should use strict equality to avoid type coercion
    expect(isEqualValueAndType).toBe(false);
  });

});
