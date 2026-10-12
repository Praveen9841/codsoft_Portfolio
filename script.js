const navLinks = document.getElementById("nav_links") || document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");
        if (menuBtnIcon) {
            menuBtnIcon.setAttribute(
                "class",
                isOpen ? "ri-close-line" : "ri-menu-3-line"
            );
        }
    });

    navLinks.addEventListener("click", () => {
        navLinks.classList.remove("open");
        if (menuBtnIcon) {
            menuBtnIcon.setAttribute("class", "ri-menu-3-line");
        }
    });
}

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".header_content h1", {
        ...scrollRevealOption,
    });

    ScrollReveal().reveal(".header_content .section_description", {
        ...scrollRevealOption,
        delay: 500,
    });

    ScrollReveal().reveal(".header_content .header_btn", {
        ...scrollRevealOption,
        delay: 1000,
    });

    ScrollReveal().reveal(".about_image", {
        ...scrollRevealOption,
        origin: "left",
    });

    ScrollReveal().reveal(".about_content .section_header", {
        ...scrollRevealOption,
    }); 

    ScrollReveal().reveal(".about_content .section_description", {  
        ...scrollRevealOption,
        delay: 500,
    });

    ScrollReveal().reveal(".about_content .about_btn", {
        ...scrollRevealOption,
        delay: 1000,
    });

    ScrollReveal().reveal(".service_card", {
        ...scrollRevealOption,
        interval: 300,
    }); 

    ScrollReveal().reveal(".portfolio_card", {
        ...scrollRevealOption,
        interval: 300,
    });

    ScrollReveal().reveal(".portfolio_banner_card", {
        ...scrollRevealOption,
        interval: 300,
    });

    ScrollReveal().reveal(".contact_container", {
        ...scrollRevealOption,
    });
}
