const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");
    nav.classList.toggle("requires-no-scroll");
    
    if (nav.classList.contains("requires-no-scroll")) {
        navToggle.style.background = "url('./assets/images/icon-menu-close.svg') center center / 3em no-repeat";
    } else {
        navToggle.style.background = "url('./assets/images/icon-menu.svg') center center / 3em no-repeat";
    }
})