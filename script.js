"use strict"

let GetNoun = function (number, one, two, five) {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return five;
    }
    number %= 10;
    if (number == 1) {
        return one;
    } else if (number >= 2 && number <= 4) {
        return two;
    } else {
        return five;
    }

}

let pad = function (n) {
    if (n < 10)
        return "0" + n;
    return n;
}

let updateTime = function () {
    let date = new Date()
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            let options = {
                month: 'long',
                day: 'numeric',
                weekday: 'long',
            };
            let hours = date.getHours() + " " + GetNoun(date.getHours(), "час ", "часа ", "часов ") + date.getMinutes() + " минут " + date.getSeconds() + " секунд"
            document.getElementById("form1").innerHTML = date.toLocaleString("ru", options) + " " + date.getFullYear() + " года " + hours;
        } else {
            let options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };
            document.getElementById("form2").innerHTML = pad(date.toLocaleString("ru", options));
        }
    }
}
setInterval(updateTime, 1000)

