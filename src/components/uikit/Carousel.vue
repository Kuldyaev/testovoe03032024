<template>
  <ul class="carousel">
    <li v-for="(slide, index) in carouselSlides" :key="index">
      <CarouselSlide />
    </li>
  </ul>
</template>

<script setup lang="ts">
import CarouselSlide from "./CarouselSlide.vue";
import { computed } from "vue";
const props = defineProps(["moveCarousel"]);
const carouselSlides = [0, 1, 2];

const slideCarousel = computed(() => {
  String(props.moveCarousel) + "vw";
});
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
  left: v-bind(slideCarousel);
}
</style>
