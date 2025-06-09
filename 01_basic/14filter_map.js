const nums = [1,2,3,4,5,6,7];
const newnums = nums.filter( (num) => num > 4);// return implicitly
const newnums2 = nums.filter( (num) =>{
 return num!=5
}  );
 nums.forEach( (num) =>{
    if(num > 4)
        nums.push(num);
 })
 // yahan par hm scope open kar rhe hain
// now this only print value greater than 4 , filter means filtering value;
console.log(nums);
console.log(newnums);
console.log(newnums2);

//use reduce method 
const arr = [6,5,9,7];
// const myTotal = arr.reduce( function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval} `);
//     return acc*currval;
// },2);
const myTotal = arr.reduce( (acc,curr) => acc+curr,0);
// this zero basically represent acc value 
// currval represent array elements
console.log(" "+myTotal);