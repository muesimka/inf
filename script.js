const mainImage = document.getElementById("mainImage");
const prevBut = document.getElementById("prevBut");
const nextBut = document.getElementById("nextBut");
const counter = document.getElementById("count");

const images = Array.isArray(CONFIG.images) ? CONFIG.images : [];
let currentIndex = 0;

function updateImage() {
    if (!images.length) {
        mainImage.removeAttribute("src");
        mainImage.alt = "В коллекции пока нет изображений";
        counter.textContent = "0 / 0";
        prevBut.disabled = true;
        nextBut.disabled = true;
        return;
    }

    mainImage.src = images[currentIndex];
    mainImage.alt = Изображение ${currentIndex + 1} из ${images.length};
    counter.textContent = ${currentIndex + 1} / ${images.length};
}

function showPrevImage() {
    if (!images.length) return;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNextImage() {
    if (!images.length) return;
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

prevBut.addEventListener("click", showPrevImage);
nextBut.addEventListener("click", showNextImage);

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showPrevImage();
    if (event.key === "ArrowRight") showNextImage();
});

updateImage();
Game.init();
