
const productDetails = document.querySelectorAll('.product-price-details');

productDetails.forEach(element => {
    element.addEventListener('click', productDetailsUpdate);
});

function productDetailsUpdate(event) {
    const quantityContainer = this.querySelector('.quantity');
    const priceContainer = this.querySelector('.product-price');
    const productPrice = parseInt(priceContainer.classList[1]);
    const previousQuantity = parseInt(quantityContainer.value);
    let newQuantity;
    if (event.target.classList[0] == 'quantity-plus') {
        newQuantity = previousQuantity + 1;
    } else if (event.target.classList[0] == 'quantity-minus'
        && previousQuantity > 0) {
        newQuantity = previousQuantity - 1;
    }
    quantityContainer.value = newQuantity;
    priceContainer.innerText = newQuantity * productPrice;
    updateTotal();
}

function updateTotal() {
    const productsPrices = document.querySelectorAll('.product-price');
    let subTotal = 0;
    for (const price of productsPrices) {
        subTotal += parseInt(price.innerText);
    }
    document.getElementById('sub-total').innerText = subTotal;
    const tax = (subTotal * .05).toFixed(2);
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = (subTotal + parseFloat(tax)).toFixed(2);
}