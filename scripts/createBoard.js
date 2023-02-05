const list = ref([]);
let attempts = ref(0);

function initBoard(list, cardItems) {
  cardItems.forEach((item) => {
    list.value.push({
      position: null,
      faceValue: item,
      variant: 1,
      visible: false,
      matched: false,
    });
  });
  cardItems.forEach((item) => {
    list.value.push({
      position: null,
      faceValue: item,
      variant: 2,
      visible: false,
      matched: false,
    });
  });
}

// Reorder cardList array to a random order
function shuffleCards() {
  list.value.sort(() => {
    return 0.5 - Math.random();
  });

  return list.value;
}

// Get the position for each card from its index
function getCardIndex() {
  list.value.forEach((card, index) => {
    card.position = index;
  });
}

function create(list, cardItems) {
  initBoard(list, cardItems);
  shuffleCards();
  getCardIndex();

  return list.value;
}

function restart(list) {
  shuffleCards();
  getCardIndex();

  list.value.forEach((card) => {
    (card.visible = false), (card.matched = false), (attempts.value = 0);
  });
}

export { create, restart };
