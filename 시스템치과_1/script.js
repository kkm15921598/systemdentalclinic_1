const cards = document.querySelectorAll('.story-card');
const prevButton = document.querySelector('.story-arrow--left');
const nextButton = document.querySelector('.story-arrow--right');
let currentIndex = 0;

function updateStory(index) {
  cards.forEach((card, idx) => {
    card.classList.toggle('active', idx === index);
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateStory(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateStory(currentIndex);
});
