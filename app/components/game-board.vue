<script setup>
const store = useGameStore();

onBeforeMount(() => {
  store.initGame();
});
</script>

<template>
  <TransitionGroup
    tag="div"
    class="grid grid-cols-4 gap-2 rounded-4xl bg-black/70 p-1 md:grid-cols-6 md:gap-5 md:p-8"
    name="shuffle-board"
  >
    <GameCard
      v-for="card in store.cardList"
      :key="`${card.faceValue}-${card.variant}`"
      :position="card.position"
      :face-value="card.faceValue"
      :visible="card.visible"
      :matched="card.matched"
      class="aspect-square w-20 sm:w-30 xl:w-35"
      @select-card="store.flipCard"
    />
  </TransitionGroup>
</template>

<style>
.shuffle-board-move {
  transition: transform 0.8s ease-in;
}
</style>
