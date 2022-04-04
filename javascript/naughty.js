console.log("Jai shree ram");
console.log("Welcome to music player");

let songs = [
    { songName: "Ariana Grande -34+35", filePath: "../songs/naughty/n0.mp3", coverPath: "../img/naughty/n0.jpg" },
    { songName: "Doja cat -Kiss me more", filePath: "../songs/naughty/n1.mp3", coverPath: "../img/naughty/n1.jpg" },
    { songName: "Neha kakkar -Dilbar", filePath: "../songs/naughty/n2.mp3", coverPath: "../img/naughty/n2.jpg" },
    { songName: "Aastha Gill -Kamariya", filePath: "../songs/naughty/n3.mp3", coverPath: "../img/naughty/n3.jpg" },
    { songName: "Ariana Grande -Position", filePath: "../songs/naughty/n4.mp3", coverPath: "../img/naughty/n4.jpg" },
    { songName: "Honey singh -Chaar Botal", filePath: "../songs/naughty/n5.mp3", coverPath: "../img/naughty/n5.jpg" },
    { songName: "Badshaah -Garmi", filePath: "../songs/naughty/n6.mp3", coverPath: "../img/naughty/n6.jpg" },
    { songName: "Doja cat -Need to know", filePath: "../songs/naughty/n7.mp3", coverPath: "../img/naughty/n7.jpg" },
    { songName: "Honey singh -Saiyaan ji", filePath: "../songs/naughty/n8.mp3", coverPath: "../img/naughty/n8.jpg" },
    { songName: "Oo Antava oo antava", filePath: "../songs/naughty/n9.mp3", coverPath: "../img/naughty/n9.jpg" },
]
let songIndex = 0;
let playbtn = document.querySelector("#play");
let previousBtn = document.querySelector("#previous");
let nextBtn = document.querySelector("#next");
let progressElement = document.querySelector("#proccessBar");
let songTitle = document.querySelector("#song-name");
let songBanner = document.querySelector("#banner");
let audioElement = new Audio("../../songs/naughty/n0.mp3");
let songItems = Array.from(document.getElementsByClassName('sbtn'));
let songIcons = Array.from(document.getElementsByClassName('i'));

// play pause button 
function playPause() {
    if (audioElement.paused) {
        audioElement.play();
        playbtn.classList.add("fa-pause");
        playbtn.classList.remove("fa-play");
        songBanner.classList.add("animate");
        songIcons[songIndex].classList.add('fa-cicle-pause')
        songIcons[songIndex].classList.remove('fa-cicle-play')
        console.log(songIndex);
    } else {
        audioElement.pause();
        playbtn.classList.remove("fa-pause");
        playbtn.classList.add("fa-play");
        songBanner.classList.remove("animate")
    }
}

function keyEvent(key) {
    switch (key) {
        case " ":
            if (audioElement.paused) {
                audioElement.play();
                playbtn.classList.add("fa-pause");
                playbtn.classList.remove("fa-play");
                songBanner.classList.add("animate");
            } else {
                audioElement.pause();
                playbtn.classList.remove("fa-pause");
                playbtn.classList.add("fa-play");
                songBanner.classList.remove("animate")
            }
            break;
        case "Enter":
            if (audioElement.paused) {
                audioElement.play();
                playbtn.classList.add("fa-pause");
                playbtn.classList.remove("fa-play");
                songBanner.classList.add("animate");
            } else {
                audioElement.pause();
                playbtn.classList.remove("fa-pause");
                playbtn.classList.add("fa-play");
                songBanner.classList.remove("animate")
            }
            break;
        default:
            return;
    }
}

// update progressbar 
function progressTime() {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressElement.value = progress;
}
// change progressBar
function changeProgress() {
    audioElement.currentTime = ((progressElement.value * audioElement.duration) / 100)
}

// next button 
function nextFunction() {
    if (songIndex == songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    songTitle.textContent = songs[songIndex].songName;
    songBanner.src = songs[songIndex].coverPath;
    songBanner.classList.add('animate');
    playbtn.classList.add('fa-pause');
    playbtn.classList.remove('fa-play');
    audioElement.play();
}

function previousFunction() {
    console.log(songIndex);
    if (songIndex == 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    songTitle.textContent = songs[songIndex].songName;
    songBanner.src = songs[songIndex].coverPath;
    songBanner.classList.add('animate');
    playbtn.classList.add('fa-pause');
    playbtn.classList.remove('fa-play');
    audioElement.play();
}

// play songs by it's thumbnail section

// maintaining default icon
const allPlay = () => {
    songIcons.map(e => {
        e.classList.add('fa-circle-play')
        e.classList.remove('fa-circle-pause')
    })
}
// changing song by id
songItems.map(element => {
    element.addEventListener("click", e => {
        allPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        songIndex = parseInt(element.id);
        songTitle.textContent = songs[songIndex].songName;
        songBanner.classList.add('animate')
        audioElement.src = songs[songIndex].filePath;
        songBanner.src = songs[songIndex].coverPath;
        audioElement.currentTime = 0;
        audioElement.play();
        playbtn.classList.add("fa-pause");
        playbtn.classList.remove("fa-play");
    })
})

// event listneners
playbtn.addEventListener("click", playPause);
audioElement.addEventListener("timeupdate", progressTime);
progressElement.addEventListener("change", changeProgress);
document.addEventListener("keydown", e => keyEvent(e.key));
nextBtn.addEventListener("click", nextFunction);
previousBtn.addEventListener("click", previousFunction);

