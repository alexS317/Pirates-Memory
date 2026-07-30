<!-- eslint-disable vue/require-default-prop -->
<script setup>
const props = defineProps({
  position: Number,
  faceValue: String,
  visible: Boolean,
  matched: Boolean,
});

const emits = defineEmits(['select-card']);

// Card emits its position and value when being clicked
function selectCard() {
  emits('select-card', {
    position: props.position,
    selectedFaceValue: props.faceValue,
    visible: props.visible,
    matched: props.matched,
  });
}

// Checked whether card is flipped (front is visible) or not
const flipped = computed(() => {
  if (props.visible) return true;
  else return false;
});
</script>

<template>
  <div
    class="bg-gold border-gold relative cursor-pointer rounded-[20px] border-2 transition duration-500 ease-in transform-3d md:border-3"
    :class="flipped ? 'rotate-y-180' : ''"
    @click="selectCard"
  >
    <div class="card-face rotate-y-180 overflow-hidden">
      <img :src="`/images/${faceValue}.png`" :alt="faceValue" />
    </div>
    <div class="card-face bg-[url(/images/back.jpg)] bg-cover"></div>
  </div>
</template>

<style>
.card-face {
  @apply absolute h-full w-full backface-hidden;
  border-radius: inherit;
}
</style>
