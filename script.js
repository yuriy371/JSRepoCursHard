"use strict"

let arr = ["675", "444", "693", "442", "235", "225", "726"]

for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) == 2 || arr[i].charAt(0) == 4) console.log(arr[i])
}

nextPrime:
for (let i = 2; i <= 100; i++) { // Для всех i...

    for (let j = 2; j < i; j++) { // проверить, делится ли число..
        if (i % j == 0) continue nextPrime; // не подходит, берём следующее
    }

    console.log(i + " Делители этого числа: 1 и " + i); // простое число
}
