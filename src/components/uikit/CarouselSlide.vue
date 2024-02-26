<template>
  <FlexBox class="carouselSlide" gap="152">
    <FlexBox
      class="carouselSlideItem"
      direction="column"
      v-for="(client, index) in clients"
      :key="index"
    >
      <FlexBox :class="'clientLogoPlace bgImg' + index"></FlexBox>
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
}
.carouselSlideItem {
  width: 360px;
  height: 172px;
  justify-content: space-between;
}
.clientLogoPlace {
  width: 100%;
  height: 134px;
}

.bgImg0,
.bgImg1,
.bgImg2,
.bgImg3,
.bgImg4,
.bgImg5,
.bgImg6,
.bgImg7 {
  background-repeat: no-repeat;
  background-position: center;
}
.bgImg0 {
  background-image: url("~@/assets/img/png/bgImg_0.png");
}
.bgImg1 {
  background-image: url("~@/assets/img/png/bgImg_1.png");
}
.bgImg2 {
  background-image: url("~@/assets/img/png/bgImg_2.png");
}
.bgImg3 {
  background-image: url("~@/assets/img/png/bgImg_3.png");
}
.bgImg4 {
  background-image: url("~@/assets/img/png/bgImg_4.png");
}
.bgImg5 {
  background-image: url("~@/assets/img/png/bgImg_5.png");
}
.bgImg6 {
  background-image: url("~@/assets/img/png/bgImg_6.png");
}
.bgImg7 {
  background-image: url("~@/assets/img/png/bgImg_7.png");
}
</style>
