
function blowCandle() {
    const flame = document.getElementById('flame');
    const hint = document.getElementById('hint');
    const decoration = document.getElementById('decoration');
    const wish = document.getElementById('wish');

    if (flame) {
        flame.style.display = 'none';
        if (hint) hint.style.display = 'none';
        if (decoration) decoration.style.display = 'block';

        // 🎊 Confetti
        startConfetti();

        // ✨ Sparkles
        showSparkles();

        // 🔊 Sound
        playCelebrateSound();

        // 🧁 Ketik Doa
        const text = "Semoga di ulang tahun adek yang ke-13 adek selalu diberi kebahagiaan, kesehatan dan kesuksesan dalam setiap langkah.wish you all the best🤲🏼 Selamat ulang tahun adeku tersayang!! 🤗🎉Maafkan kakak ya blm bisa ketemu sama adek🙏🏼😔🤗";
        typeWishText(text, "wish");
    }
}

function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];

    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            c: `hsl(${Math.random() * 360}, 100%, 60%)`,
            v: Math.random() * 3 + 2
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            ctx.fillStyle = c.c;
            ctx.fill();
        });
    }

    function update() {
        confetti.forEach(c => {
            c.y += c.v;
            if (c.y > canvas.height) c.y = -10;
        });
    }

    function loop() {
        draw();
        update();
        requestAnimationFrame(loop);
    }

    loop();
}

function showSparkles() {
    const container = document.getElementById('sparkle-container');
    for (let i = 0; i < 20; i++) {
        const s = document.createElement('div');
        s.classList.add('sparkle');
        s.style.left = `${Math.random() * 100}px`;
        s.style.top = `${Math.random() * 30}px`;
        container.appendChild(s);
        setTimeout(() => s.remove(), 1000);
    }
}

function typeWishText(text, elementId) {
    const el = document.getElementById(elementId);
    el.innerHTML = "";
    el.style.display = 'block';
    let i = 0;
    const interval = setInterval(() => {
        el.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 50);
}

function playCelebrateSound() {
    const audio = document.getElementById('celebrate-audio');
    if (audio) audio.play();
}
