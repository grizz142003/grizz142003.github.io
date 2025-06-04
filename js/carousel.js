document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel-container');
  if (!carousel) return;

  const cards = Array.from(carousel.children);
  const radius = carousel.clientWidth;
  const cardWidth = cards[0].clientWidth;
  const len = cards.length;
  let index = 0;

  cards.forEach((card) => {
    card.style.position = 'absolute';
    card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
  });

  function update() {
    const prevIndex = (index - 1 + len) % len;
    const nextIndex = (index + 1) % len;

    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateZ(-1000px)';
    });

    cards[prevIndex].style.transform = `translateX(${-cardWidth * 0.6}px) translateZ(${-radius}px)`;
    cards[prevIndex].style.opacity = '0.5';

    cards[index].style.transform = `translateX(0px)`;
    cards[index].style.opacity = '1';

    cards[nextIndex].style.transform = `translateX(${cardWidth * 0.6}px) translateZ(${-radius}px)`;
    cards[nextIndex].style.opacity = '0.5';
  }

  document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % len;
    console.log('Next:', index);
    update();
  });

  document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + len) % len;
    console.log('Prev:', index);
    update();
  });

  update();
});
