<template>
  <FlexBox w="100%" direction="column">
    <div class="title">
      <h1>Наши клиенты</h1>
    </div>
    <h1>kgherkljkgfm;l</h1>
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "@/components/FlexBox.vue";
</script>

<style scoped lang="scss">
h1 {
  color: $primary-gray;
  font-family: "MabryPro";
  font-weight: 400;
  margin: 0;
}

.title {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

@media (min-width: $over-big-screen) {
  .title {
    padding: 4.115vw 0 3.291vw 6.25vw;
  }
  h1 {
    font-size: 4.427vw;
    line-height: 5.313vw;
    letter-spacing: calc(-0.05 * 4.427vw);
  }
}
//1920px
@media (max-width: $big-screen) {
  .title {
    padding: 79px 0 63px 120px;
  }
  h1 {
    font-size: 85px;
    line-height: 102px;
    letter-spacing: calc(-0.05 * 85px);
  }
}
//1280px
@media (max-width: $middle-screen) {
  .title {
    padding: 53px 0 61px 80px;
  }
  h1 {
    font-size: 56px;
    line-height: 67.2px;
    letter-spacing: calc(-0.05 * 56px);
  }
}
//768px
@media (max-width: $small-screen) {
  .title {
    padding: 53px 0 82px 40px;
  }
  h1 {
    font-size: 42px;
    line-height: 46.2px;
    letter-spacing: calc(-0.05 * 42px);
  }
}
//360px
@media (max-width: $mobile) {
  .title {
    padding: 54px 0 44px 30px;
  }
  h1 {
    font-size: 42px;
    line-height: 46.2px;
    letter-spacing: calc(-0.05 * 42px);
  }
}
@media (max-width: $under-modile) {
  .title {
    padding: 15vw 0 12.222vw 8.333vw;
  }
  h1 {
    font-size: 11.667vw;
    line-height: 12.833vw;
    letter-spacing: calc(-0.05 * 11.667vw);
  }
}
</style>
