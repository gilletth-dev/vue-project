<script setup>
import { ref } from 'vue'
import userData from '../data/user.js'
import HomeView from './HomeView.vue'
</script>


<template>
  <RouterLink to="/" class="logo">
    Michel FOREVER
  </RouterLink>

    <h2>Michel FOREVER</h2>
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yVzHAhtcDrk?autoplay=1&mute=0&playsinline=1"
        title="Vidéo YouTube"
        allow="autoplay; encrypted-media; picture-in-picture"
  allowfullscreen>
</iframe>
</template>


<style scoped>
.logo {
  position: absolute;
  top: 20px;
  left: 25px;
  font-family: "Lora", serif;
  font-size: 16px;
  font-weight: bold;
  color: #0077b6;
  text-decoration: none;
}

h2 {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-style: normal;
  margin-bottom: 20px;
  color: #ebeff1;
}

</style>