// javascript execution content

//global execution context <- this will refer to global object window
//function execution context
// eval execution context
// first memory created in js so memory creation phase memory allocated here
// execution phase
// global execution phase
// memory phase val1 -> undefined , val2 ->undefined and then definition of function store in memory
// execution phase will assign value to specified variables and execution phase also gets deletec after executing one time then agin it created
// in excution control value of total is evaluated and then it will return to global excution context 

// in sources in console we can see call stack in javascript
//"0", 'false', " " , [] , {} , function(){} these are truth value if passed in any function
// falsy value -> 0, -0 , BigInt 0n , "" , null , undefined , NaN 
//any value in string are truth value.
const obj ={}
if(Object.keys(obj).length == 0)
    console.log("empty object");

// false == 0 (returns true)

//Nullish Coalescing Operator (??): null undefined

let val1;

val1 = 5 ?? 10
val2 = null ?? 10
// this operator used to check null or undefined value
console.log(val1);// 5

console.log(val2); //10