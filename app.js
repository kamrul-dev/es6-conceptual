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
//==========================================
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3);
console.log(...arr1, ...arr2);


// 8. for/of loop
//===========================================
const numbers = [1, 2, 3, 4, 45, 64 , 63];
        // traditional way
        /* for(let i = 0; i < numbers.length; i++){
            console.log(numbers[i]);
        }*/
for(const number of numbers){
    console.log(number);
}


// 9. Default Parameter Values
// ======================================
function sumTwo(a, b = 10){    // set default value b = 10
    const result2 = a + b;
    return result2;
}
const total2 = sumTwo(10, 20);
console.log('addTwo: ', total2);

function welCome(name = 'Hasan'){ //set default value  name = 'Hasan'
    const message = `Hi ${name}, welcome to this programming world!`;
    console.log(message);
}
welCome('Kamrul');

// 10. map() , filter(), find
//====================================

const myArr = [2, 3, 5, 6, 7, 12];
// let myNewArr = [];
            /* for(const number of myArr){
                const tripled = number * 3;
                myNewArr.push(tripled);
            }
            console.log(myNewArr); */

// const tripleArray = myArr.map(number => number * 3);
// console.log(tripleArray);

const newArr = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10, 500, 100];
                /* let filterArr = [];
                for(number of newArr){
                    if(number % 2 == 0){
                        filterArr.push(number);
                    }
                }
               console.log(filterArr); */

// filter () method
/* const filteredArr = newArr.filter(number => number % 2 != 0);
console.log(filteredArr); */


// find() method
// it finds the condition satisfied first element, just find the single elelment according to condition
/* const found = newArr.find(number => number > 10);
console.log(found); */

const nameArray = ['kamrul', 'hasan', 'fahim'];
const nameFound = nameArray.find(name => name.length % 2 != 0);
console.log(nameFound);

