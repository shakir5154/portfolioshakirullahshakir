document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded!");

    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "#222";
        } else {
            header.style.background = "#333";
        }
    });
});

