// primitve vs reference data types
// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);

// primite data type store in stack but reference data types store in heaps 

// The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol.

// The Non-Primitive data type has only one member i.e. the Object.
// on-primitive data types are called reference types because they refer to objects

// reference types 
// array  , objects 
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);