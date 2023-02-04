<script setup>
// import { ref } from "vue";
import Card from "@/components/Card.vue";

const cardList = ref([]);
const cardItems = [1, 2, 3, 4, 5, 6, 7, 8];
const playerSelection = ref([]);

// Create 16 cards on the board
// for (let i = 0; i < 16; i++) {
//   cardList.value.push({ faceValue: 8, visible: false });
// }

cardItems.forEach((item) => {
  cardList.value.push({ faceValue: item, variant: 1, visible: false });
});

cardItems.forEach((item) => {
  cardList.value.push({ faceValue: item, variant: 2, visible: false });
});

// Reorder cardList array to a random order
function shuffleCards() {
  cardList.value.sort(() => {
    return 0.5 - Math.random();
  });

  // Get the position for each card from its index
  cardList.value.forEach((card, index) => {
    card.position = index;
  });
  
  return cardList.value;
}
shuffleCards();

// Flip the card that sent an emit (= was clicked) to the front
function flipCard(emitData) {
  // console.log(emitData.faceValue);
  // console.log(emitData.selectedFaceValue);
  cardList.value[emitData.position].visible = true;

  // If playerSelection array is empty, put clicked card's emitData in position 0
  // If not, put it in position 1 -> playerSelection never contains more than 2 elements
  if (playerSelection.value[0]) {
    // Cannot select same card twice
    if (
      playerSelection.value[0].position === emitData.position &&
      playerSelection.value[0].selectedFaceValue === emitData.selectedFaceValue
    ) {
      // console.log(playerSelection.value[0].selectedFaceValue, emitData.selectedFaceValue);
      return;
    } else playerSelection.value[1] = emitData;
  } else playerSelection.value[0] = emitData;

  // console.log(playerSelection.value);
}

// Check if the 2 cards selected by the player match
watch(
  playerSelection,
  (currentValue) => {
    if (currentValue.length === 2) {
      const cardOne = currentValue[0];
      const cardTwo = currentValue[1];
      console.log("Full!"); // Note: I just have to count how often currentValue is full to get the attempts
      // console.log(cardOne.selectedFaceValue);
      // console.log(cardTwo.selectedFaceValue);

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
</script>

<template>
  <div class="game-board">
    <Card
      v-for="card in cardList"
      :position="card.position"
      :face-value="card.faceValue"
      :visible="card.visible"
      :matched="card.matched"
      @select-card="flipCard"
    />
  </div>
</template>

<style>
.game-board {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 150px);
  grid-template-rows: repeat(4, 150px);
  padding: 30px;
}
</style>
