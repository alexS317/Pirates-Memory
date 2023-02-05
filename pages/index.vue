<script setup>
import GameBoard from "@/components/GameBoard.vue";

const store = useGameStore();
</script>

<template>
  <h1>Memory Game</h1>
  <GameBoard />
  <h2>{{ store.gameStatus }}</h2>
  <h2>Attempts: {{ store.attempts }}</h2>
  <button @click="store.restartGame">Restart Game</button>
</template>

<style>
:root {
  background-color: #242424;
  color: aliceblue;
  display: flex;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  font-weight: 400;
  justify-content: center;
  text-align: center;
}
</style>
