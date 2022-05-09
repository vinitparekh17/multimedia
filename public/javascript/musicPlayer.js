console.log("Jai shree ram");
console.log("Welcome to music player");

let songs = []
async function fetching() {
    fetch('/getSong')
        .then(res => res.json())
        .then(data => {
            songs = data
            return ({data})
        })
        .catch(e => console.log(e))
}
window.onload = fetching();
let songIndex = 1;
let playbtn = document.querySelector("#play");
let previousBtn = document.querySelector("#previous");
let nextBtn = document.querySelector("#next");
let progressElement = document.querySelector("#proccessBar");
let songTitle = document.querySelector("#song-name");
let songBanner = document.querySelector("#banner");
let audioElement = new Audio("https://cdn.discordapp.com/attachments/958287122895339540/958296137805201419/r0.mp3");
let songItems = Array.from(document.getElementsByClassName('sbtn'));
let songIcons = Array.from(document.getElementsByClassName('i'));
// play pause button 
function playPause() {
    if (audioElement.paused) {
        audioElement.play();
        allPlay();
        playbtn.classList.add("fa-pause");
        playbtn.classList.remove("fa-play");
        songBanner.classList.add("animate");
        songIcons[songIndex].classList.remove('fa-circle-play')
        songIcons[songIndex].classList.add('fa-circle-pause')
    } else {
        audioElement.pause();
        allPlay();
        playbtn.classList.remove("fa-pause");
        playbtn.classList.add("fa-play");
        songBanner.classList.remove("animate")
        songIcons[songIndex].classList.remove('fa-circle-pause')
        songIcons[songIndex].classList.add('fa-circle-play')
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
                songIcons[songIndex].classList.remove('fa-circle-play');
                songIcons[songIndex].classList.add('fa-circle-pause');
            } else {
                audioElement.pause();
                playbtn.classList.remove("fa-pause");
                playbtn.classList.add("fa-play");
                songBanner.classList.remove("animate");
                songIcons[songIndex].classList.add('fa-circle-play');
                songIcons[songIndex].classList.remove('fa-circle-pause');
            }
            break;
        case "Enter":
            if (audioElement.paused) {
                audioElement.play();
                playbtn.classList.add("fa-pause");
                playbtn.classList.remove("fa-play");
                songBanner.classList.add("animate");
                songIcons[songIndex].classList.remove('fa-circle-play');
                songIcons[songIndex].classList.add('fa-circle-pause');
            } else {
                audioElement.pause();
                playbtn.classList.remove("fa-pause");
                playbtn.classList.add("fa-play");
                songBanner.classList.remove("animate");
                songIcons[songIndex].classList.add('fa-circle-play');
                songIcons[songIndex].classList.remove('fa-circle-pause');
            }
            break;
        case "MediaPlayPause":
            if (audioElement.paused) {
                audioElement.play();
                playbtn.classList.add("fa-pause");
                playbtn.classList.remove("fa-play");
                songBanner.classList.add("animate");
                songIcons[songIndex].classList.remove('fa-circle-play');
                songIcons[songIndex].classList.add('fa-circle-pause');
            } else {
                audioElement.pause();
                playbtn.classList.remove("fa-pause");
                playbtn.classList.add("fa-play");
                songBanner.classList.remove("animate");
                songIcons[songIndex].classList.add('fa-circle-play');
                songIcons[songIndex].classList.remove('fa-circle-pause');
            }
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
    allPlay();
    audioElement.src = songs[songIndex].filePath;
    songTitle.textContent = songs[songIndex].songName;
    songBanner.src = songs[songIndex].coverPath;
    songBanner.classList.add('animate');
    playbtn.classList.add('fa-pause');
    playbtn.classList.remove('fa-play');
    songIcons[songIndex].classList.remove('fa-circle-play')
    songIcons[songIndex].classList.add('fa-circle-pause')
    audioElement.play();
}

function previousFunction() {
    if (songIndex == 0) {
        songIndex = songs.length - 1;
    } else {
        songIndex -= 1;
    }
    allPlay()
    audioElement.src = songs[songIndex].filePath;
    songTitle.textContent = songs[songIndex].songName;
    songBanner.src = songs[songIndex].coverPath;
    songBanner.classList.add('animate');
    playbtn.classList.add('fa-pause');
    playbtn.classList.remove('fa-play');
    songIcons[songIndex].classList.remove('fa-circle-play');
    songIcons[songIndex].classList.add('fa-circle-pause');
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
        songIndex = parseInt(element.id) - 1;
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

