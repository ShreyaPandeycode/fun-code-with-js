let name ="hello world";
console.log(`greet to everyone ${name}`)
 const game = new String('play_ground');

 console.log(game[0]); //p
 //new way to access it
 console.log(game._proto_);// undefined 

 console.log(game.length);
 console.log(game.charAt(5)) ; //g

 // in substring we cannot give negative values but in slice method we can give

 const newstr = game.slice(-8,7) 
 // this will print space now it start from lastindex 
 const str1 = game.substring(0,9)
 console.log(str1) ; // play_grou
 console.log(newstr); //y_gr

const contentString = "Hello, world";

console.log(contentString.at(5));

const str2 ="सीताराम";
const str = "hello world ,i am just, coder- passby"
console.log(str.charCodeAt(0)); // 55362, or d842, which is not a valid Unicode character
console.log(str.charCodeAt(1)); // 57271, or dfb7, which is not a valid Unicode character

const fstr = "The quick brown fox jumps over the lazy dog.";

const words = str.split(",");
console.log(words);
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("-");
console.log(chars);
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);

/*
Words: use .split(" ")

Characters: use .split("")

Never expect .split() to return undefined — only accessing out-of-bound indexes does.*/ 