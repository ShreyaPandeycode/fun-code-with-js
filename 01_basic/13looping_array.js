//we have for loop for array , objects , strings all are iterator
const arr = [1,2,3,4,5]
const ba = [...arr]
//copy value of array
for(const it of arr){
    // iterator will traverse whole array
// now u can access each elemnt of array
}
/// create map in js
const map = new Map();
map.set("sita ram","life")
map.set("hi","journey")
map.set("love","country")
console.log(map)
   /// Map(3) { 'sita ram' => 'life', 'hi' => 'journey', 'love' => 'country' }
   for( const [key , value] of map){
    // using destructuring of array we traverse in a map
    //Unpacking: Destructuring allows you to unpack values from arrays or properties from objects into individual variables.

    console.log(key + value);
   }
   // iterate over object with tqwist
   const myobj = {
     'a1' : 'hi',
     'a2' : 'hello'
   }
   // for of not work so we use for in

   for(const key in myobj){
    console.log(myobj[key]) // print value
   }
   /// but in case of array it will print only indices (keys)
   // using for each loop we can use arrow function , basically we can pass function as a parameter in fro each loop
   const coding = ['java','js','ruby','python']
   // for each loop only perform on array , temporary copy par change hota h
   coding.forEach( function (val){
    console.log(val);
   });
   const a =5;
   const b = 6;
   coding.forEach( (a,b) => {
          console.log(a + " " +b);
          // value -> key
   });

   console.log(Array.isArray(coding)); // to check it is array or object 
   console.log(Array.isArray({})); // false
   console.log(Array.isArray([]));

   // delete objects
   var ar ={
          name: "ram",
          age: 34
   }
   delete ar.age;
   delete ar.name;