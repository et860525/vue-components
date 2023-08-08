<script setup lang="ts">
defineProps(['modelValue']);
const emit = defineEmits<{
  (event: 'update:modelValue', payload: string): void;
}>();
</script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="border-2 p-2"
  />
</template>
