const ram = ["raghav" , "sitaram" , "radheshyam"];
const sr = ["sitama", "makaali","heyram"];

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
 console.log(realarr);
 console.log(createarr);

 console.log(Array.isArray("hello"))
 console.log(Array.from("world"));//convert into array
 console.log(Array.isArray(1,3,2,4,5)); //false
 console.log(Array.isArray(ram)); //true

 const a =10;
 const b= 30;
 const c = 50;
 console.log(Array.of(a,b,c));