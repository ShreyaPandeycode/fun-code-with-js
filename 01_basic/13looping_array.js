//we have for loop for array , objects , strings all are iterator
const arr = [1,2,3,4,5]

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
   coding.forEach( function (val){
    console.log(val);
   });
   const a =5;
   const b = 6;
   coding.forEach( (a,b) => {
          console.log(a + " " +b);
          // value -> key
   });
   