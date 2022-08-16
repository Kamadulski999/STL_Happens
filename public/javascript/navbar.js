const burger = document.querySelector("#navBurger");
const menu = document.querySelector("#navMenu");

async function burgerActive(event) {
    event.preventDefault();
    burger.classList.toggle('is-active')
    menu.classList.toggle('is-active');


}

document.querySelector("#navBurger").addEventListener("click", burgerActive);