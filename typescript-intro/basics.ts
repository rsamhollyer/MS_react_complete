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

/* Functions */
function add2(a: number, b: number) {
  // Can explicitly or implicitly add return type
  return a + b;
}

function print2(value: any) {
  // Special return type 'void' for functions that never return
  console.log(value);
}

/* Generics */

function insertAtBeg<T>(array: T[], value: T) {
  // The <T> is a special feature called a 'generic' type. It helps developers create on the fly types that don't rely on the any type, but can be used for any type. The 'T' is an arbitrary, but widely accepted convention
  const newArr = [value, ...array];
  return newArr;
}

const demoArr = [1, 2, 3];
const update = insertAtBeg(demoArr, -1);
const strings = insertAtBeg(['a', 'b', 'c'], 'd');
// update[0].split(''); // Runtime error because update is an array of numbers
strings[0].split('');
