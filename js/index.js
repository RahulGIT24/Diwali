let audio1 = new Audio();
audio1.src = "./audio/LakshiMaa.mp3";

let audio2 = new Audio();
audio2.src = "./audio/ganeshAarti.mp3";

let audio3 = new Audio();
audio3.src = "./audio/vishnuji.mp3";

function playAudio1() {
    audio1.play();
    stopAudio2();
    stopAudio3();
}

function pauseAudio1() {
    audio1.pause();
}
function stopAudio1() {
    audio1.pause();
    audio1.currentTime = 0;
}

function playAudio2() {
    stopAudio1();
    stopAudio3();
    audio2.play();
}

function pauseAudio2() {
    audio2.pause();
}

function stopAudio2() {
    audio2.pause();
    audio2.currentTime = 0;
}

function playAudio3() {
    stopAudio1();
    stopAudio2();
    audio3.play();
}

function pauseAudio3() {
    audio3.pause();
}

function stopAudio3() {
    audio3.pause();
    audio3.currentTime = 0;
}
