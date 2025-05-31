// singelton A singleton object in JavaScript is an object that is designed to have only one instance throughout the application's lifecycle. This pattern is useful when you need to ensure that only one object is responsible for coordinating actions across the system, managing shared resources, or providing a global point of access to specific functionalities.
//Object.create
// object literals

const mysys = Symbol("key1")
 const jsuser = {
    age : 56,
    "food":"bhagwaan bacha lo", // you can never access this using dot operator
    name : "sitaram",
    [mysys] : "mykey",
    email: "ram@gmail.com"
    
 }
//Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object (which could also make up an excuse for typeof null === "object"). The language usually defaults to undefined when something is devoid of a value:

 console.log(jsuser.age);
 console.log(jsuser["email"]);
 console.log(jsuser["food"]);
 console.log(jsuser.mysys) /// print undefined not right way to access symbol
 console.log(jsuser[mysys]);


