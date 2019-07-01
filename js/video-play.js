function playVideo(id, play) {
    var element = document.getElementById(id);
    var playBtn = document.getElementById(play);

    console.log(element);
    console.log(playBtn);

    playBtn.addEventListener('click', function(e) {
        element.play();
        e.currentTarget.style.display = "none";
        
    })
}

$(function() {
	playVideo('video-mobile', 'js-mobile-play');
})

    
