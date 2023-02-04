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

const emits = defineEmits(["select-card"]);

// Checked whether card is flipped (front is visible) or not
const flipped = computed(() => {
  if (props.visible) return "flipped-front";
});

// Card emits its position and value when being clicked
function selectCard() {
  emit("select-card", {
    position: props.position,
    selectedFaceValue: props.faceValue,
    visible: props.visible
  });
}
</script>

<template>
  <div class="card" @click="selectCard">
    <div v-if="visible" class="card-face front">
      {{ position }}, {{ faceValue }}, {{ visible }}, {{ matched }}
    </div>
    <div v-else class="card-face back">Back</div>
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
