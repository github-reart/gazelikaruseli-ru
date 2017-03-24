$('.main-menu__item').mouseover(function () {
   $(this).find('ul').show();
});
$('.main-menu__item').mouseleave(function () {
    $(this).find('ul').hide();
});
