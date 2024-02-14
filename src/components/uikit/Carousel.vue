<template>
  <ul class="carousel">
    <li v-for="(slide, index) in carouselSlides" :key="index">
      <CarouselSlide />
    </li>
  </ul>
</template>

<script setup lang="ts">
import CarouselSlide from "./CarouselSlide.vue";

const carouselSlides = [0, 1, 2];
</script>

<style scoped lang="scss">
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}
.carousel {
  height: 507px;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: row;
  left: -70vw;
}
</style>
