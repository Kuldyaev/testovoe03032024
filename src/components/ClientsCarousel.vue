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
          category="circleLeft"
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
          category="circleRight"
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
    <!-- <swiper-container
      slides-per-view="3"
      speed="500"
      loop="true"
      css-mode="true"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container> -->
  </FlexBox>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import { register } from "swiper/element/bundle";
import FlexBox from "./FlexBox.vue";
import Carousel from "./uikit/Carousel.vue";
import Button from "./uikit/Button.vue";

register();

interface stateT {
  carouselSlides: number[];
  widthCarousel: number;
  leftCarousel: number;
  rightCarousel: number;
  moveCarousel: number;
  moveToLeft: boolean;
  moveToRight: boolean;
  interval: number | undefined;
}

const speedCarousel = 5;
const state: stateT = reactive({
  carouselSlides: [1, 1, 1],
  widthCarousel: 300,
  leftCarousel: -100,
  rightCarousel: 0,
  moveCarousel: 0,
  moveToLeft: false,
  moveToRight: false,
  interval: undefined,
});

watch(
  () => [state.moveToRight, state.moveToLeft],
  () => {
    if (state.moveToRight) {
      state.leftCarousel = state.leftCarousel + speedCarousel;
      state.interval = setInterval(moveRigth, 250);
    }
    if (state.moveToLeft) {
      state.leftCarousel = state.leftCarousel - speedCarousel;
      state.interval = setInterval(moveLeft, 250);
    }
    if (
      !state.moveToLeft &&
      !state.moveToRight &&
      state.interval !== undefined
    ) {
      clearInterval(state.interval);
      state.interval = undefined;
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
  console.log("test");
  state.leftCarousel = state.leftCarousel - speedCarousel;
};

const moveRigth = () => {
  console.log("test");
  state.leftCarousel = state.leftCarousel + speedCarousel;
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
