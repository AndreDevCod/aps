// carrossel-noticias.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) Escopo do carrossel de notícias
  const newsSection = document.querySelector('#noticias-carousel');
  if (!newsSection) return;

  const slidesContainer = newsSection.querySelector('.carousel-slides');
  const slides = newsSection.querySelectorAll('.slide.news-slide');
  const prevBtn = newsSection.querySelector('.carousel-btn.prev');
  const nextBtn = newsSection.querySelector('.carousel-btn.next');

  let currentIndex = 0;
  const total = slides.length;

  function showSlide(i) {
    if (i < 0) currentIndex = total - 1;
    else if (i >= total) currentIndex = 0;
    else currentIndex = i;

    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // 2) Botões
  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

  // 3) Auto-play
  setInterval(() => showSlide(currentIndex + 1), 5000);

  // 4) Inicia no primeiro slide
  showSlide(0);
});
