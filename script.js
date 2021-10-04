let lang = prompt("Выберите язык", "ru, en")
let daysRu = "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"
let daysEn = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"

/* if-else */
if (lang === "ru") {
    console.log(daysRu);
} else if (lang === "en") {
    console.log(daysEn);
} else {
    console.log("Данного языка нет в системе");
}
/* ------- */

console.log("End if-else ------------------------");

/* switch-case */
switch (lang) {
    case "ru":
        console.log(daysRu);
        break;
    case "en":
        console.log(daysEn);
        break;
    default:
        console.log("Данного языка нет в системе");
        break;
}
/* ------------*/

console.log("End switch-case ------------------------");

/* Mult-Arr */
let arrDay = [
    ["ru", ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",]],
    ["en", ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",]]
]

res = (arrDay[0][0] == lang) ? console.log(arrDay[0][1]) :
    (arrDay[1][0] == lang) ? console.log(arrDay[1][1]) : console.log("Данного языка нет в системе");;
/* -------- */

console.log("End Mult-Arr ------------------------");

let namePerson = prompt("Введите имя");

resPosition = (namePerson == "Артем") ? console.log("директор") :
    (namePerson == "Александр") ? console.log("преподаватель") : console.log("студент");