const burgerMenu = document.querySelector('.burger-menu-button');
const divBurgerMenu = document.querySelector('.burger-menu');

if (burgerMenu) {
    burgerMenu.addEventListener('click', function (e) {
        divBurgerMenu.classList.toggle('burger-menu-active');
    });
}