<script setup>
// import { ref } from "vue";
import Card from "@/components/Card.vue";

const cardList = ref([]);
const playerSelection = ref([]);

// Create 16 cards on the board
for (let i = 0; i < 16; i++) {
  cardList.value.push({ faceValue: 8, visible: false });
}

// Get the position for each card from its index
cardList.value.forEach((card, index) => {
  card.position = index;
});

// Flip the card that sent an emit (= was clicked) to the front
function flipCard(emitData) {
  console.log(emitData);
  cardList.value[emitData.position].visible = true;

  // If playerSelection array is empty, put clicked card's emitData in position 0
  // If not, put it in position 1 -> playerSelection never contains more than 2 elements
  if (playerSelection.value[0]) {
    // Cannot select same card twice
    if (
      playerSelection.value[0].position === emitData.position &&
      playerSelection.value[0].faceValue === emitData.faceValue
    ) {
      return;
    } else playerSelection.value[1] = emitData;
  } else playerSelection.value[0] = emitData;

  console.log(playerSelection.value);
}
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
