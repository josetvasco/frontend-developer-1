const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.menu-mobile');
const burgerMenu = document.querySelector('.menu');
const cartDetail = document.querySelector('.product-detail');
const cartIcon = document.querySelector('.navbar-shopping-cart');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    if (cartDetail.classList.contains('activo-shopping-cart')) {
        cartDetail.classList.remove('activo-shopping-cart');
    }
}

burgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('activo-menu-mobile');

    if (cartDetail.classList.contains('activo-shopping-cart')) {
        cartDetail.classList.remove('activo-shopping-cart');
    }
}

cartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
    cartDetail.classList.toggle('activo-shopping-cart');

    if (mobileMenu.classList.contains('activo-menu-mobile')) {
        mobileMenu.classList.remove('activo-menu-mobile');
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    }
}