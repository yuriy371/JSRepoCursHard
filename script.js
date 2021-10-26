"use strict"

let input = document.querySelector(".input")
let textP = document.querySelector(".text-p")

input.addEventListener("keyup", () => {
    let setText = setInterval( () => {
        textP.innerHTML = input.value
        clearTimeout(setText)
    } , 300)
})
