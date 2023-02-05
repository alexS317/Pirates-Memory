<script setup>
import GameBoard from "@/components/GameBoard.vue";

const store = useGameStore();
</script>

<template>
  <h1>Pirates of the Caribbean</h1>
  <h2>Memory Game</h2>

  <GameBoard />

  <h3>Attempts: {{ store.attempts }}</h3>
  <h3>{{ store.gameStatus }}</h3>
  <button @click="store.restartGame">Restart Game</button>
</template>

<style>
:root {
  background-blend-mode: multiply;
  background-color: rgb(62, 47, 32);
  background-image: url(/images/treasure.jpg);
  background-size: cover;
  color: rgb(194, 141, 35);
  display: flex;
  font-family: "Pieces of Eight", Georgia, "Times New Roman", Times, serif;
  font-size: 26px;
  font-weight: 400;
  justify-content: center;
  letter-spacing: 2;
  line-height: 0.5;
  text-align: center;
  text-shadow: 5px 2px 5px black;
}

button {
  background-color: rgb(194, 141, 35);
  border-radius: 10px;
  border: none;
  box-shadow: 0 3px goldenrod inset, 0 3px 5px black;
  font-family: "Pieces of Eight", Georgia, "Times New Roman", Times, serif;
  font-size: 24px;
  font-weight: 500;
  padding: 15px;
}

button:hover {
  box-shadow: 0 3px goldenrod inset, 0 5px 5px black;
  cursor: pointer;
  transform: translateY(1px);
  transition: transform 0.1s ease-out;
}

@font-face {
  font-family: "Pieces of Eight";
  src: url(https://www.dafont.com/pieces-of-eight.ttf);
}
</style>
