/* Primitive Types */
let age: number;
age = 12;

let userName: string;
userName = 'Sam';

let isInstructor: boolean;
isInstructor = false;

/* More Complex Types */

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
}; // 'any' is a catch up type that you should try and avoid
person = { name: 'Sam', age: 38 };

/* Type Inference */

let course = 'React - The Complete Guide';
// course = 1234; // Since variable was immediately initialized with a string, it is infered to always be stringed. This is a better process to avoid redundancy in typing

/* Union Type */

let course2: string | number;
course2 = 12345;

/* Type Alias */
type Person = { name: string; age: number };

let person2: Person;
person2 = { name: 'Sam2', age: 38 };

// let people: Person[];
