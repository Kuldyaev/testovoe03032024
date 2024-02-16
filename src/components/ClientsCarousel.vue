<template>
  <FlexBox w="100%" direction="column">
    <FlexBox class="carouselContainer">
      <Carousel
        :widthCarousel="state.widthCarousel"
        :leftCarousel="state.leftCarousel"
        :rightCarousel="state.rightCarousel"
        :carouselSlides="state.carouselSlides"
      />
    </FlexBox>
    <div class="carouselFooter">
      <div class="avWorkTime"></div>
      <FlexBox w="130px" m="0 30px 0 0" justify="between">
        <Button
          @click="
            {
              state.moveToLeft = true;
              state.moveToRight = false;
            }
          "
          @stopmoving="
            {
              state.moveToLeft = false;
              state.moveToRight = false;
            }
          "
        />
        <Button
          @click="
            {
              state.moveToLeft = false;
              state.moveToRight = true;
            }
          "
          @stopmoving="
            {
              state.moveToLeft = false;
              state.moveToRight = false;
            }
          "
        />
      </FlexBox>
    </div>
  </FlexBox>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import FlexBox from "./FlexBox.vue";
import Carousel from "./uikit/Carousel.vue";
import Button from "./uikit/Button.vue";

const speedCarousel = 10;
const state = reactive({
  carouselSlides: [1, 1, 1],
  widthCarousel: "300vw",
  leftCarousel: "-100vw",
  rightCarousel: "none",
  moveCarousel: 0,
  moveToLeft: false,
  moveToRight: false,
});

watch(
  () => [state.moveToRight, state.moveToLeft, state.moveCarousel],
  () => {
    if (state.moveToRight) {
      setTimeout(moveRigth, 500);
    }
    if (state.moveToLeft) {
      setTimeout(moveLeft, 500);
    }
  }
);

// watch(
//   () => [props.moveCarousel, props.moveLeft, props.moveRight],
//   () => {
//     if (+props.moveCarousel > 0) {
//       slideCarouselLeft.value = String(-1 * props.moveCarousel) + "vw";
//       slideCarouselRight.value = "none";
//     } else if (+props.moveCarousel < 0) {
//       slideCarouselLeft.value = "none";
//       slideCarouselRight.value = String(-1 * props.moveCarousel) + "vw";
//     } else {
//       slideCarouselLeft.value = "0vw";
//       slideCarouselRight.value = "0vw";
//     }
//   }
// );

const moveLeft = () => {
  state.moveCarousel = state.moveCarousel - speedCarousel;
};

const moveRigth = () => {
  state.moveCarousel = state.moveCarousel + speedCarousel;
};
</script>

<style scoped lang="scss">
h3 {
  color: white;
}

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
