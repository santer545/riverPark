$(function() {
    rangePrice('js-range-slider');
    showMasks();
    AOS.init({
        startEvent: 'scroll'
    });
    preloaderHide();
    anchor();
    scrollPosition();
    tooltip();
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

    var el = document.getElementById("mapWrapper"); // Or whatever method to get the element

    el.scrollTo(778, 0);
}

function tooltip () {
    $('svg a').tooltipster({
        contentCloning: true
    });
}

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
    if ($('#section-1').isInViewport()) {
        $('#section-1').find('.tooltip').addClass('active');
    } else {
        $('#section-1').find('.tooltip').removeClass('active');
    }

    if ($('#section-2').isInViewport()) {
        $('#section-2').find('.tooltip').addClass('active');
    } else {
        $('#section-2').find('.tooltip').removeClass('active');
    }
});