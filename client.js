// JavaScript ES6 has many different values and types
// They are: string, number, boolean, null and undefined, object, and symbol
// Using the typeof operator we can see these below
var a;
console.log(typeof a); // "undefined"

a = "hello world";
console.log(typeof a); // "string"

a = 42;
console.log(typeof a); // "number"

a = true;
console.log(typeof a); // "boolean"

a = null;
console.log(typeof a); // "object" -- weird, bug

a = undefined;
console.log(typeof a); // "undefined"

a = {
    b: "c"
};
console.log(typeof a); // "object"

// OBJECTS
// Objects are compounded values that display different properties and values
// Here we set a variable of person with the properties of their name
var person = {
    name: 'bob'
};

// To access their name, we can use dot notation or bracket notation

// Dot notation
console.log(person.name); // bob

// Bracket Notation
console.log(person['name']); // bob

// ARRAYS
// Arrays are objects that hold values in indexed positions
var array = [1, 2, 3];

// In order to access a value within an array, we have to use bracket notation keeping in mind that JS index start from 0
// If we wanted to access the 2nd item in this array "2" we would have to do this
console.log(array[1]);

// FUNCTIONS
// Javascript has function types such as function declarations, function expressions, and arrow functions
// Function declaration:
function sayHi() {
    alert('Hi');
};

// Function Expression: 
var sayHello = function () {
    alert('Hello')
};

// Arrow functions:
let sayBye = () => alert('bye');

// We can call these functions by pressing the buttons on the DOM

// BUILT IN METHODS
// JavaScript has given us some built in functions to save us some work 
var number = 0;
console.log(typeof number);
// Here we use the method .toString to convert the number 0 into a string of 0
console.log(typeof number.toString());

