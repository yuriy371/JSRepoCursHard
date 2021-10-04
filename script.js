let lang = prompt("Выберите язык", "ru, en")

/* if-else */
if (lang === "ru") {
    console.log("Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресенье");
} else if (lang === "en") {
    console.log("Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday");
}
/* ------- */

console.log("End if-else ------------------------");

/* switch-case */
switch (lang) {
    case "ru":
        console.log("Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресенье");
        break;
    case "en":
        console.log("Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday");
        break;
}
/* ------------*/

console.log("End switch-case ------------------------");

/* Mult-Arr */
let arrDay = [
    ["ru", ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",]],
    ["en", ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",]]
]

res = (arrDay[0][0] == lang) ? console.log(arrDay[0][1]) : console.log(arrDay[1][1]);
/* -------- */

console.log("End Mult-Arr ------------------------");

let namePerson = prompt("Введите имя");

resPosition = (namePerson == "Артем") ? console.log("директор") : 
(namePerson == "Александр") ? console.log("преподаватель") : console.log("студент");