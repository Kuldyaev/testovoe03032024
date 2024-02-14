<template>
  <FlexBox class="carouselSlide">
    <transition name="slide">
      <div>hello</div>
    </transition>
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./../../components/FlexBox.vue";
</script>

<style scoped lang="scss">
.carouselSlide {
  width: 100vw;
  height: 507px;
  background-image: linear-gradient(to bottom right, #ee82ee, #ff0000);
}
</style>
