"use strict"
const textExam = function (text) {
    if (typeof text === "string") {
        if (text.length > 30) {
            text = text.trim().substring(0, 30) + "...";
            return(text);
        } else {
            return(text.trim());
        }
    } else {
        return("не строка");
    }
}

console.log(textExam(" абзацабзацабзацабзацабзацабзац ")); // больше 30 символов
console.log(textExam(" абзацабзацабзацабзацабзац ")); // пустые символы
console.log(textExam(15)); // число