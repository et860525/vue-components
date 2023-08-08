<template>
  <div class="container text-center">
    <h1 class="text-2xl text-center py-10">Test Component</h1>

    <div :style="{ fontSize: postFontSize + 'em' }">
      <Product
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        @enlarge-text="postFontSize += 0.1"
      />
    </div>
    <div class="py-5">
      <CustomInput v-model:modelValue="inputText" />
      <h2 class="text-2xl">{{ inputText }}</h2>
    </div>
    <div class="py-5">
      Back <router-link :to="{ name: 'home' }" class="text-blue-500 font-bold underline">Home</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Product from './Product.vue';
import CustomInput from './CustomInput.vue';

const products = ref([
  { id: 1, title: 'Iphone 13' },
  { id: 2, title: 'Macbook' },
  { id: 3, title: 'Airpod' },
]);

const postFontSize = ref(1);
const inputText = ref('test v-model example');
</script>
