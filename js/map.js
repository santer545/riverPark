var allSize = [];



function max(arr){

 var max = arr[0];

 for(var i=1; i<arr.length; i++){

   if(arr[i] > max){

     max = arr[i];   

   }

  }

return max;

}

function min(obj) {

    var a = obj[0];

    for (var i = 1; i < obj.length; i++) {

        if (obj[i] < a) {

            a = obj[i];

        }

    }

    return a;

}





$( "path" ).each(function( index ) {

    allSize.push(Number($(this).attr('data-size'))); 

});



var FilterArray = allSize.filter(Boolean);

var minAllSize = min(FilterArray);

var maxAllSize = max(FilterArray);





function rangePrice(t, minAllSize, maxAllSize) {

    $("." + t).ionRangeSlider({

        type: "double",

        min: maxAllSize,

        max: maxAllSize,

        step: 1,

        prefix: "",

        hide_min_max: !0,

        onChange: function (data) {

            

            $( "a path" ).each(function( index ) {

            	if ($(this).attr('data-status') != 'red'){

	            	if($(this).attr('data-size') >= data.from && $(this).attr('data-size') <= data.to){

				  	   $(this).attr('fill-opacity', 0.4);

				  	}else{

				  	   $(this).attr('fill-opacity', 0);

				  	}

			  	}

			});

        },

    })

}


function imgWidthCalc() {
    if($(window).width() < 991) {
        var imgWidth = $('.big-img img').width();
        $('.big-img').width(imgWidth);
    }
    
}



$(document).on("submit", '.js_ajax', function () {

        var _url  = location.href;

        var _form = $(this);

        var _data = _form.serialize();



        $.ajax({

            cache   : false,

            url     : '/',

            data    : _data,

            type    : "POST",

            dataType: "json",

            success : function (data) {

                $('#js-contacts').modal('hide');

                if (data.status == true) {

                    $('#js-thanks .modal-title').text('Спасибо! Ваши контакты отправлены');

                    $('#js-thanks').modal('show');

                }

                if (data.status == false) {

                    $('#js-thanks .modal-title').text('Извините! Что-то пошло не так');

                    $('#js-thanks').modal('show');

                }

            }

        });

        return false;


        

    });