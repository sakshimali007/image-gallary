let currentIndex = 0;
let images = [];

window.onload = () => {
  images = Array.from(document.querySelectorAll('.gallery .image-card img'));
};

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
  currentIndex = images.findIndex(img => img.src === src);
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function prevImage(event) {
  event.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function nextImage(event) {
  event.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

function filterImages(category) {
  const cards = document.querySelectorAll('.image-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}