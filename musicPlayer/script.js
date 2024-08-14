const titleTag = document.getElementsByClassName("title")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const currentAndDurationTag = document.getElementsByClassName(
  "currentAndDurationTime"
)[0];
const currentProgressBarTag =
  document.getElementsByClassName("currentProgressBar")[0];
const prevBtn = document.getElementsByClassName("prevBtn")[0];
const playBtn = document.getElementsByClassName("playBtn")[0];
const pauseBtn = document.getElementsByClassName("pauseBtn")[0];
const nextBtn = document.getElementsByClassName("nextBtn")[0];

const musics = [
  { musicSrc: "music/BE BTS Life Goes On.mp3", musicTitle: "Life Goes on" },
  { musicSrc: "music/BE BTS Stay.mp3", musicTitle: "BTS Stay" },
  {
    musicSrc: "music/BTS - Answer _ Love Myself.mp3",
    musicTitle: "Answer_love myself",
  },
  {
    musicSrc: "music/BTS - Awake (Jin Solo).mp3",
    musicTitle: "Awake (jin solo)",
  },
  { musicSrc: "music/BTS - Pied Piper.mp3", musicTitle: "Pied Piper" },
];
let currentSong = 0;
let isPlaying = false;
for (let i = 0; i < musics.length; i++) {
  const songTag = document.createElement("div");
  songTag.addEventListener("click", () => {
    const musicSrc = musics[i].musicSrc;
    audioTag.src = musicSrc;
    isPlaying = true;
    audioTag.play();
    updatePlayAndPauseBtn();
    currentSong = i;
    console.log(i);
  });
  songTag.classList.add("songTitle");
  const songs = (i + 1).toString() + ". " + musics[i].musicTitle;
  songTag.textContent = songs;
  titleTag.append(songTag);
  console.log(songs);
}
const autoPlay = () => {
  currentSong += 1;
  play(currentSong);
};
let duration = "00:00";
let durationTime;
audioTag.addEventListener("loadeddata", () => {
  durationTime = Math.floor(audioTag.duration);
  duration = currentTimeAndDuration(durationTime);
});

let currentTime;
audioTag.addEventListener("timeupdate", () => {
  currentTime = Math.floor(audioTag.currentTime);
  const current = currentTimeAndDuration(currentTime);
  currentAndDurationTag.textContent = duration + "/" + current;
  updateProgressBar(currentTime);
});
audioTag.addEventListener("ended", () => {
  if (currentSong < musics.length - 1) {
    currentSong += 1;
  } else {
    currentSong = 0;
  }
  play(currentSong);
  updatePlayAndPauseBtn();
});
const updateProgressBar = (currentTime) => {
  const currentWidth = (500 / durationTime) * currentTime;
  currentProgressBarTag.style.width = currentWidth.toString() + "px";
  // console.log(currentWidth);
};
playBtn.addEventListener("click", () => {
  isPlaying = true;
  if (audioTag.currentTime === 0) {
    play(currentSong);
    updatePlayAndPauseBtn();
  } else {
    audioTag.play();
    updatePlayAndPauseBtn();
  }
  console.log(currentTime);
});
pauseBtn.addEventListener("click", () => {
  isPlaying = false;
  audioTag.pause();
  updatePlayAndPauseBtn();
});
nextBtn.addEventListener("click", () => {
  if (currentSong === musics.length - 1) {
    currentSong = 0;
    play(currentSong);
    return;
  }
  currentSong += 1;
  play(currentSong);
  updatePlayAndPauseBtn();
  console.log(currentSong);
});
prevBtn.addEventListener("click", () => {
  if (currentSong === 0) {
    play(currentSong);
    return;
  }
  currentSong -= 1;
  play(currentSong);
  updatePlayAndPauseBtn();
});
const updatePlayAndPauseBtn = () => {
  if (isPlaying) {
    pauseBtn.style.display = "inline";
    playBtn.style.display = "none";
  } else {
    pauseBtn.style.display = "none";
    playBtn.style.display = "inline";
  }
};

const play = (currentIndex) => {
  const audioTagSrc = musics[currentIndex].musicSrc;
  audioTag.src = audioTagSrc;
  audioTag.play();
};
const currentTimeAndDuration = (totalTime) => {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  return minuteText + ":" + secondText;
};
