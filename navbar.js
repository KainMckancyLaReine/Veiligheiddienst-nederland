const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

function toggleMenu(event) {
    event.preventDefault();
    navMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
}

function closeMenuOnClickOutside(event) {
    if (!navMenu.contains(event.target) && !hamburgerButton.contains(event.target)) {
        navMenu.classList.remove('active');
        body.classList.remove('no-scroll');
    }
}

hamburgerButton.addEventListener('click', toggleMenu);
document.addEventListener('click', closeMenuOnClickOutside);