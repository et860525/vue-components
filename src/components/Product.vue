<script setup lang="ts">
defineProps(['title']);
const emit = defineEmits(['enlarge-text']);
</script>

<template>
  <div class="py-2">
    <h4>{{ title }}</h4>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="emit('enlarge-text')">
      Enlarge text
    </button>
  </div>
</template>

<style>
button {
  font-size: medium !important;
}
</style>
