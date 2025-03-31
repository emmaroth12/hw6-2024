// Get video element and other necessary DOM elements
var video = document.getElementById("player1");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var slowerButton = document.getElementById("slower");
var fasterButton = document.getElementById("faster");
var skipButton = document.getElementById("skip");
var muteButton = document.getElementById("mute");
var volumeSlider = document.getElementById("slider");
var volumeInfo = document.getElementById("volume");
var vintageButton = document.getElementById("vintage");
var origButton = document.getElementById("orig");

volumeInfo.textContent = Math.round(video.volume * 100) + "%";

window.addEventListener("load", function() {
    // Initial setup for video controls
    video.autoplay = false;
    video.loop = false;

 video.addEventListener('error', function() {
        console.error('Video error:', video.error);
    });

    // Play Button
    playButton.addEventListener("click", function() {
        video.play();
        volumeInfo.textContent = Math.round(video.volume * 100) + "%";
        console.log("Play Video");
    });

    // Pause Button
    pauseButton.addEventListener("click", function() {
        video.pause();
        console.log("Pause Video");
    });

    // Slow Down Button
    slowerButton.addEventListener("click", function() {
        video.playbackRate = Math.max(0.1, video.playbackRate - 0.1);
        console.log("Current playback speed: " + (video.playbackRate * 100) + "%");
    });

    // Speed Up Button
    fasterButton.addEventListener("click", function() {
        video.playbackRate = Math.min(2.0, video.playbackRate + 0.1);
        console.log("Current playback speed: " + (video.playbackRate * 100) + "%");
    });

    // Skip Ahead Button
    skipButton.addEventListener("click", function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current video time: " + video.currentTime + " seconds");
    });

    // Mute/Unmute Button
    muteButton.addEventListener("click", function() {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? "Unmute" : "Mute";
    });

    // Volume Slider
    volumeSlider.addEventListener("input", function() {
        video.volume = volumeSlider.value / 100;
        volumeInfo.textContent = Math.round(video.volume * 100) + "%";
    });

    // Old School (Grayscale) Button
    vintageButton.addEventListener("click", function() {
    video.classList.add("oldSchool"); // Change "vintage" to "oldSchool"
});

origButton.addEventListener("click", function() {
    video.classList.remove("oldSchool"); // Change "vintage" to "oldSchool"
});
});

