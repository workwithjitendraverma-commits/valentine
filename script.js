const noBtn = document.getElementById("noBtn");
const yesBtn = document.querySelector(".yes");
const card = document.querySelector(".card");
const loveScreen = document.getElementById("loveScreen");
const giftBox = document.getElementById("giftBox");
const giftScreen = document.getElementById("giftScreen");

/* 🎵 Music */
const bgMusic = new Audio();
bgMusic.loop = true;

const tunes = [
    "https://cdn.pixabay.com/audio/2022/10/20/audio_29f8b61a1d.mp3",
    "https://cdn.pixabay.com/audio/2022/08/02/audio_88447e769f.mp3",
    "https://cdn.pixabay.com/audio/2022/03/15/audio_4c09c6d4e7.mp3"
];

const themes = [
    "linear-gradient(135deg,#ff4e8d,#ff1f6b)",
    "linear-gradient(135deg,#ff7eb3,#ff758c)",
    "linear-gradient(135deg,#ff512f,#dd2476)"
];

const messages = [
    "🥺 Are you sure?",
    "💔 Don’t break my heart",
    "😢 Please think again",
    "❤️ Choose YES"
];

let clicks = 0;
let tuneIndex = 0;

/* 🎁 Open gift */
giftBox.addEventListener("click", () => {
    giftScreen.style.display = "none";
    card.classList.remove("hidden");
    bgMusic.src = tunes[0];
    bgMusic.play();
});

/* 😈 No moves */
noBtn.addEventListener("mouseenter", () => {
    noBtn.style.transform = `translate(${Math.random()*120-60}px,${Math.random()*80-40}px)`;
});

noBtn.addEventListener("touchstart", () => {
    noBtn.style.transform = `translate(${Math.random()*80-40}px,${Math.random()*60-30}px)`;
});

/* 💬 Floating text */
function spawnFloatingTexts(text) {
    // 🔥 FIRST ONE = INSTANT
    createText(text, 0);

    // baaki thode thode delay ke sath
    for (let i = 1; i < 5; i++) {
        createText(text, i * 120); // interval same rahega
    }
}

function createText(text, delay) {
    setTimeout(() => {
        const el = document.createElement("div");
        el.className = "floating-text";
        el.innerText = text;

        el.style.left = Math.random() * 90 + "%";
        el.style.fontSize = 14 + Math.random() * 14 + "px";
        el.style.animationDuration = 5 + Math.random() * 2 + "s";

        document.body.appendChild(el);

        setTimeout(() => el.remove(), 7000);
    }, delay);
}
/* ❤️ No click */
noBtn.addEventListener("click", () => {
    clicks++;
    tuneIndex = (tuneIndex + 1) % tunes.length;

    bgMusic.src = tunes[tuneIndex];
    bgMusic.play();
    document.body.style.background = themes[tuneIndex];

    const msg = messages[clicks % messages.length];
    spawnFloatingTexts(msg);   // ✅ MULTIPLE TEXTS

    if (clicks === 1) {
        noBtn.innerText = "Are you sure? 🥺";
    } 
    else if (clicks === 2) {
        noBtn.innerText = "Think again 😔";
        yesBtn.style.transform = "scale(1.1)";
    } 
    else if (clicks === 3) {
        noBtn.innerText = "Last chance 😢";
        yesBtn.style.transform = "scale(1.2)";
    } 
    else {
        noBtn.innerText = "Now don’t think too much… just click YES ❤️😉";
        noBtn.disabled = true;
        noBtn.style.opacity = "0.6";
        yesBtn.style.transform = "scale(1.3)";
    }
});

/* 💖 Yes */
function yesClick(){
    card.style.display = "none";
    bgMusic.pause();
    loveScreen.style.display = "flex";
}
