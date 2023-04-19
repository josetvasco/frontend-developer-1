const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.menu-mobile');
const burgerMenu = document.querySelector('.menu');
const aside = document.querySelector('#shopping-cart-container');
const productDetail = document.querySelector('#product-detail');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const numberCart = document.querySelector('.quantity-cart');
const cartContainer = document.querySelector('.container-products-cart');
const total = document.querySelector('.total');

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
    arr.forEach((product, i) => {

        //Creación del div principal.
        const divProduct = document.createElement('div');
        divProduct.classList.add('product-card');
        divProduct.setAttribute('data-id', i)

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
        pPrice.innerText = '$ '
        const spanPrice = document.createElement('span');
        spanPrice.classList.add('price');
        spanPrice.innerText = product.price;
        pPrice.appendChild(spanPrice)
        const pName = document.createElement('p');
        pName.classList.add('name');
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

    numberCart.innerHTML = cartProducts.length;

    showCart()
}

document.addEventListener('DOMContentLoaded', showProducts(productList));

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    if (aside.classList.contains('activo-shopping-cart')) {
        aside.classList.remove('activo-shopping-cart');
    }

    if (!desktopMenu.classList.contains('inactive')) {
        productDetail.classList.remove('activo-shopping-cart');
    }
}

burgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('activo-menu-mobile');

    if (aside.classList.contains('activo-shopping-cart')) {
        aside.classList.remove('activo-shopping-cart');
    }
}

cartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart() {
    aside.classList.toggle('activo-shopping-cart');

    if (aside.classList.contains('activo-shopping-cart')) {
        productDetail.classList.remove('activo-shopping-cart');
    }

    if (mobileMenu.classList.contains('activo-menu-mobile')) {
        mobileMenu.classList.remove('activo-menu-mobile');
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
}

cardsContainer.addEventListener('click', addCart);

function addCart(e) {

    const btnCart = e.target.classList.contains('cart');

    if (btnCart) {
        const productSelected = e.target.parentElement.parentElement.parentElement;
        const idProduct = parseInt(productSelected.getAttribute('data-id'));

        const productVerified = cartProducts.find((element) => {
            return idProduct === element.id
        })

        if (productVerified == undefined) {
            newProductCart = {
                image: productSelected.querySelector('.product-img').src,
                name: productSelected.querySelector('.name').textContent,
                price: parseFloat(productSelected.querySelector('.price').textContent),
                id: idProduct
            }

            cartProducts.push(newProductCart);

            Swal.fire(
                'Agregado exitosmente',
                '',
                'success'
            );

            numberCart.innerHTML = cartProducts.length
        } else {
            Swal.fire({
                icon: 'error',
                title: 'El producto ya existe en el carrito!'
            })
        }

    }

    showCart()
    totalCart();
}

function showCart() {
    cartContainer.innerHTML = ``;

    cartProducts.forEach((element, i) => {
        const divPrincipal = document.createElement('div');
        divPrincipal.classList.add('shopping-cart');
        divPrincipal.setAttribute('data-id', i);

        const contenedorImage = document.createElement('figure');

        const imagenProduct = document.createElement('img');
        imagenProduct.src = element.image;
        imagenProduct.setAttribute('alt', element.name);

        contenedorImage.appendChild(imagenProduct);

        const pName = document.createElement('p');
        pName.textContent = element.name;

        const pPrice = document.createElement('p');
        pPrice.innerText = '$ '
        const spanPrice = document.createElement('span');
        spanPrice.textContent = element.price;

        pPrice.appendChild(spanPrice)

        const imgDelete = document.createElement('img');
        imgDelete.src = './icons/icon_close.png'
        imgDelete.classList.add('product-delete');
        imgDelete.setAttribute('alt', 'delete');

        divPrincipal.append(contenedorImage, pName, pPrice, imgDelete);

        cartContainer.appendChild(divPrincipal);

        totalCart();
    })
}

function totalCart() {

    let suma = 0;

    cartProducts.forEach((product) => {
        suma += product.price
    })
    total.innerText = suma
}

cartContainer.addEventListener('click', deleteProduct);

function deleteProduct(e) {
    const btnDelete = e.target.classList.contains('product-delete');

    if (btnDelete) {
        const productSelected = e.target.parentElement;
        console.log()

        cartProducts.splice(parseInt(productSelected.getAttribute('data-id')), 1);
    }

    showCart()
    totalCart()
    numberCart.innerHTML = cartProducts.length;
}

cardsContainer.addEventListener('click', viewDetail);

function viewDetail(e) {
    const imagen = e.target.classList.contains('product-img');


    if (imagen) {
        productDetail.classList.add('activo-shopping-cart');
        aside.classList.remove('activo-shopping-cart');
        desktopMenu.classList.add('inactive')

        productDetail.innerHTML = ``;

        const productoDetail = e.target.parentElement;
        const idProduct = parseInt(productoDetail.getAttribute('data-id'));

        const newProductDetail = {
            image: productoDetail.querySelector('.product-img').src,
            name: productoDetail.querySelector('.name').textContent,
            price: parseFloat(productoDetail.querySelector('.price').textContent),
            id: idProduct
        }

        const divImage = document.createElement('div');
        divImage.classList.add('product-detail-close');

        const imageClose = document.createElement('img');
        imageClose.classList.add('img-close')
        imageClose.src = './icons/icon_close.png';
        imageClose.setAttribute('alt', 'close');

        divImage.appendChild(imageClose);

        const divImageProduct = document.createElement('img');
        divImageProduct.src = newProductDetail.image;
        divImageProduct.classList.add('product-img')
        divImageProduct.setAttribute('alt', newProductDetail.name);
        divImageProduct.setAttribute('data-id', newProductDetail.id);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const pPrice = document.createElement('p');
        pPrice.innerHTML = '$ ';
        const spanPrice = document.createElement('span');
        spanPrice.classList.add('price');
        spanPrice.innerText = newProductDetail.price;
        pPrice.appendChild(spanPrice);

        const pName = document.createElement('p');
        pName.classList.add('name');
        pName.innerHTML = newProductDetail.name;

        const pDescription = document.createElement('p');
        pDescription.innerText = 'With its a practical position, this bike also fullfills a decorative function, add your hall or workspace.'

        const btnAddCart = document.createElement('button');
        btnAddCart.classList.add('primary-button', 'add-to-cart-button');
        btnAddCart.innerHTML = `<img src="./icons/bt_add_to_cart.svg" alt="add to cart"> Add to cart`;

        productInfo.append(pPrice, pName, pDescription, btnAddCart)

        productDetail.append(divImage, divImageProduct, productInfo)
    }
}

productDetail.addEventListener('click', actionDetail);

function actionDetail(e) {
    const btnCerrar = e.target.classList.contains('img-close');
    const btnCerrar2 = e.target.classList.contains('product-detail-close');
    const btnAddCart = e.target.classList.contains('add-to-cart-button');

    if (btnCerrar || btnCerrar2) {
        productDetail.classList.remove('activo-shopping-cart');
    } else if (btnAddCart == true) {
        const productSelected = e.target.parentElement.parentElement;
        const idProduct = parseInt(productSelected.querySelector('.product-img').getAttribute('data-id'));

        const productVerified = cartProducts.find((element) => {
            return idProduct === element.id
        })

        if (productVerified == undefined) {
            newProductCart = {
                image: productSelected.querySelector('.product-img').src,
                name: productSelected.querySelector('.name').textContent,
                price: parseFloat(productSelected.querySelector('.price').textContent),
                id: idProduct
            }

            cartProducts.push(newProductCart);

            Swal.fire(
                'Agregado exitosmente',
                '',
                'success'
            );

            numberCart.innerHTML = cartProducts.length
        } else {
            Swal.fire({
                icon: 'error',
                title: 'El producto ya existe en el carrito!'
            })
        }

        showCart()
        totalCart();
    }

}