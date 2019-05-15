$(function() {
    rangePrice('js-range-slider');
    showMasks();
    AOS.init({
        startEvent: 'scroll'
    });
    preloaderHide();
    anchor();
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

    $( ".js-scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
}