$(".btn--i-cart").mouseover(function () {
    $(".cart").removeClass("cart--hide");
    $(".btn--i-cart").addClass("btn--i-cart-hover");
    $(".circle--cart").removeClass("circle--hide");
});
$(".cart").mouseleave(function () {
    $(".cart").addClass("cart--hide");
    $(".btn--i-cart").removeClass("btn--i-cart-hover");
    $(".circle--cart").addClass("circle--hide");
});