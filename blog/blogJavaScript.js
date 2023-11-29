//SCRIPT DO CARROSSEL

      // Funções para navegar pelos slides

// carousel.js

let currentIndex = 0;

function showSlide(index) {
  const imageList = document.querySelector('.image-list');
  const imageWidth = document.querySelector('.image-item').clientWidth;
  const newPosition = -index * imageWidth;
  imageList.style.transform = `translateX(${newPosition}px)`;
  currentIndex = index;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + getImageCount()) % getImageCount();
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % getImageCount();
  showSlide(currentIndex);
}

function getImageCount() {
  return document.querySelectorAll('.image-item').length;
}

window.prevSlide = prevSlide;
window.nextSlide = nextSlide;