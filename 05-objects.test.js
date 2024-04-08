
import { describe, it, expect } from 'vitest';

describe('Objects', () => {

  // Test for creating an empty object
  it('should create an empty object', () => {
    const emptyObject = {}; // This should be changed to {} to pass the test
    expect(typeof emptyObject).toBe('object');
    expect(Object.keys(emptyObject).length).toBe(0);
  });

  // Test for creating an object with properties
  it('should create an object with properties', () => {
    const user = {
      name: 'Alice',
      age: 25 // This should be a number to pass the test
    };
    expect(typeof user.name).toBe('string');
    expect(user.age).toBe(25);
  });

  // Test for object operations (get, set, delete)
  it('should perform get, set, and delete operations on an object', () => {
    const user = {
      name: 'Alice',
      age: 25
    };
    // Get
    expect(user.name).toBe('Alice');
    // Set
    user.age = 30; // This should be a number to pass the test
    expect(user.age).toBe(30);
    // Delete
    delete user.name; // This line should be uncommented to pass the test
    expect(user.name).toBeUndefined();
  });

  // Test for property name limitation (key conversion to string)
  it('should understand property name conversion to string', () => {
    const object = {
      1: 'one',
      '1': 'one' // This should be the same value to pass the test
    };
    expect(object['1']).toBe('one');
    expect(object[1]).toBe('one');
  });

  // Test for property existence
  it('should check for the existence of a property', () => {
    const phone = {
      model: 'iPhone 11',
      color: 'black',
      storage: '32gb'
    };
    // The property storage should not exist to pass the test
    expect('storage' in phone).toBe(true);
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
    expect(properties).toEqual(['model', 'color', 'storage']);
  });

  // Test for object reference vs value
  it('should understand object reference vs value', () => {
    const person1 = { name: 'Anna' };
    const person2 = person1;
    person2.name = 'Anna'; // This should be the same name to pass the test
    expect(person1.name).toBe('Anna');
  });

  // Test for shallow copy of an object
  it('should create a shallow copy of an object', () => {
    const user = { name: 'Elliot', age: 27 };
    const userClone = {}; // This should be a shallow copy of user
    for (const key in user) {
      userClone[key] = user[key]; // This line should be added to pass the test
    }
    userClone['name'] =  user['name']
    userClone['age'] = user['age']
    expect(userClone.name).toBe('Elliot');
    expect(userClone.age).toBe(27);
  });

});

export {};
