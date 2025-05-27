//creation of array in js
// js array are not primitives means they are resizable and can contain a mix of different data types 
// js array are not associative arrays but must be accessed using non negative integers as indexes
//shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 
// those of the source object from which the copy was made. As a result, when you change either the source or the copy,
//  you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy,
//  in which the source and copy are completely independent.*/

const arr = [2,3,4,5];

  // to insert elements we use push operation and pop for deleting an element 
  //just like stack in java
  console.log(`before insertion {arr}` );
  arr.push(6)
  arr.push(7);
console.log(arr)
  // here we can resize an array 
  const fruits = ["Strawberry", "Mango"];
console.log(fruits)
// Create a copy using spread syntax.
const fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]
console.log(fruitsCopy);
// Create a copy using the from() method.
const fruitsCopy2 = Array.from(fruits);
// ["Strawberry", "Mango"]

console.log(fruitsCopy2)
// Create a copy using the slice() method.
const fruitsCopy3 = fruits.slice();
// ["Strawberry", "Mango"]
  const sample = fruitsCopy + fruitsCopy3;
console.log(sample);