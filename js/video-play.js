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
