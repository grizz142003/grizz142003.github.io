document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel-container');
  if (!carousel) return;

  const cards = Array.from(carousel.children);
  const angleStep = 360 / cards.length;
  const radius = carousel.clientWidth / 2;
  let angle = 0;

  cards.forEach((card, idx) => {
    card.style.transform = `rotateY(${idx * angleStep}deg) translateZ(${radius}px)`;
  });

  function update() {
    carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
  }

  document.querySelector('.next').addEventListener('click', () => {
    angle -= angleStep;
    update();
  });

  document.querySelector('.prev').addEventListener('click', () => {
    angle += angleStep;
    update();
  });

  update();
});