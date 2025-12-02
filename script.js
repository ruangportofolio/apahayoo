// Attempt autoplay (browser sometimes blocks, but this helps)
window.addEventListener('load', () => {
    const bgm = document.getElementById('bgm');

    const tryPlay = () => {
        bgm.play().catch(() => {
            console.log("Autoplay diblokir. Akan mencoba lagi setelah klik pertama.");
        });
    };

    tryPlay();

    // When user clicks anywhere, try again
    document.body.addEventListener('click', tryPlay, { once: true });
});
