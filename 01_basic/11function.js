// const user = {
//     username : "hi",
//     price: 0
// }
//  //handleobj(user);
//   handleobj({
//     username: "sam" ,
//     price : 0
//     // this whole will paas as object in js methods
//   })
// function handleobj(anyobject){  //do not need to pass any object here
//     console.log(`Username is ${anyobject.username} 
//         and price is ${anyobject.price}`);
//         //this.username will prnt undefined as no object is pass
// }
 
// //console.log("wriote here the calling function" , returnSecond(myNewArray));
                                                               

// //// ReferenceError: Cannot access 'myNewArray' before initialization
//   const myNewArray = [200, 400 , 100 , 600];

//   function returnSecond(getArray){
//      return getArray[1]; // return getarray hi hota h 
//   }

//   console.log(myNewArray[0]); // 200
//   console.log(returnSecond(myNewArray));//one lement printedv 400

//   if(true){
//     let a =30;
//     const b= 45;
//     var c = 76;
//     d = 67;
//   }

//  //' console.log(a);
//   //console.log(b);
//   //var can make element accessible out of block as well
//   console.log(c);
//   console.log(d);
//   //in console globe scope is different while in node it is totally different

//    const user1 = {
//      username : "myname",
//       price : "0",
//       welcome : function () {
//         console.log(`${this.username} , welcome to website`);
//         console.log(user1[1]); // undefined
//         console.log(user1.price)
//         console.log(this) // this refers to user1
//       }

//    }
//    //user.welcome()
//    user1.username = "hello" // now name changes
//    user1.welcome()

//    ///now here u r in node environment where this refers to empty object
//    console.log(this)
//    //global object in browser is window so node is runtime engine of js which will reference to WINDOW

//    function sample(){
//     let name = "raghav"
//     console.log(this.name); //undefined
//     //it means this not working here 
//    }

//    sample();

//    const chai = () =>{
//        let user2 = "myname"
//        console.log(this)
//    }

//    const user3 = {
//   name: "John",
//   greet: () => {
//     console.log("Hi, I'm " + this.name); // ❌ 'this' is NOT user
//   }
// };

// //user.greet(); // Hi, I'm undefined
//  //Because arrow functions don’t bind their own this,
//  //it inherits from the global scope, where this.name is likely undefined.

//  const add = (a,b) => {return a+b} // explicit
// const sum = (a, b) => (a + b); //used in react implicit
// const obj = () => (
//   {username : "jai ram"}
//   // to return object wrap them in()
// )
// console.log(add(6,8));
// console.log(sum(5, 6)); // ✅ 11
// console.log(obj.username);
// // if we do not put semi colon after console.log then tells us console.log(...) is being treated as a function call result, and then the (...) after it is trying to call the result of that — which is not a function.
// //this also makes further code block;

// // immediately invoked function expression (iife)
// // global scope ke variable se pollute ho jaata h usse bachne ke liye iska use karte hain
// // to decrease the effect of global scope variable
// (function hi() {
//   // when we give name to function called named IIFE
//   console.log("DB connected");
// })();  // Output: DB connected

// // here termination of above statement is needed

// ( (name) => {
//   // this is simple IIFE
//   console.log(`jai siya ram ${name}`);
// })('hello');

// IIFE means immediately invoked function expressions (IIFE) function ko turant chalane ki kala 
// first class function :- passing a function inside a function
var a = function(name){
  console.log(name);
}
function hi (b){
   console.log(13+14);
   b();
}
hi(function(){
  console.log("main badhiya");
})

//first class function are special type of function 
// you can assign a function to a variable like any other value 
// you can paas a function as an arugument to another function
//you can return a function from another function

// IIFE is a special type of function basically js version of encapsulation , really yeas
// kisi function ko hum protect kar rhe h ain bahar waale gundon se , jo ki use change na kar paaye

var ans = (function (){
  var prival = 14;
  return {
    getter: function (){
      console.log(prival);
    },
    setter: function(val){
      prival = val;
    }
  }
})();
// yayahn par dikh rha h ki getter aur setter as an object use ho rha h matlab 
// key value ke pairing mein kaam ho rha h agar hum return na karte toh hum inhe kabhi access hi nhi kar paate
// hum getter aur setter ko dot operator se access kar sakte hain

//obj.hasOwnProperty('name') now this is prototype property like ist already defined with every object as we create them
