<template>
  <FlexBox class="loaderPlace">
    <FlexBox class="loader"></FlexBox>
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./FlexBox.vue";
</script>

<style scoped lang="scss">
.loaderPlace {
  position: absolute;
  width: 50vw;
  background-color: $white;
  color: $black;
  z-index: 5;
  height: 76.405vw;
}

.loader {
  width: 8.542vw;
  height: 8.542vw;
  z-index: 6;
  background-image: url("~@/assets/img/svg/loader.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: preloader-rotate 2s infinite linear;
}

@keyframes preloader-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: $small-screen) {
  .loaderPlace {
    width: 100vw;
    height: 152.81vw;
    position: relative;
  }
  .loader {
    width: 17.083vw;
    height: 17.083vw;
  }
}
</style>
