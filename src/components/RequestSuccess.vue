<template>
  <FlexBox class="info" direction="column" align="start" justify="start">
    <FlexBox class="closeBtnPlace" align="end" justify="end">
      <button>x</button>
    </FlexBox>
    <FlexBox class="messagePlace">GOOD</FlexBox>
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./FlexBox.vue";
</script>

<style scoped lang="scss">
.info {
  position: absolute;
  width: 50vw;
  background-color: $white;
  color: $black;
  z-index: 5;
  height: 76.405vw;
}
.closeBtnPlace {
  width: 93.5416%;
  height: 6.4758%;
}
.messagePlace {
  width: 67.5%;
  height: 73%;
  margin-left: 9.58%;
  margin-top: 2.522%;
  background-color: yellow;
}
@media (max-width: $small-screen) {
  .info {
    width: 100vw;
    height: 152.81vw;
    position: relative;
  }
}
</style>
