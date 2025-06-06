document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.projects');
  if (!carousel) return;

  const cards = Array.from(carousel.children);
  const radius = carousel.clientWidth / 2;
  const angle = 360 / cards.length;
  let rotangle = 0;

  cards.forEach((card, idx) => {
    card.style.position = 'absolute';
    card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    card.style.transform = `rotateY(${angle * idx}deg) translateZ(${radius}px)`;
  });
1
  function update() {
    carousel.style.transform = `translateZ(-${radius}px) rotateY(${rotangle}deg)`
  }

  document.querySelector('.next').addEventListener('click', () => {
    rotangle -= angle
    update();
  });

  document.querySelector('.prev').addEventListener('click', () => {
    rotangle += angle
    update();
  });

  update();
});
