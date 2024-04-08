
import { describe, it, expect } from 'vitest';

describe('Data Types', () => {

  // Test for Number data type
  it('should correctly use number data types', () => {
    const integer = 123; // This should be an integer
    const float = 0.1 + 0.2; // This should be a floating-point number close to 0.3
    const infinity = 1 / 0; // This should be Infinity
    const negativeInfinity = -1 / 0; // This should be -Infinity
    const notANumber = Math.sqrt(-1); // This should be NaN

    expect(Number.isInteger(integer)).toBe(true);
    expect(float).toBeCloseTo(0.3);
    expect(infinity).toBe(Infinity);
    expect(negativeInfinity).toBe(-Infinity);
    expect(Number.isNaN(notANumber)).toBe(true);
  });

  // Test for BigInt data type
  it('should use BigInt data types', () => {
    const bigintValue = BigInt('9007199254740992'); // This should be a valid BigInt
    const tooLargeForNumber = BigInt('9007199254740991') + BigInt('2'); // This should be a BigInt larger than Number can handle
    expect(typeof bigintValue).toBe('bigint');
    expect(tooLargeForNumber).toBeGreaterThan(Number.MAX_SAFE_INTEGER);
  });

  // Test for String data type
  it('should use different string quotes appropriately', () => {
    const singleQuoteString = "Single quotes can contain 'single quotes' without escaping";
    const doubleQuoteString = 'Double quotes can contain "double quotes" without escaping';
    const backtickString = `${singleQuoteString} and ${doubleQuoteString}`;

    expect(singleQuoteString).toContain("'single quotes'");
    expect(doubleQuoteString).toContain('"double quotes"');
    expect(backtickString).toContain(singleQuoteString);
    expect(backtickString).toContain(doubleQuoteString);
  });

  // Test for Boolean data type
  it('should correctly use boolean data types', () => {
    const isTrue = true; // This should be true
    const isFalse = false; // This should be false
    expect(isTrue).toBe(true);
    expect(isFalse).toBe(false);
  });

  // Test for Null and Undefined data types
  it('should differentiate between null and undefined', () => {
    let valueUndefined; //undefined is undefined and null is null
    let valueNull = null; // This should be null
    expect(valueUndefined).toBeUndefined();
    expect(valueNull).toBeNull();
  });

  // Test for Object data type
  it('should use object data types', () => {
    const objectValue = {
      a: "a",
      b: "b"
    }; // This should be an object with properties a and b
    expect(typeof objectValue).toBe('object');
    expect(objectValue).toHaveProperty('a');
    expect(objectValue).toHaveProperty('b');
  });

  // Test for Symbol data type
  it('should create and use symbols', () => {
    const symbolValue = Symbol('description'); // Create a new symbol with a description
    expect(typeof symbolValue).toBe('symbol');
  });

  // Test for the typeof operator
  it('should correctly use typeof operator', () => {
    const stringValue = '123'; // This should be a string
    const numberValue = 123; // This should be a number
    const booleanValue = true; // This should be a boolean
    const nullValue = {}; // This should be null
    expect(typeof stringValue).toBe('string');
    expect(typeof numberValue).toBe('number');
    expect(typeof booleanValue).toBe('boolean');
    expect(typeof nullValue).toBe('object'); // Remember: typeof null returns 'object'!
  });

});