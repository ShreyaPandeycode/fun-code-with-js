console.log(Math.floor(6.887));//6
console.log(Math.ceil(-6.887));//7
console.log(Math.floor(-567.98));
console.log(Math.random()*40 +1);
// to generate within specific range
const max = 70;
const min = 50
console.log(Math.floor(Math.random()*(max - min + 1)))

console.log(Math.ceil(Math.random()*(max - min + 1)))

/*
Math.random() generates a number in the range [0, 1).

So, Math.random() * 21 gives a value in [0, 21).

After Math.floor, it becomes an integer in the range 0 to 20 (inclusive).*/ 