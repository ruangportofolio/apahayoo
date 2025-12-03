window.addEventListener('load', () => {
    const bgm = document.getElementById('bgm');
    bgm.volume = 0; // HARUS 0 AGAR AUTOPLAY DIIZINKAN

    // coba autoplay
    bgm.play().then(() => {
        fadeIn(bgm);
    }).catch(() => {
        console.warn("Autoplay diblokir. Tunggu interaksi user.");
    });

    // jika diblokir, klik pertama memulai musik
    document.body.addEventListener('click', () => {
        bgm.play();
        fadeIn(bgm);
    }, { once: true });
});

// efek fade-in
function fadeIn(audio) {
    let vol = 0;
    const interval = setInterval(() => {
        if (vol < 1) {
            vol += 0.05;
            audio.volume = vol;
        } else {
            clearInterval(interval);
        }
    }, 150);
}
