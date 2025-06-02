const user = {
    username : "hi",
    price: 0
}
 //handleobj(user);
  handleobj({
    username: "sam" ,
    price : 0
    // this whole will paas as object in js methods
  })
function handleobj(anyobject){  //do not need to paas any object here
    console.log(`Username is ${anyobject.username} 
        and price is ${anyobject.price}`);
}

 
  const myNewArray = [200, 400 , 100 , 600];

  function returnSecond(getArray){
     return getArray[1]; // return getarray hi hota h 
  }

  console.log(myNewArray[0]);
  console.log(returnSecond(myNewArray));

  if(true){
    let a =30;
    const b= 45;
    var c = 76;
    d = 67;
  }

 //' console.log(a);
  //console.log(b);
  //var can make elemnt accessible out of block as well
  console.log(c);
  console.log(d);
  //in console globe scope is different while in node it is totally different

   const user1 = {
     username : "myname",
      price : "0",
      welcome : function () {
        console.log(`${this.username} , welcome to website`);
        console.log(user1[1]); // undefined
        console.log(user1.price)
        console.log(this) // this refers to user1
      }

   }
   //user.welcome()
   user1.username = "hello" // now name changes
   user1.welcome()

   ///now here u r in node environment where this refers to empty object
   console.log(this)
   //global object in browser is window so node is runtime engine of js which will reference to WINDOW

   function sample(){
    let name = "raghav"
    console.log(this.name); //undefined
    //it means this not working here 
   }

   sample();

   const chai = () =>{
       let user2 = "myname"
       console.log(this)
   }

   const user3 = {
  name: "John",
  greet: () => {
    console.log("Hi, I'm " + this.name); // ❌ 'this' is NOT user
  }
};

//user.greet(); // Hi, I'm undefined
 //Because arrow functions don’t bind their own this,
 //it inherits from the global scope, where this.name is likely undefined.

 const add = (a,b) => {return a+b} // explicit
const sum = (a, b) => (a + b); //used in react implicit
const obj = () => (
  {username : "jai ram"}
  // to return object wrap them in()
)
console.log(add(6,8));
console.log(sum(5, 6)); // ✅ 11
console.log(obj.username);
// if we do not put semi colon after console.log then tells us console.log(...) is being treated as a function call result, and then the (...) after it is trying to call the result of that — which is not a function.
//this also makes further code block;

// immediately invoked function expression (iife)
// global scope ke variable se pollute ho jaata h usse bachne ke liye iska use karte hain
// to decrease the effect of global scope variable
(function hi() {
  // when we give name to function called named IIFE
  console.log("DB connected");
})();  // Output: DB connected

// here termination of above statement is needed

( (name) => {
  // this is simple IIFE
  console.log(`jai siya ram ${name}`);
})('hello');

// IIFE means immediately invoked function expressions (IIFE)