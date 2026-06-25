

// sticky Menu  
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 100) {
        navbar.classList.add("sticky-active");
    } else {
        navbar.classList.remove("sticky-active");
    }
});

const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const htmlTag = document.documentElement;
const btnLight = document.getElementById('btn-light');
const btnDark = document.getElementById('btn-dark');

const lightLogos = document.querySelectorAll(".logo-light");
const darkLogos = document.querySelectorAll(".logo-dark");

toggleBtn.addEventListener("click", () => {

    if (htmlTag.getAttribute("data-bs-theme") === "dark") {
        htmlTag.setAttribute("data-bs-theme", "light");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        btnLight.classList.add('d-none');
        btnDark.classList.remove('d-none');
        lightLogos.forEach(logo => logo.classList.remove("d-none"));
        darkLogos.forEach(logo => logo.classList.add("d-none"));

    } else {
        htmlTag.setAttribute("data-bs-theme", "dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        btnDark.classList.add('d-none');
        btnLight.classList.remove('d-none');
        lightLogos.forEach(logo => logo.classList.add("d-none"));
        darkLogos.forEach(logo => logo.classList.remove("d-none"));
    }

});
