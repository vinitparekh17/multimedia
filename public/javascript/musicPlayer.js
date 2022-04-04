console.log("Jai shree ram");
console.log("Welcome to music player");

let songs = [
    { songName: "Arijit Singh -khairiyat", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/958296137805201419/r0.mp3", coverPath: "https://media.discordapp.net/attachments/960040901261004830/960041574258065448/r0.jpg" },
    { songName: "Arijit Singh -Enna Sona", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/958296138501460008/r1.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960041574492942396/r1.jpg" },
    { songName: "Arijit Singh -Soch Na Sake", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/958296210542825542/r2.mp3", coverPath: "https://media.discordapp.net/attachments/960040901261004830/960041574685876254/r2.jpg" },
    { songName: "Arijit Singh -Hawayein", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960039023383035954/r4.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960041574924947526/r4.jpg" },
    {
        songName: "Arijit Singh -Hamdard", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960039145378553917/r6.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960041575155646525/r6.jpg" },
    {
        songName: "Arijit Singh -Phir Kabhi", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960039204103012362/r7.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960041575537336340/r7.jpg"
    },
    
    { songName: "DJ Gimi-O x habibi", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960039573319217232/h0.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960041933395345528/h0.jpg" },
    { songName: "French Montana -Unforgettable", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960039613613875200/h1.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960041933634416660/h1.jpg" },
    { songName: "LSD -Genius", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960039665463861258/h2.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960041933839945768/h2.jpg" },
    { songName: "Sean Paul -No Lie", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960039729150189588/h3.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960041934049673267/h3.jpg" },
    { songName: "Sean Paul -Go down deh", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960039761651843112/h4.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960041934271963156/h4.jpg" },
    { songName: "Danger twins -Thing of Beauty", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960039831919034509/h5.mp3", coverPath: "" },
    { songName: "Tick Tick Boom", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960039864307441674/h6.mp3", coverPath: "https://media.discordapp.net/attachments/960040901261004830/960042132171784262/h6.jpg?width=941&height=588" },
    { songName: "Burak Yeter - Tuesday", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960039919911337994/h7.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960042207233081374/h7.jpg" },
    { songName: "Dua Lipa - Love Again", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960040023175102474/h8.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960044951910105098/images.jpeg" },
    { songName: "Angetenar -Rompasso", filePath: "https://cdn.discordapp.com/attachments/958287122895339540/960040140712071228/h9.mp3", coverPath: "https://cdn.discordapp.com/attachments/960040901261004830/960053769108860968/h9.jpg" },
    { songName: 'Sing me to sleep', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a' },

    { songName: 'Fade-NCS Release', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a' },
    { songName: 'She-NCS Release', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b2737b8d8ca1a8e14506c8f35233' },
    { songName: 'On & On (feat. Daniel Levi) [NCS Release]', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc' },
    { songName: 'Invincible [NCS Release]', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741667210035220/DEAF_KEV_-_Invincible_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b27362a57823eced1cb4fd93b2c1' },
    { songName: 'Savannah (feat. Philly K)', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b273b536cfb98c74558db48f8a46' },
    { songName: 'Sky High [NCS Release]', filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741836152668201/Elektronomia_-_Sky_High_NCS_ReleaseMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b27394ae8395433c0c7521ac25ba' },
    {
        songName: "Where'd You Go(feat.Luna Lark)", filePath: 'https://cdn.discordapp.com/attachments/775740994595323954/775741837642170382/Julius_Dreisig_-_Where_d_You_Go_feat._Luna_LarkMP3_160K.mp3', coverPath: 'https://i.scdn.co/image/ab67616d0000b273100fb4649eae80922bf1acbf'
    },
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
        console.log(songIcons[songIndex]);
        // console.log(songItems[songIndex])

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

