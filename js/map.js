function rangePrice(t) {
    $("." + t).ionRangeSlider({
        type: "double",
        min: 12,
        max: 45,
        step: 1,
        prefix: "",
        hide_min_max: !0,
        onChange: function(data) {

            $("a path").each(function(index) {
                if ($(this).attr('data-status') != 'red') {
                    if ($(this).attr('data-size') >= data.from && $(this).attr('data-size') <= data.to) {
                        $(this).attr('fill-opacity', 0.4);
                    } else {
                        $(this).attr('fill-opacity', 0);
                    }
                }
            });
        },
    })
}



$(document).on("submit", '.js_ajax', function() {
    var _url = location.href;
    var _form = $(this);
    var _data = _form.serialize();

    $.ajax({
        cache: false,
        url: '/',
        data: _data,
        type: "POST",
        dataType: "json",
        success: function(data) {

            if (data.status == true) {

            }
            if (data.status == false) {



            }
        }
    });
    return false;
});