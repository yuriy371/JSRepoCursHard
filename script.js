let num = 266219
let numArr = num.toString().split('') // Преобразование числа в строку и разбиение на массив
let numRes = numArr.reduce((res, item) => item * res) // Перемножение чисел массива с помошью метода reduce

console.log(numArr);

let numDeg = numRes ** 3

console.log(numDeg);
console.log(String(numDeg).slice(0, 2)); // Перевод числа в строку и получение двух первых цифр из строки
