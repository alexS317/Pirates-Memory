<script setup>
import GameBoard from "@/components/GameBoard.vue";

const store = useGameStore();
</script>

<template>
  <h1>Pirates of the Caribbean</h1>
  <h2>Memory Game made by Alexandra F</h2>

  <GameBoard />

  <div id="footer">
    <div id="info">
      <h3>Attempts: {{ store.attempts }}</h3>
      <h3>{{ store.gameStatus }}</h3>
    </div>
    <button @click="store.restartGame">Restart Game</button>
  </div>
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
  font-size: 1.6rem;
  font-weight: 400;
  justify-content: center;
  letter-spacing: 2;
  line-height: 0.2;
  text-align: center;
  text-shadow: 0.5vh 0.2vh 0.5vh black;
}

button {
  background-color: rgb(194, 141, 35);
  border-radius: 1.2vh;
  border: none;
  box-shadow: 0 0.3vh goldenrod inset, 0 0.3vh 0.5vh black;
  font-family: "Pieces of Eight", Georgia, "Times New Roman", Times, serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 1%;
}

button:hover {
  cursor: pointer;
  transform: translateY(2%);
  transition: transform 0.1s ease-out;
}

#footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@font-face {
  font-family: "Pieces of Eight";
  src: url(https://www.dafont.com/pieces-of-eight.ttf);
}
</style>
