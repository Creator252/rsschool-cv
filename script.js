const burgerMenu = document.querySelector('.burger-menu');

if (burgerMenu) {
    burgerMenu.addEventListener('click', function (e) {
        burgerMenu.classList.toggle('burger-menu-active')
    });
}