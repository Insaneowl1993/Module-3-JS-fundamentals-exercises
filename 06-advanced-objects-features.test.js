
import { describe, it, expect } from 'vitest';

describe('Advanced Object Features', () => {

  // Test for shallow copy with object spread
  it('should create a shallow copy with object spread', () => {
    const original = { name: 'Original' };
    const copy = { ...original }; // This should be incorrect to fail the test initially
    // The test is expecting the copy to not override the name property
    expect(copy.name).not.toBe(original);
    expect(copy.name).toBe('Original');
  });

  // Test for merging objects with spread
  it('should merge objects into a single object', () => {
    const first = { firstName: 'John' };
    const last = { lastName: 'Doe' };
    const merged = { ...first, ...last }; // This should be incorrect to fail the test initially
    // The test is expecting a single object with both properties
    expect(merged).toEqual({ firstName: 'John', lastName: 'Doe' });
  });

  // Test for methods on objects
  it('should correctly call methods on objects', () => {
    const person = {
      name: 'Alice',
      greet: function() {
        // Method should return a greeting message
        return 'Hello, ' + this.name; // This is incorrect and should be `return 'Hello, ' + this.name;`
      }
    };
    expect(person.greet()).toBe('Hello, Alice');
  });

  // Test for 'this' behavior in methods
  it('should understand this behavior inside object methods', () => {
    const user = {
      name: 'Bob',
      getName: function() {
        return this.name; // This should be incorrect to fail the test initially
      }
    };
    expect(user.getName()).toBe('Bob');
  });

  // Test for constructor functions
  it('should create an object using a constructor function', () => {
    function User(name) {
      this.name = name;
    }
    const user = new User('Charlie');
    expect(user.name).toBe('Charlie');
  });

  // Test for new keyword
  it('should use new keyword to create objects from constructor functions', () => {
    function Item(name) {
      this.name = name;
      return this;
    }
    const item = new Item('Book'); // This is incorrect, should use `new Item('Book')` to pass the test
    expect(item).toBeInstanceOf(Item);
    expect(item.name).toBe('Book');
  });

  // Test for class syntax for object creation
  it('should create objects using class syntax', () => {
    class Animal {
      constructor(name) {
        this.name = name;
      }
      speak() {
        return this.name + ' makes a noise';
      }
    }
    const animal = new Animal('Dog');
    expect(animal.speak()).toBe('Dog makes a noise');
  });

});

export {};
