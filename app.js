// 1. what is ES6 and why we should use it?
/*
 ==> ES6 is the updated version of javascript
 ==> increase readability
 ==> short code
 
*/

// 2. let
//===============================
let myName = "Programming Hero";
// let myName = 'kamrul';  // ==> we can not redeclare with same variable name with let keyword
myName = 'changed value';  // ==> we can change only the value 


// ==> ReferenceError: Cannot access 'age' before initialization whe variable declared with let keyword;
/* age = 10;    
let age;
console.log(age) */



// ==> block scope
let x = 10
{
    let x = 2;    // block scope
    console.log('inside block', x);
}
console.log('outside block', x);



// 3. const
//====================================
// ==> can not reassign/redefine
/* const age = 45;
age = 56;
console.log(age); */

// 4. Template Literal/string/bactick
//=====================================
// ==> used for dynamic value
let name = 'Kamrul';
let message = 'How are you?';

let fullMessage = ` hi, ${name}. ${message}. What about your programming course?`;
console.log(fullMessage);


// 5.  Arrow Function
//=========================================
// ==> less code and easy to write code
// ==> arrow function does not support hoisting

// traditional way
/* function sum(a , b){
    const result = a + b;
    return result;
}
const total = sum(2, 4);
console.log(total); */

// arrow function for single line 
const sum = (a, b) => a + b;
const result = sum(12, 10);
console.log(result);

// arrow function for mutiple line 
const add = (a, b, c) => {
    const add1 = a + b;
    const add2 = a + c;
    return add2;
}
const result1 = add(12, 12, 12);
console.log(result1);


// 6. Array Destructuring
//======================================

        // traditional way
        /*const myCars = ['Toyota', 'BMW', 'Tata', 'Ford', 'Tesla'];

        const firstCar = myCars[0];
        const secondCar = myCars[1]
        console.log(firstCar, secondCar); */

const myCars = ['Toyota', 'BMW', 'Tata', 'Ford', 'Tesla'];

const [first, second, third, fourth, fifth] = myCars;  
console.log(first);   
console.log(second);   
console.log(third); 

// 7. Spread Operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);
