console.log("page loaded...");

function playVid(element) {
    element.play();
    element.loop = true;
}

function pauseVid(element) {
    element.pause();
}