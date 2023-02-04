<script setup>
import Card from "@/components/Card.vue";

const store = useGameStore();

onBeforeMount(() => {
  store.initGame();
});
</script>

<template>
  <div class="game-board">
    <Card
      v-for="card in store.cardList"
      :key="`${card.faceValue}-${card.variant}`"
      :position="card.position"
      :face-value="card.faceValue"
      :visible="card.visible"
      :matched="card.matched"
      @select-card="store.flipCard"
    />
  </div>
  <h2>{{ store.gameStatus }}</h2>
  <h2>Attempts: {{ store.attempts }}</h2>
  <button @click="store.restartGame">Restart Game</button>
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
