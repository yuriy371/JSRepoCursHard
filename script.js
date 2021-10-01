let num = 266219
let numArr = num.toString().split('')
let numRes = numArr.reduce((res, item) => item * res)

console.log(numRes);

let numDeg = numRes ** 3

console.log(numDeg);
console.log(String(numDeg).slice(0, 2));
