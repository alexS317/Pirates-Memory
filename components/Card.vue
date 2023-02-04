<script setup>
const props = defineProps({
  position: Number,
  faceValue: String,
  visible: {
    type: Boolean,
    default: false,
  },
  matched: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["select-card"]);

// Checked whether card is flipped (front is visible) or not
const flipped = computed(() => {
  if (props.visible) return "flipped-front";
});

// Card emits its position and value when being clicked
function selectCard() {
  emits("select-card", {
    position: props.position,
    selectedFaceValue: props.faceValue,
    visible: props.visible,
  });
}
</script>

<template>
  <div class="card" :class="flipped" @click="selectCard">
    <div v-if="visible" class="card-face front">
      <img :src="`/images/${faceValue}.png`" :alt="faceValue">
    </div>
    <div v-else class="card-face back"></div>
  </div>
</template>

<style>
.card {
  background-color: goldenrod;
  border: 3px solid goldenrod;
  border-radius: 20px;
  position: relative;
}
.card:hover {
  cursor: pointer;
}

.card-face {
  border-radius: inherit;
  height: 100%;
  position: absolute;
  width: 100%;
}

.card-face.front {
  background-color: red;
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
