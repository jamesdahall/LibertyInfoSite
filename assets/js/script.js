const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('navbar');

openMenu.addEventListener('click', function () {
    menu.classList.remove('hidden');
    openMenu.classList.add('hidden');
    closeMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', function () {
    menu.classList.add('hidden');
    openMenu.classList.remove('hidden');
    closeMenu.classList.add('hidden');
});

var shrinkHeader = 300;
window.addEventListener("scroll", function () {
    var scroll = getCurrentScroll();
    var header = document.querySelector('.header');
    if (scroll >= shrinkHeader) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

function getCurrentScroll() {
    return window.scrollY;
}