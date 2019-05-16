$(function() {
    rangePrice('js-range-slider');
    showMasks();
    AOS.init({
        startEvent: 'scroll'
    });
    preloaderHide();
    anchor();
    scrollPosition();
});

function rangePrice(element) {
    $('.' + element).ionRangeSlider({
        type: "double",
        min: 12000,
        max: 25000,
        from: 12000,
        step: 500,
        prefix: "$",
        hide_min_max: true
    });
}

function showMasks() {
    $('.js-phone').mask('(000) 000 0000');
}

function preloaderHide() {
    setTimeout(function() {
        $('.js-preloader').fadeOut();
    }, 1000);

}

function anchor() {

    $(".js-scrollLink").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
}

function scrollPosition() {
    Object.defineProperty(HTMLElement.prototype, "scrollTo", {
        value: function(x, y) {
            el.scrollTop = y;
            el.scrollLeft = x;
        },
        enumerable: false
    });

    var el = document.getElementById("bigImg"); // Or whatever method to get the element

    // To set the scroll
    // To set the scroll
    el.scrollTo(778, 0);

    // // To increment the scroll
    // el.scrollTop += 100;
    // el.scrollLeft += 100;
}