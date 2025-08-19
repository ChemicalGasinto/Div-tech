// Simple interactive nav highlight
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Contact form submission simulation
document.querySelector(".contact form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
});