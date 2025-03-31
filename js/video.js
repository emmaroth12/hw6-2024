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

var playbackSpeed = 1; // Default video playback speed
var isMuted = false; // Flag to track mute status

window.addEventListener("load", function() {
  // Initial setup for video controls
  video.autoplay = false;
  video.loop = false;

  // Set initial volume display
  volumeInfo.textContent = Math.round(video.volume * 100) + "%";

  // Play Button
  playButton.addEventListener("click", function() {
    video.play();
    volumeInfo.textContent = Math.round(video.volume * 100) + "%"; // Update volume text on play
    console.log("Play Video");
  });

  // Pause Button
  pauseButton.addEventListener("click", function() {
    video.pause();
    console.log("Pause Video");
  });

  // Slow Down Button
  slowerButton.addEventListener("click", function() {
    playbackSpeed = Math.max(0.1, playbackSpeed - 0.1); // Slow down but not below 0.1
    video.playbackRate = playbackSpeed;
    console.log("Current playback speed: " + (playbackSpeed * 100) + "%");
  });

  // Speed Up Button
  fasterButton.addEventListener("click", function() {
    playbackSpeed = Math.min(2, playbackSpeed + 0.1); // Speed up but not above 2x
    video.playbackRate = playbackSpeed;
    console.log("Current playback speed: " + (playbackSpeed * 100) + "%");
  });

  // Skip Ahead Button
  skipButton.addEventListener("click", function() {
    var currentTime = video.currentTime;
    var newTime = currentTime + 10;
    if (newTime >= video.duration) {
      video.currentTime = 0; // Loop back to start if video exceeds duration
    } else {
      video.currentTime = newTime;
    }
    console.log("Current video time: " + video.currentTime + " seconds");
  });

  // Mute/Unmute Button
  muteButton.addEventListener("click", function() {
    if (isMuted) {
      video.muted = false;
      muteButton.textContent = "Mute";
    } else {
      video.muted = true;
      muteButton.textContent = "Unmute";
    }
    isMuted = !isMuted;
  });

  // Volume Slider
  volumeSlider.addEventListener("input", function() {
    video.volume = volumeSlider.value / 100; // Volume ranges from 0 to 1
    volumeInfo.textContent = Math.round(video.volume * 100) + "%"; // Update volume text
  });

  // Old School (Grayscale) Button
  vintageButton.addEventListener("click", function() {
    video.style.filter = "grayscale(100%)"; // Apply grayscale filter
  });

  // Original (Remove Grayscale) Button
  origButton.addEventListener("click", function() {
    video.style.filter = "none"; // Remove grayscale filter
  });
});


