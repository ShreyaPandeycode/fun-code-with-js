// // promises , axios , set Interval , promises , fetch , clear interval , set timeout all come under async js category
// //console.table("hello", "hiii", "jai ho");
// console.log("hello");
// setTimeout(function(){
//     console.log("hi");
//     console.log("sitaram");
// console.log("hari har sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// },1000);
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// console.log("sitaram");
// still hi will printed after all of these will be executed 

// see js is not asynchronous , it is executing code line by line , basically 
// it is concurrently running two programs simulatneously , thoda A thoda B but switching is very fast
// we have to stack , main stack , known as call stack and side stack , so event loop will check if main stack is empty ask callback in side stack
// if they want to execute if yes okay then take them to main stack and perform thier execution
// Promise is like a class
let ans = new Promise((res, rej)=>{
    if(4==5){
        return res();

    }
    else
       return rej();
});
// we will access two important function using ans variable like based on prfomise output we will return result
ans.then(function(){
    console.log("aree resolve mil gya");
})
.catch(function(){
    console.log("chalo reject karo");
})

//dekho aap koi bhi condition ko paas kar sakte ho uska true ya false hone par promise fulfill hoga ya reject
// Promise is a constructor
// lets create a promise and under that resolve portion means inside then write another function and this continue as in then new promise is created

var res = new Promise(function(res,rej){
    return res("milte h ");
});

var res1 = res.then(function (data){
    console.log(data);
    return new Promise(function (res,rej){
        return res("bilkul ");
    })
});
var res2 = res1.then(function(data){
    console.log(data);
    return new Promise(function (res,rej){
        return res("jai siyaram")
    })
})
// acha yeh humne maan liya ki promise toh resolve hi hoga
// ab itna then use hoga toh confuse toh honge hi , 
// toh uske liye async await ka use karte hain , async toh kisi function ko asynchronous nature deta h matlab ki use execute hone mein time lagega
// leki uske andar ka code na chl jaye iske liye hum await ka use karte hain , li ruko bhai abhi fetch dtat lekar nhi aa paaya h

async function abcd() {
    let raw = await fetch('https://imgflip.com/api');
    let ans = await raw.json();
    console.log(ans);
}

abcd();
// now this will replace .then with one line await code