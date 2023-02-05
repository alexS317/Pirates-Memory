<script setup>
import Card from "@/components/Card.vue";

const store = useGameStore();

onBeforeMount(() => {
  store.initGame();
});
</script>

<template>
  <TransitionGroup tag="div" class="game-board" name="shuffle-board">
    <Card
      v-for="card in store.cardList"
      :key="`${card.faceValue}-${card.variant}`"
      :position="card.position"
      :face-value="card.faceValue"
      :visible="card.visible"
      :matched="card.matched"
      @select-card="store.flipCard"
    />
  </TransitionGroup>
</template>

<style>
.game-board {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(6, 150px);
  grid-template-rows: repeat(4, 150px);
  padding: 30px;
}

.shuffle-board-move {
  transition: transform 0.8s ease-in;
}
</style>
