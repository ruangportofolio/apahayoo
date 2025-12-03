const bgm = document.getElementById("bgm");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
    bgm.volume = 1;
    bgm.play();
    playBtn.style.animation = "none"; // stop wiggle
    playBtn.style.opacity = "0.4"; // tampak sudah ditekan
});
