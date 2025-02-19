const flipButton = document.querySelector('.flip-button');
const card = document.querySelector('.card');

const flipCard = () => {
  card.classList.toggle('is-flipped');
};

flipButton.addEventListener('click', flipCard);
