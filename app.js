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
    console.log('inside block' , x);
}
console.log('outside block', x);



// 3. const
//====================================
// ==> can not reassign/redefine
    /* const age = 45;
    age = 56;
    console.log(age); */

// 4. Template Literal/string/bactick
    // ==> used for dynamic value
let name = 'Kamrul';
let message = 'How are you?';

let fullMessage = ` hi, ${name}. ${message}. What about your programming course?`;
console.log(fullMessage);