console.log("page loaded...");

 // Listening to the video element
let clip = document.querySelector(".flower-vid")

 /* Adding the event listeners on the video to play/pause the video. */
clip.addEventListener("mouseover", function (e) {
    clip.play();
})

 /* Applying the mouse out event to pause the video */
clip.addEventListener("mouseout", function (e) {
    clip.pause();
})