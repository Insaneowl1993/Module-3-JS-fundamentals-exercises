
import { describe, it, expect } from 'vitest';

describe('Objects', () => {

  // Test for creating an empty object
  it('should create an empty object', () => {
    const emptyObject:object = new Object(); // Students need to change this to object literal
    expect(typeof emptyObject).toBe('object');
    expect(Object.keys(emptyObject).length).toBe(0);
  });

  // Test for creating an object with properties
  it('should create an object with properties', () => {
    const user: {name: string, age: number} = {
      name: 'Alice',
      age: 25 // This should be initially set to a string to fail the test
    };
    expect(typeof user.name).toBe('string');
    expect(user.age).toBe(25);
  });

  // Test for object operations (get, set, delete)
  it('should perform get, set, and delete operations on an object', () => {
    //add ? to make key optional property (allows you to delete property)
    const user: {name?: string, age?: number} = {
      name: 'Alice',
      age: 25
    };

    // Get
    expect(user.name).toBe('Alice');
    // Set
    user.age = 30; // This should be initially set incorrectly as a string
    expect(user.age).toBe(30);
    // Delete
    delete user.name; // This line should be commented out initially to fail the test
    expect(user.name).toBeUndefined();
  });

  // Test for property name limitation (key conversion to string)
  it('should understand property name conversion to string', () => {
    const object = {
      1: 'one',
      '2': 'uno' // These should initially be different values to fail the test
    };
    expect(object['2']).toBe('uno');
    expect(object[1]).toBe('one');
  });

  // Test for property existence
  it('should check for the existence of a property', () => {
    const phone = {
      model: 'iPhone 11',
      color: 'black'
    };
    // The property storage should not exist initially to fail the test
    expect('storage' in phone).toBe(false);
  });

  // Test for object iteration
  it('should iterate over object properties', () => {
    const phone = {
      model: 'iPhone 11',
      color: 'black',
      storage: 64
    };
    const properties = [];
    for (const key in phone) {
      properties.push(key);
    }
    // Initially, the storage property should not be iterated over to fail the test
    expect(properties).toEqual(['model', 'color', 'storage']);
  });

  // Test for object reference vs value
  it('should understand object reference vs value', () => {
    const person1 = { name: 'Anna', age: 24 }; 
    const person2 = person1;
    person2.name = 'Anna'; //person1.name = 'Brian' and person2.name = 'Brian'
    expect(person1.name).toBe('Anna'); // This should be initially set to a different name to fail the test
  });

  // Test for shallow copy of an object
  it('should create a shallow copy of an object', () => {
    const user = { name:'Elliot', age:27 };
    const userClone: { name?: string, age?: number} = {}; // This should be a shallow copy of user
    for (const key in user) {
      userClone[key] = user[key]; // This line should be missing initially to fail the test
    }
    expect(userClone.name).toBe('Elliot');
    expect(userClone.age).toBe(27);
  });

});

export {};
