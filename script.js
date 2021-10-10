"use strict";

let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",];
let date = (6 + new Date().getDay()) % 7 // приведение результата getDay к индексам массива

/* --------------------------------- */
week.forEach(function (item, i) {
    let html = item;
    if (i > 4) {
        html = html.italics(); //курсив у выходных
        // html = "<i>" + html + "</i>"; //курсив у выходных (с помощью тегов)
    }
    if (i === date) {
        
        html = html.bold(); // жирный шрифт текущего дня
        // html = "<b>" + html + "</b>";// жирный шрифт текущего дня (с помощью тегов)
    }
    let div = document.createElement('div');
    div.innerHTML = html;
    document.body.appendChild(div);
})
/* --------------------------------- */
