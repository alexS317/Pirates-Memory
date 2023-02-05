import { defineStore } from "pinia";
import pirateCards from "@/data/pirateCards.json";

export const useGameStore = defineStore("GameStore", () => {
  const cardList = ref([]);
  const cardItems = pirateCards;
  const playerSelection = ref([]);
  let attempts = ref(0);

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

  // Create 2x8 cards on the board, so there are always 2 cards with the same faceValue
  function initGame() {
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
    shuffleCards();
    getCardIndex();
  }

  // Reshuffle and hide the cards and clear previous matches to restart
  function restartGame() {
    shuffleCards();
    getCardIndex();
    cardList.value.forEach((card) => {
      (card.visible = false), (card.matched = false), (attempts.value = 0);
    });
  }

  // Flip the card that sent an emit (= was clicked) to be visible
  function flipCard(emitData) {
    cardList.value[emitData.position].visible = true;

    // If playerSelection array is empty, put clicked card's emitData in position 0
    // If not, put it in position 1 -> playerSelection never contains more than 2 elements
    if (playerSelection.value[0]) {
      // Prevent player from selecting the same card twice
      if (
        playerSelection.value[0].position === emitData.position &&
        playerSelection.value[0].selectedFaceValue ===
          emitData.selectedFaceValue
      ) {
        return;
      } else playerSelection.value[1] = emitData;
    } else playerSelection.value[0] = emitData;
  }

  // Check if the 2 cards selected by the player match
  watch(
    playerSelection,
    (currentValue) => {
      if (currentValue.length === 2) {
        const cardOne = currentValue[0];
        const cardTwo = currentValue[1];

        attempts.value++;

        // Set cards to matched if they have the same faceValue
        // Else flip them back after 1.5s so the front is not visible
        if (cardOne.selectedFaceValue === cardTwo.selectedFaceValue) {
          cardList.value[cardOne.position].matched = true;
          cardList.value[cardTwo.position].matched = true;
        } else {
          setTimeout(() => {
            cardList.value[cardOne.position].visible = false;
            cardList.value[cardTwo.position].visible = false;
          }, 1500);
        }

        // Clear the playerSelection
        playerSelection.value.length = 0;
      }
    },
    { deep: true }
  );

  // Count the remaining unmatched pairs
  const remainingPairs = computed(() => {
    // Check how many cards still have their matched property set to false
    const remainingCards = cardList.value.filter(
      (card) => card.matched === false
    ).length;

    return remainingCards / 2;
  });

  // Display the remaining pairs, display win message if the player has matched all pairs
  const gameStatus = computed(() => {
    if (remainingPairs.value === 0) return "Congrats matey, ye be the Winner!";
    else return `Remaining Pairs: ${remainingPairs.value}`;
  });

  return {
    cardList,
    attempts,
    initGame,
    restartGame,
    flipCard,
    gameStatus,
  };
});

export default useGameStore;
