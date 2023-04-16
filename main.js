const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.menu-mobile');
const burgerMenu = document.querySelector('.menu');
const cartDetail = document.querySelector('.product-detail');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');


const productList = [];
const cartProducts = [];


function pushProducts(arr) {
    arr.push({
        name: 'Bike',
        price: 12700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    arr.push({
        name: 'Bicycle helmet',
        price: 1200,
        image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
    });
    arr.push({
        name: 'Bicycle helmet',
        price: 1600,
        image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
    });
    arr.push({
        name: 'Bicycle helmet',
        price: 1500,
        image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
    });
    arr.push({
        name: 'Seat',
        price: 300,
        image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
    });
    arr.push({
        name: 'Tennis Montain Bike',
        price: 2200,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
    });
    arr.push({
        name: 'Sunglasses',
        price: 800,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
    });
    arr.push({
        name: 'Sunglasses',
        price: 600,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
    });
    arr.push({
        name: 'Bicycle seat bag',
        price: 876,
        image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
    });
}

pushProducts(productList);

function showProducts(arr) {
    arr.forEach((product) => {

        //Creación del div principal.
        const divProduct = document.createElement('div');
        divProduct.classList.add('product-card');

        //Creación de la imagen principal de la card.
        const imagenProduct = document.createElement('img');
        imagenProduct.src = product.image;
        imagenProduct.classList.add('product-img');
        imagenProduct.setAttribute('alt', product.name);

        //Creación del div contenedor de los detalles de la card.
        const divDescription = document.createElement('div');
        divDescription.classList.add('product-info');

        //Creación de la información del producto.
        const divPriceName = document.createElement('div');
        const pPrice = document.createElement('p');
        pPrice.innerText = '$' + product.price;
        const pName = document.createElement('p');
        pName.innerText = product.name;

        //Se añade los textos de la card a su contenedor.
        divPriceName.append(pPrice, pName);

        //Creación de la etiqueta contenedora del ícono.
        const figureCart = document.createElement('figure');

        //Creación de la imagen del carrito de la card.
        const imageCart = document.createElement('img');
        imageCart.classList.add('cart');
        imageCart.src = './icons/bt_add_to_cart.svg';
        imageCart.setAttribute('alt', 'cart');
        imageCart.setAttribute('id', 'cart');

        //Se añade la imagena su eqtiqueta contemdora.
        figureCart.appendChild(imageCart);

        //Se añade el div de la descripción y de ícono a su div superior.
        divDescription.append(divPriceName, figureCart);

        //Se añade todos lo elementos con sus respectivo div a su duv superior.
        divProduct.append(imagenProduct, divDescription);

        //Se añade todos los elementos a su sectión para ser mostrado en panatalla
        cardsContainer.appendChild(divProduct)

    })
}

document.addEventListener('DOMContentLoaded', showProducts(productList));

cardsContainer.addEventListener('click', (e) => {

    const btnCart = e.target.classList.contains('cart');

    if (btnCart) {
        const productSelect = e.target.parentElement.parentElement.parentElement

        console.log(productSelect)
        /*
        newProductCart = {
            image: productSelect.querySelector('.product-img').src;
            name: 
        }
        */

    }
})

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