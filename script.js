"use strict"

let circle = document.querySelector(".circle")
let btnClick = document.querySelector(".click")
let reset = document.querySelector(".reset")

let active = false
let count = 0
let idInterval

let downAnimation = () => {
    count++
    idInterval = requestAnimationFrame(downAnimation)

    if (count <= 1000) {
        circle.style.left = count + "px"
    } else {
        cancelAnimationFrame(idInterval)
    }
}

btnClick.addEventListener("click", () => {
    if (active) {
        cancelAnimationFrame(idInterval)
        active = false
    } else {
        idInterval = requestAnimationFrame(downAnimation)
        active = true
    }
})
reset.addEventListener("click", () => {
    cancelAnimationFrame(idInterval)
    active = false
    count = 0
    circle.style.left = ""
})