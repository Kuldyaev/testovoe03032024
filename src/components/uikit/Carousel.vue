<template>
  <ul class="carousel">
    <li v-for="(slide, index) in carouselSlides" :key="index">
      <CarouselSlide />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import CarouselSlide from "./CarouselSlide.vue";

const props = defineProps([
  "widthCarousel",
  "leftCarousel",
  "rightCarousel",
  "carouselSlides",
]);

const left = computed(() => {
  return String(props.leftCarousel) + "vw";
});
const right = "none";
const width = String(props.widthCarousel) + "vw";
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
  left: v-bind(left);
  right: v-bind(right);
  width: v-bind(width);
  transition: left 0.8s linear;
}
</style>
