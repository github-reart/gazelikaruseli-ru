$(".search").mouseover(function () {
    $(".search__text").addClass("search__text--hover");
    $(".btn--search").addClass("btn--search-hover");
});
$(".search").mouseout(function () {
    $(".search__text").removeClass("search__text--hover");
    $(".btn--search").removeClass("btn--search-hover");
});