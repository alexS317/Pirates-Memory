const cardList = ref([]);
let attempts = ref(0);

function initGame(cardItems) {
  cardItems.forEach((item) => {
    cardList.value.push({
      position: null,
      faceValue: item,
      variant: 1,
      visible: false,
      matched: false,
    });
  });
  cardItems.forEach((item) => {
    cardList.value.push({
      position: null,
      faceValue: item,
      variant: 2,
      visible: false,
      matched: false,
    });
  });
};

// Reorder cardList array to a random order
function shuffleCards() {
  cardList.value.sort(() => {
    return 0.5 - Math.random();
  });

  return cardList.value;
}

// Get the position for each card from its index
function getCardIndex() {
  cardList.value.forEach((card, index) => {
    card.position = index;
  });
}

function createGame(cardItems) {
  initGame(cardItems);
  shuffleCards();
  getCardIndex();

  return cardList;
}

function restartGame(cardList) {
  shuffleCards();
  getCardIndex();

  cardList.value.forEach((card) => {
    (card.visible = false), (card.matched = false), (attempts.value = 0);
  });
}

export { createGame };
