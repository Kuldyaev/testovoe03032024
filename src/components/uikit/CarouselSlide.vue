<template>
  <FlexBox class="carouselSlide" gap="152">
    <FlexBox
      class="carouselSlideItem"
      direction="column"
      v-for="(client, index) in clients"
      :key="index"
    >
      <FlexBox class="clientLogoPlace"></FlexBox>
      <p>{{ client.time }}</p>
    </FlexBox>
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./../../components/FlexBox.vue";

const clients = [
  { name: "Internorm", time: "5 лет вместе" },
  { name: "Росатом", time: "1 год вместе" },
  { name: "Лобачевский", time: "1 год вместе" },
  { name: "ГАЗ", time: "1 год вместе" },
  { name: "Газпром", time: "1 лет вместе" },
  { name: "MrDoors", time: "2 года вместе" },
  { name: "BonaFide", time: "1 год вместе" },
  { name: "ИРГСНО", time: " " },
];
</script>

<style scoped lang="scss">
p {
  margin: 0;
  padding: 0;
}
.carouselSlide {
  min-width: 100vw;
  height: 507px;
  flex-wrap: wrap;

  background-image: linear-gradient(to bottom right, #ee82ee, #ff0000);
}
.carouselSlideItem {
  width: 360px;
  height: 172px;
  justify-content: space-between;
}
.clientLogoPlace {
  width: 100%;
  height: 134px;
  background-color: aqua !important;
}
</style>
