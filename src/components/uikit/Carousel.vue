<template>
  <FlexBox class="carousel">
    <slot />
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./../../components/FlexBox.vue";
</script>

<style scoped lang="scss">
.carousel {
  height: 507px;
  width: 100vw;
  position: relative;
}
</style>
