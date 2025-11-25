const cartProducts = document.querySelector('.cart__products')
//кнопки увеличения и уменьшения громкостей
const quantityControls = document.querySelectorAll('.product__quantity-control');
quantityControls.forEach(quantityControl => {
    quantityControl.addEventListener('click', () => {
        const product = quantityControl.closest('.product');
        const quantityValueElement = product.querySelector('.product__quantity-value');
        let quantityValueInt = parseInt(quantityValueElement.textContent);//количество в корзине добавлено
        //проверка увеличение или уменьшение количества
        if (quantityControl.classList.contains('product__quantity-control_dec')) {
            quantityValueInt = Math.max(1, quantityValueInt - 1); // уменьшаем, но не меньше 1
        } else if (quantityControl.classList.contains('product__quantity-control_inc')) {
            quantityValueInt++;
        }
        quantityValueElement.textContent = quantityValueInt;
    })
})

const productAdds = document.querySelectorAll('.product__add');

productAdds.forEach(productAdd => {
    productAdd.addEventListener('click', function () {
        const product = productAdd.closest('.product');
        const productId = product.getAttribute('data-id');
        const productImg = product.querySelector('.product__image').src;
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
        addToCart(productId, productImg, quantity);
    })
})

function addToCart(productId, productImg, quantity) {
    const currentProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
    //если элемент есть, то к нему добавляем, иначе создаем
    if (currentProduct) {
        const productCount = currentProduct.querySelector('.cart__product-count');
        const currentCount = parseInt(productCount.textContent);
        productCount.textContent = currentCount + quantity;
    } else {
        const divCartProduct = document.createElement('div');
        divCartProduct.className = 'cart__product';
        divCartProduct.setAttribute('data-id', productId);

        const imgCart = document.createElement('img');
        imgCart.className = 'cart__product-image';
        imgCart.src = productImg;

        const quatityDiv = document.createElement('div');
        quatityDiv.className = 'cart__product-count';
        quatityDiv.textContent = quantity;
        divCartProduct.appendChild(imgCart);
        divCartProduct.appendChild(quatityDiv);

        cartProducts.appendChild(divCartProduct);
    }
}