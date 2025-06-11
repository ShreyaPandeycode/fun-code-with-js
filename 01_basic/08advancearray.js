const ram = ["raghav" , "sitaram" , "radheshyam"];
const sr = ["sitama", "makaali","heyram"];
//push is used to add elements in array
ram.push(sr);
console.log("new array" ,ram);
//can use concat function also;

newarr = ram.concat(sr);
console.log(newarr);

const spread = [...ram , ...sr];
console.log(spread);
//this will spread array into different element

const realarr = [1,2,3,[4,5,6],7,10,[7,6,[8,5]]]
// now we have created very nested array now
const createarr = realarr.flat(Infinity);
// const arr1 = [0, 1, 2, [3, 4]];
/*

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
*/
 console.log(realarr);
 console.log(createarr);

 console.log(Array.isArray("hello")) // present in array or not
 console.log(Array.from("world"));//convert into array of characters
 console.log(Array.isArray(1,3,2,4,5)); //false
 console.log(Array.isArray(ram)); //true

 const a =10;
 const b= 30;
 const c = 50;
 console.log(Array.of(a,b,c));

// for each loop syntax using callback function
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log(`Element at index ${index}: ${number * 2}`);
});