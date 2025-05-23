let name ="hello world";
console.log(`greet to everyone ${name}`)
 const game = new String('play_ground');

 console.log(game[0]);
 //new way to access it
 console.log(game._proto_);// undefined 

 console.log(game.length);
 console.log(game.charAt(5))

 // in substring we cannot give negative values but in slice method we can give

 const newstr = game.slice(-8,8) // this will print space 
 const str1 = game.substring(0,9)
 console.log(str1)
 console.log(newstr)

const contentString = "Hello, world";

console.log(contentString.at(5));

const str = "𠮷𠮾";
console.log(str.charCodeAt(0)); // 55362, or d842, which is not a valid Unicode character
console.log(str.charCodeAt(1)); // 57271, or dfb7, which is not a valid Unicode character