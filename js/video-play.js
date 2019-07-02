function playVideo(id, play) {
    var element = document.getElementById(id);
    var playBtn = document.getElementById(play);

    playBtn.addEventListener('click', function(e) {
    	openFullscreen(element);
        element.play();
        e.currentTarget.style.display = "none";
        
    })
}


function openFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { /* Firefox */
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { /* IE/Edge */
    element.msRequestFullscreen();
  }
}

$(function() {
	playVideo('video-mobile', 'js-mobile-play');
});


$(window).scroll(function(e)
  {
    var offsetRange = $(window).height() / 3,
        offsetTop = $(window).scrollTop() + offsetRange + $("#header").outerHeight(true),
        offsetBottom = offsetTop + offsetRange;

    $("#video").each(function () { 
      var y1 = $(this).offset().top;
      var y2 = offsetTop;
      if (y1 + $(this).outerHeight(true) < y2 || y1 > offsetBottom) {
        this.pause(); 
      } else {
        this.play();
      }
    });
});

