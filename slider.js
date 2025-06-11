const carousel = document.querySelector('.app-screenshot-carousel');
const images = carousel.querySelectorAll('.slider-images img');
const prevButton = carousel.querySelector('.prev-button');
const nextButton = carousel.querySelector('.next-button');
const dotsContainer = carousel.querySelector('.slider-dots');
const dots = dotsContainer.querySelectorAll('.dot');

let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    currentIndex = index;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index);
    });
});

// Auto-advance the carousel
let autoSlideInterval = setInterval(showNextImage, 5000); // Change image every 5 seconds

// Pause auto-advance when hovering over the carousel
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Resume auto-advance when not hovering
carousel.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(showNextImage, 5000);
});

// Initial display
showImage(currentIndex);