<script setup>
const props = defineProps({
  position: Number,
  faceValue: String,
  visible: Boolean,
  matched: Boolean,
});

const emits = defineEmits(["select-card"]);

// Card emits its position and value when being clicked
function selectCard() {
  emits("select-card", {
    position: props.position,
    selectedFaceValue: props.faceValue,
    visible: props.visible,
    matched: props.matched,
  });
}

// Checked whether card is flipped (front is visible) or not
const flipped = computed(() => {
  if (props.visible) return "flipped-front";
});
</script>

<template>
  <div class="card" :class="flipped" @click="selectCard">
    <div class="card-face front">
      <img :src="`/images/${faceValue}.png`" :alt="faceValue" />
    </div>
    <div class="card-face back"></div>
  </div>
</template>

<style>
.card {
  background-color: rgb(194, 141, 35);
  border: 3px solid rgb(194, 141, 35);
  border-radius: 20px;
  position: relative;
  transition: 0.5s transform ease-in;
  transform-style: preserve-3d;
}
.card:hover {
  cursor: pointer;
}
.card.flipped-front {
  transform: rotateY(180deg);
}

.card-face {
  border-radius: inherit;
  height: 100%;
  position: absolute;
  width: 100%;
  backface-visibility: hidden;
}
  
.card-face.front {
  transform: rotateY(180deg);
}

.card-face.front img {
  border-radius: inherit;
  height: inherit;
  width: inherit;
}

.card-face.back {
  background-image: url(/images/back.jpg);
  background-size: cover;
}
</style>
