<script setup>
const props = defineProps({
  position: Number,
  faceValue: Number,
  visible: {
    type: Boolean,
    default: false,
  },
  matched: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="card">
    <div class="card-face front">{{ position }}</div>
    <div class="card-face back"></div>
  </div>
</template>

<style>
.card {
  background-color: goldenrod;
  border-radius: 20px;
  position: relative;
}

.card-face {
  border-radius: 20px;
  height: 100%;
  position: absolute;
  width: 100%;
}

.card-face.front {
  background-color: red;
}

.card-face.back {
  background-color: blue;
}
</style>
