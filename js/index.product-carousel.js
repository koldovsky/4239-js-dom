const slides = [
  '<div class="product-carousel__slide"><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
  '<div class="product-carousel__slide"><img src="img/banana.svg" alt="Banana"></div>',
  '<div class="product-carousel__slide"><img src="img/girl.svg" alt="Girl"></div>',
  '<div class="product-carousel__slide"><img src="img/viking.svg" alt="Viking"></div>',
];

let currentIndex = 0;

function updateCarousel() {
  const slidesContainer = document.querySelector(".product-carousel__slides");
  slidesContainer.innerHTML = slides[currentIndex];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondSlideIndex = (currentIndex + 1) % slides.length;
    slidesContainer.innerHTML += slides[secondSlideIndex];
    if (window.matchMedia("(min-width: 1024px)").matches) {
      const thirdSlideIndex = (currentIndex + 2) % slides.length;
      slidesContainer.innerHTML += slides[thirdSlideIndex];
    }
  }
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

// setInterval(showNextSlide, 3000); 
updateCarousel();

document.querySelector(".product-carousel__button--next").addEventListener("click", showNextSlide);
document.querySelector(".product-carousel__button--prev").addEventListener("click", showPrevSlide);

function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

window.addEventListener("resize", debounce(updateCarousel, 200));