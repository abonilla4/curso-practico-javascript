function PriceDiscount(){
    const precioValue = document.querySelector('#inputPrice').value;
    const couponValue = document.querySelector('#inputCoupon').value;

    const coupons = [
        {name: "DESCUENTO15", discount: 15},
        {name: "DESCUENTO30", discount: 30},
        {name: "DESCUENTO25", discount: 25},
    ];

    const isCouponValueValid = function(coupon){
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon){
        alert("El coupon " + couponValue + " no es valido");
    } else{
        const descuento = userCoupon.discount;
        const precioConDescuento = (precioValue * (100 - descuento)) / 100;

        const ResultP = document.querySelector('#ResultP');
        ResultP.innerText = "El precio a pagar es: $" + precioConDescuento;
    }    
}


