const track = document.querySelector(
"[data-product-carousel-animated-track]"
);
if (!track) return;

const slides = Array.from(track.children);
slides.forEach((slide) => track.appendChild(slide.cloneNode(true)));

track.style.setProperty("--end-translate", `calc(-${slides.length * 100}vw)`);
