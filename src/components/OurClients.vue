<template>
  <FlexBox w="100%" direction="column">
    <div class="title">
      <h1>Наши клиенты</h1>
    </div>
    <ClientsCarousel />
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "@/components/FlexBox.vue";
import ClientsCarousel from "./ClientsCarousel.vue";
</script>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: flex-start;
}

@media (min-width: $over-big-screen) {
  .title {
    width: 93.75vw;
    padding: 4.115vw 0 2.864vw 6.25vw;
  }
}
//1920px
@media (max-width: $big-screen) {
  .title {
    width: calc(100% - 120px);
    padding: 79px 0 55px 120px;
  }
}
//1280px
@media (max-width: $middle-screen) {
  .title {
    width: calc(100% - 80px);
    padding: 53px 0 55px 80px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .title {
    padding: 53px 0 55px 7.8125vw;
  }
}
//768px
@media (max-width: $small-screen) {
  .title {
    width: calc(100% - 40px);
    padding: 53px 0 74px 40px;
  }
}
//360px
@media (max-width: $mobile) {
  .title {
    width: calc(100% - 30px);
    padding: 54px 0 38px 30px;
  }
}
@media (max-width: $under-mobile) {
  .title {
    width: 91.667vw;
    padding: 15vw 0 10.555vw 8.333vw;
  }
}
</style>
