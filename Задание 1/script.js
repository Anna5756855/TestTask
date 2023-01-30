const button_1 = document.querySelector(".button_1");
const button_2 = document.querySelector(".button_2");

const header = document.querySelector(".header");

const block3 = document.querySelector(".block3");

alert("Привет,мир!")

button_1.addEventListener("click", function() {
    header.classList.toggle("blockVisibility")
})

button_2.addEventListener("click", function() {
    block3.classList.toggle("order")
})

