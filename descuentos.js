function PriceDiscount(){
    const inputPrice = document.querySelector('#inputPrice').value;
    // const priceValue =  inputPrice.value;

    const inputDiscount = document.querySelector('#inputDiscount').value;
    // const discountValue =  inputDiscount.value;

    const precioConDescuento = (inputPrice * (100 - inputDiscount)) / 100;

    const ResultP = document.querySelector('#ResultP');
    ResultP.innerText = "El precio a pagar es: $" + precioConDescuento;
}

