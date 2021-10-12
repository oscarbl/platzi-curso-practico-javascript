// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = ( precio * porcentajePrecioConDescuento )/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCouponDiscount = document.getElementById("inputCouponDiscount");
    const couponDiscountValue = inputCouponDiscount.value;

    //let descuento;

   // if(!coupons.find(couponDiscountValue)){
     //   alert("El cupón: " + couponDiscountValue + " no es valido");
    //}

    const isCouponValueValid = function(coupon){
        return coupon.name === couponDiscountValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon){
        alert("El cupón " + userCouponValue + " no es válido");
    }else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento son: $ " + precioConDescuento;
    }

 //  switch(couponDiscountValue){
  //      case coupons[0]: //"JuanDC_es_batman"
  //          descuento = 15;
  //          break;
  //      case coupons[1]: //"pero_no_se_lo_digas_a_nadie"
  //          descuento = 30;
  //          break;
  //      case coupons[2]: //"es_un_secreto"
  //          descuento = 25;
  //          break;
  //  }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");

    resultP.innerText = "El precio con descuento son:  $" + precioConDescuento;
}

const coupons = [
    {
        name:  "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name:  "pero_no_se_lo_digas_a_nadie",
        discount: 30,
    },
    {
        name:  "es_un_secreto",
        discount: 25,
    },
];
