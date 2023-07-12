var cards = document.querySelectorAll('.card');
var currentCard = 0;

function showCard(cardIndex) {
  cards[currentCard].classList.add('hidden');
  cards[cardIndex].classList.remove('hidden');
  currentCard = cardIndex;
}

function showNextCard() {
  if (currentCard === cards.length - 3) {
    // Reached the 5th or 6th card, stop further sliding
    return;
  }
  var nextCard = currentCard + 1;
  showCard(nextCard);
  hideCards();
  slideCards();
}

function showPrevCard() {
  if (currentCard === 0) {
    // Reached the 1st card, stop further sliding
    return;
  }
  var prevCard = currentCard - 1;
  showCard(prevCard);
  hideCards();
  slideCards();
}

function slideCards() {
  var translateValue = -currentCard * (cards[0].offsetWidth + 20);
  document.querySelector('.cards').style.transform = 'translateX(' + translateValue + 'px)';
}

function hideCards() {
  var firstVisibleCard = currentCard;
  for (var i = 0; i < cards.length; i++) {
    if (i < firstVisibleCard || i >= firstVisibleCard + 3) {
      cards[i].classList.add('hidden');
    } else {
      cards[i].classList.remove('hidden');
    }
  }
}

hideCards();
window.addEventListener('resize', function () {
  slideCards();
  hideCards();
});
