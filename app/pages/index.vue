<script setup>
const store = useGameStore();
</script>

<template>
  <main
    class="text-gold m-auto flex w-fit flex-col items-center gap-2 py-4 text-center font-serif text-3xl font-bold text-shadow-[5px_2px_4px] text-shadow-black md:text-5xl"
  >
    <h1>Pirates of the Caribbean</h1>
    <h2>Memory Game made by Alexandra F</h2>

    <GameBoard />

    <div
      class="flex w-full flex-col items-center justify-around gap-2 text-2xl md:flex-row md:text-4xl"
    >
      <div>
        <h3>Attempts: {{ store.attempts }}</h3>
        <h3>{{ store.gameStatus }}</h3>
      </div>
      <button
        class="bg-gold cursor-pointer rounded-xl px-3 py-1 text-black shadow-[0_2px_4px] inset-shadow-[0_4px] shadow-black inset-shadow-amber-300 transition duration-100 ease-out hover:translate-y-0.5"
        @click="store.restartGame"
      >
        Restart Game
      </button>
    </div>
  </main>
</template>
