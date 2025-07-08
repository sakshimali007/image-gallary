// ai-categorizer.js

// Simulated AI image category labeling demo window.addEventListener('DOMContentLoaded', () => { const allImages = document.querySelectorAll('#gallery img'); const categories = ['nature', 'city', 'animals', 'people', 'technology'];

allImages.forEach((img) => { if (!img.dataset.category || img.dataset.category === 'uploaded') { // Assign a random category for demo const randomCat = categories[Math.floor(Math.random() * categories.length)]; img.dataset.category = randomCat; const caption = img.parentElement.querySelector('figcaption'); if (caption) { caption.innerText = 🤖 AI Tagged: ${randomCat}; } } }); });