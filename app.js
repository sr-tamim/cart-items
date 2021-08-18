
const productQuantity = document.querySelectorAll('.product-quantity');

productQuantity.forEach(element => {
    element.addEventListener('click', productQuantityFunction);
});

function productQuantityFunction(event) {
    const quantityContainer = this.querySelector('.quantity')
    const previousQuantity = parseInt(quantityContainer.value);
    if (event.target.classList[0] == 'quantity-plus') {
        quantityContainer.value = previousQuantity + 1;
    } else if (event.target.classList[0] == 'quantity-minus'
        && previousQuantity > 0) {
        quantityContainer.value = previousQuantity - 1;
    }
}