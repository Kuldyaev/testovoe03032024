<template>
  <FlexBox w="100%" direction="column">
    <FlexBox class="carouselContainer">
      <Carousel />
    </FlexBox>
    <div class="carouselFooter">
      <div class="avWorkTime"></div>
      <FlexBox w="130px" m="0 30px 0 0" justify="between">
        <Button @click="console.log('test1')" />
        <Button @click="console.log('test2')" />
      </FlexBox>
    </div>
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./FlexBox.vue";
import Carousel from "./uikit/Carousel.vue";
import Button from "./uikit/Button.vue";
</script>

<style scoped lang="scss">
p {
  color: $primary-gray;
  font-family: "MabryPro";
  font-weight: 400;
  margin: 0;
}

.carouselDesk {
  width: 100%;
  display: flex;
}
.carouselContainer {
  position: relative;
  z-index: 2;
  overflow: hidden;
  width: 100vw;
  height: 507px;
}
.carouselFooter {
  display: flex;
  justify-content: space-between;
}
.avWorkTime {
  width: 290px;
  height: 73px;
  background-image: url("~@/assets/img/png/workTime.png");
  background-size: contain;
}

@media (min-width: $over-big-screen) {
  .carouselFooter {
    width: 92.76vw;
    padding: 5.365vw 4.115vw 4.479vw 3.125vw;
  }
  .avWorkTime {
    width: 15.104vw;
    height: 3.802vw;
  }
}
//1920px
@media (max-width: $big-screen) {
  .carouselFooter {
    width: calc(100% - 139px);
    padding: 103px 79px 86px 60px;
  }
  .avWorkTime {
    width: 290px;
    height: 73px;
  }
}
//1280px
@media (max-width: $middle-screen) {
  .carouselFooter {
    width: calc(100% - 94px);
    padding: 63px 54px 57px 40px;
  }
}
//768px
@media (max-width: $small-screen) {
  .carouselFooter {
    width: calc(100% - 40px);
    padding: 78px 0 57px 40px;
  }
}
//360px
@media (max-width: $mobile) {
  .carouselFooter {
    width: calc(100% - 30px);
    padding: 53px 0 81px 30px;
  }
}
@media (max-width: $under-mobile) {
  .carouselFooter {
    width: 91.667vw;
    padding: 14.722vw 0 22.222vw 8.333vw;
  }
  .avWorkTime {
    width: 80vw;
    height: 20.277vw;
  }
}
</style>
