// singelton A singleton object in JavaScript is an object that is designed to have only one instance throughout the application's lifecycle. This pattern is useful when you need to ensure that only one object is responsible for coordinating actions across the system, managing shared resources, or providing a global point of access to specific functionalities.
//Object.create
// object literals
var a = {}; // this is blank object
const mysys = Symbol("key1")
 const jsuser = {
    age : 56,
    "food":"bhagwaan bacha lo", // you can never access this using dot operator
    name : "sitaram",
    [mysys] : "hiii",//creating symbol in js
    email: "ram@gmail.com"
    
 }
//Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object (which could also make up an excuse for typeof null === "object"). The language usually defaults to undefined when something is devoid of a value:

 console.log(jsuser.age);
 console.log(jsuser["email"]);
 console.log(jsuser["food"]);
 console.log(jsuser.mysys) /// print undefined not right way to access symbol
 console.log(typeof jsuser[mysys]);

 jsuser.email ="hello@gpat.com"
 //Object.freeze(jsuser); //here we freez the object
 console.log(jsuser.email);
 console.log(jsuser)
 jsuser.email = "fhf&hgfhk";
 // now we have freez this object so value cannot be changed.
 console.log(jsuser.email);

 //lets create a function snippet

 jsuser.greeting = function(){
     console.log("hi i am js");
 }

 jsuser.func = function() {console.log(`helloooo , ${this.email}, ${this.name}`)}
 console.log(jsuser.greeting()); // use object to access the function
 ///above line print undefined becoz function not returning anything

 console.log(jsuser.func());
 console.log(jsuser.func)

 /// objects in depth
 const tinderUser = new Object(); // create an object

 const t = {};
 t.id = "1235436"
 t.name = "ram"
 t.isloggedin = false
 // can create nested objects
  const regular = {
      email : "dfhgjrf$3rg",
      fname : {
         username : {  // here use colon becozz this is key value pairing
             
            firstname: "hslogg",
            lastname: "fdgbnfgf"
         }
      }
  }
// also a way to access value in nested object but destructuring is prefferred
  console.log(regular.fname.username.lastname); 
  //use ternary operator as well to check whether value exist or not

  //how to merge two object

  const obj1 = {1:'q', 2: 'b'}
  const obj2 = {3: 'a', 4: 'v'}

//const obj3 = {obj1, obj2}// not conacenate
  const obj3 = Object.assign({} , obj1 , obj2);
   //Object.assign(target, ...sources)
console.log(obj3);

const users =[
   {name : "hi"},
   {age : 56},
   {id : "bharat"},
]

users[1].name;
console.log(users[1])

console.log(Object.keys(t));
console.log(Object.values(t));
console.log(Object.entries(t));

console.log(t.hasOwnProperty('isLoggedIn'))

const person = {
firstName: "John",
lastName: "Doe",
age: 50
};
const ram ={
   name: "ragahv",
   age: "infinite",
   color: "royalblue"
};
// Destructuring
// {} is used for extract a particular key from object
let { firstName : fname, lastName : lname } = person;
console.log(fname); // John
console.log(lname); // Doe

let {age: a} = ram;
console.log({a});

/// child.__proto__ = parent this is way of inheriting properties from parent by childrens
// jab bhi koi cheej {} brackets ke andar nahi hoti to hum use global scope kehte hain]
//object ke andar ke function ko hum method kehte hain

/*function abcd(a,b,c,d){
 console.log(this,a,b,c,d)
}

var obj = {age: 24}

abcd.call(obj,3,6,4,8)
abcd.apply(obj,[3,6,4,8])
// bind is mostly used in react 
var bindedfunc = abcd.bind(obj);
// yeyh bas thoda kaam ko delay kar deta h
bindedfunc();
*/









