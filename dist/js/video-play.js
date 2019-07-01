function playVideo(id, play) {
    var element = document.getElementById(id);
    var playBtn = document.getElementById(play);

    play.addEventListener('click', function(e) {
        element.play();
    })
}

window.onload = function() {
    playVideo('video-mobile', 'js-mobile-play');
};