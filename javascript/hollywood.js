console.log("Jai shree ram");
console.log("Welcome to music player");
let songIndex = 0;
let playbtn = document.querySelector("#play");
let previousBtn = document.querySelector("#previous");
let nextBtn = document.querySelector("#next");
let progressElement = document.querySelector("#proccessBar");
let songTitle = document.querySelector("#song-name");
let songBanner = document.querySelector("#banner");
let audioElement = new Audio("../../songs/hollywood/h0.mp3");
let songItems = Array.from(document.getElementsByClassName('sbtn'));
let songIcons = Array.from(document.getElementsByClassName('i'));

let songs = [
    { songName: "DJ Gimi-O x habibi", filePath: "../songs/hollywood/h0.mp3", coverPath: "../img/hollywood/h0.jpg" },
    { songName: "French Montana -Unforgettable", filePath: "../songs/hollywood/h1.mp3", coverPath: "../img/hollywood/h1.jpg" },
    { songName: "LSD -Genius", filePath: "../songs/hollywood/h2.mp3", coverPath: "../img/hollywood/h2.jpg" },
    { songName: "Sean Paul -No Lie", filePath: "../songs/hollywood/h3.mp3", coverPath: "../img/hollywood/h3.jpg" },
    { songName: "Sean Paul -Go down deh", filePath: "../songs/hollywood/h4.mp3", coverPath: "../img/hollywood/h4.jpg" },
    { songName: "Danger twins -Thing of Beauty", filePath: "../songs/hollywood/h5.mp3", coverPath: "../img/hollywood/h5.jpg" },
    { songName: "Tick Tick Boom", filePath: "../songs/hollywood/h6.mp3", coverPath: "../img/hollywood/h6.jpg" },
    { songName: "Burak Yeter - Tuesday", filePath: "../songs/hollywood/h7.mp3", coverPath: "../img/hollywood/h7.jpg" },
    { songName: "Dua Lipa - Love Again", filePath: "../songs/hollywood/h8.mp3", coverPath: "../img/hollywood/h8.jpg" },
    { songName: 'Sing me to sleep', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a' },
    
    { songName: 'Fade-NCS Release', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a' },
    { songName: 'She-NCS Release', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b2737b8d8ca1a8e14506c8f35233' },
    { songName: 'On & On (feat. Daniel Levi) [NCS Release]', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc' },
    { songName: 'Invincible [NCS Release]', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741667210035220/DEAF_KEV_-_Invincible_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b27362a57823eced1cb4fd93b2c1' },
    { songName: 'Savannah (feat. Philly K)', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b273b536cfb98c74558db48f8a46'},
    { songName: 'Sky High [NCS Release]', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741836152668201/Elektronomia_-_Sky_High_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b27394ae8395433c0c7521ac25ba'},
    {
        songName: "Where'd You Go(feat.Luna Lark)", filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741837642170382/Julius_Dreisig_-_Where_d_You_Go_feat._Luna_LarkMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b273100fb4649eae80922bf1acbf'},
    { songName: '', filePath: '', coverPath: ''},
]
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

