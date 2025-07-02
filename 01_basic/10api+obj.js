{
    "name"; "shreya",
    "life"; "sitaram"
}
//json formatter tool  is used to read api like what is written in api

// lets talk about function

let birth =[123,34]

function getResultarray(arr,callback){
    let res =[];
    for(let i =0;i<arr.length;i++){
        let val = callback(arr[i]); // here we are calling the function again and again
        res.push(val);
    }
}

function calAge(birthyear){
    return new Date().getFullYear() - birthyear;
}

getResultarray(birth,calAge);
//higher order func recieves a functon as argument and return a function as argument
//so here getResultarray function is an exaple of higher order function as taking calAge function asargument
function addnum(a,b){
    return function(c){
        console.log(a,b,c);
    }
}
//console.log(addnum(4,5));
const resultFunction = addnum(4, 5); // Returns a function
resultFunction(6); // Logs: 4 5 6
// yahan resultFunction ek return value h jo ki khud ek function h jismein number paas kiya jaayega
   const coding = ['java','js','ruby','python']
   // for each loop only perform on array , temporary copy par change hota h
   coding.forEach( function (val){
    console.log(val);
   }); // here forEach is a higher order function taking functin as argument
   // aur purani baatein
   // constructor kya hota h
   // normal function jismein this keyword use ho 
   // taaki pta chalein kiss object ne bulava bheja h aur new keyword se object create ho aur constructor invoke karein
