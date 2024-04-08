
import { describe, it, expect } from 'vitest';

describe('Data Types', () => {

  // Test for Number data type
  it('should correctly use number data types', () => {
    const integer: number = 123; // This should be an integer
    const float: number = 0.1 + 0.2; // This should be a floating-point number close to 0.3
    const infinity: number = 1 / 0; // This should be Infinity
    const negativeInfinity: number = -1 / 0; // This should be -Infinity
    const notANumber: number = Math.sqrt(-1); // This should be NaN

    expect(Number.isInteger(integer)).toBe(true);
    expect(float).toBeCloseTo(0.3);
    expect(infinity).toBe(Infinity);
    expect(negativeInfinity).toBe(-Infinity);
    expect(Number.isNaN(notANumber)).toBe(true);
  });

  // Test for BigInt data type
  it('should use BigInt data types', () => {
    const bigintValue: bigint = BigInt('9007199254740992'); // This should be a valid BigInt
    const tooLargeForNumber: bigint = BigInt('9007199254740991') + BigInt('2'); // This should be a BigInt larger than Number can handle
    expect(typeof bigintValue).toBe('bigint');
    expect(tooLargeForNumber).toBeGreaterThan(Number.MAX_SAFE_INTEGER);
  });

  // Test for String data type
  it('should use different string quotes appropriately', () => {
    const singleQuoteString: string = "Single quotes can contain 'single quotes' without escaping";
    const doubleQuoteString: string = 'Double quotes can contain "double quotes" without escaping';
    const backtickString: string = `${singleQuoteString} and ${doubleQuoteString}`;

    expect(singleQuoteString).toContain('single quotes');
    expect(doubleQuoteString).toContain("double quotes");
    expect(backtickString).toContain(singleQuoteString);
    expect(backtickString).toContain(doubleQuoteString);
  });

  // Test for Boolean data type
  it('should correctly use boolean data types', () => {
    const isTrue: boolean = true; // This should be true
    const isFalse: boolean = false; // This should be false
    expect(isTrue).toBe(true);
    expect(isFalse).toBe(false);
  });

  // Test for Null and Undefined data types
  it('should differentiate between null and undefined', () => {
    let valueUndefined: undefined;
    let valueNull: null = null; // This should be null
    expect(valueUndefined).toBeUndefined();
    expect(valueNull).toBeNull();
  });

  // Test for Object data type
  it('should use object data types', () => {
    const objectValue: { a: number, b: string } = {
      a: 42,
      b: 'string'
    }; // This should be an object with properties a and b
    expect(typeof objectValue).toBe('object');
    expect(objectValue).toHaveProperty('a');
    expect(objectValue).toHaveProperty('b');
  });

  // Test for Symbol data type
  it('should create and use symbols', () => {
    const symbolValue: symbol = Symbol('description'); // Create a new symbol with a description
    expect(typeof symbolValue).toBe('symbol');
  });

  // Test for the typeof operator
  it('should correctly use typeof operator', () => {
    const stringValue: string = '123'; // This should be a string
    const numberValue: number = 123; // This should be a number
    const booleanValue: boolean = true; // This should be a boolean
    const nullValue: null = null; // This should be null
    expect(typeof stringValue).toBe('string');
    expect(typeof numberValue).toBe('number');
    expect(typeof booleanValue).toBe('boolean');
    expect(typeof nullValue).toBe('object'); // Remember: typeof null returns 'object'!
  });

});
