const  navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
         isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};


ScrollRevealOption().reveal(".header__content h1", {
    ...scrollRevealOption,
});

ScrollRevealOption().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollRevealOption().reveal(".header__content .header__btn", {
    ...scrollRevealOption,
    delay: 1000,
});


ScrollRevealOption().reveal(".about__content .section__header", {
    ...scrollRevealOption,
}); 

ScrollRevealOption().reveal(".about__content .section__description", {  
    ...scrollRevealOption,
    delay: 500,
});

ScrollRevealOption().reveal(".about__content .about__btn", {
    ...scrollRevealOption,
    delay: 1000,
});


ScrollRevealOption().reveal(".service__card", {
    ...scrollRevealOption,
    interval: 500,
}); 


ScrollRevealOption().reveal(".portfolio__card", {
    ...scrollRevealOption,
    interval: 500,
});
