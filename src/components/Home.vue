<template>
  <div class="relative min-h-screen md:flex">
    <!-- Mobile menu -->
    <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
      <!-- Logo -->
      <a href="#" class="block p-4 text-white font-bold">My Components</a>

      <!-- Mobile menu button -->
      <button class="p-4 focus:outline-none focus:bg-gray-700" @click="mobile_button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <!-- Sidebar -->
    <div
      class="bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out"
      :class="{ '-translate-x-full': isTranslate_menu }"
    >
      <!-- Logo -->
      <a href="#" class="text-white flex space-x-2 items-center px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
        <span class="text-xl font-extrabold">My Components</span>
      </a>

      <!-- Nav -->
      <nav>
        <router-link
          :to="{ name: 'home' }"
          class="block py-2 5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200"
          >Home</router-link
        >
        <router-link
          :to="{ name: 'about' }"
          class="block py-2 5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200"
          >About</router-link
        >
        <a href="#" class="block py-2 5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200"
          >Features</a
        >
        <a href="#" class="block py-2 5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200"
          >Blog</a
        >
      </nav>
    </div>

    <!-- Content -->
    <div class="flex-1 p-10">
      <h1 class="text-4xl">Test Vuex</h1>
      <br />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="store.commit('countModule/increment')"
      >
        Add count
      </button>
      <p class="text-xl">{{ incrementCount }}</p>
      <h2 class="text-2xl py-3">User Info</h2>
      <p class="text-md">{{ userInfo }}</p>
      <p>{{ greeting }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from '../store/store';

const store = useStore();
const incrementCount = computed(() => store.state.countModule.count);
const userInfo = computed(() => store.getters['userModule/getUserInfo']);
const greeting = computed(() => store.state.greeting);

const isTranslate_menu = ref(true);

function mobile_button() {
  isTranslate_menu.value = !isTranslate_menu.value;
}
</script>
