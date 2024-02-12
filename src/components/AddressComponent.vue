<template>
  <FlexBox w="100%" direction="column" class="addresses" justify="between">
    <FlexBox w="100%" direction="row" class="rf" justify="start">
      <FlexBox class="msk" direction="column" justify="between" align="start">
        <h6 class="white">Московский офис</h6>
        <h6>Новая пл., 6</h6>
        <a href="tel:+74991124621">
          <h6>8 (499) 112-46-21</h6>
        </a>
      </FlexBox>
      <FlexBox class="nn" direction="column" justify="between" align="start">
        <h6 class="white">Нижегородский офис</h6>
        <h6>ул. Рождественская, 26</h6>
        <a href="tel:+78312889354">
          <h6>8 (831) 2-889-354</h6>
        </a>
      </FlexBox>
    </FlexBox>
    <FlexBox class="tallin">
      <svg
        id="svgback"
        :width="mesurRect[0]"
        :height="mesurRect[1]"
        :viewBox="mesurRect[3]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          opacity="0.05"
          :width="mesurRect[0]"
          :height="mesurRect[1]"
          :rx="mesurRect[2]"
          fill="#F7F7FA"
        />
      </svg>
      <FlexBox
        class="tallinInfo"
        direction="column"
        justify="between"
        align="start"
      >
        <FlexBox class="tln" direction="column" justify="between" align="start">
          <h6 class="white">Таллинский офис</h6>
          <h6>3 korrus, Metro Plaza, Viru väljak 2</h6>
          <a href="tel:+3726104253">
            <h6>+372 610-42-53</h6>
          </a>
        </FlexBox>
        <FlexBox
          class="mainLinkBlock"
          direction="row"
          justify="between"
          align="start"
        >
          <FlexBox
            direction="column"
            justify="between"
            align="start"
            class="linkBlockText"
          >
            <h6>Oceanstart LLC <br />Worldwide outsourcing and outstaffing</h6>
            <FlexBox justify="start" align="center">
              <a href="http://www.oceanstart.dev" target="_blank">
                <h5 class="linkSite">oceanstart.dev</h5>
              </a>
              <FlexBox class="osLink"></FlexBox>
            </FlexBox>
          </FlexBox>
          <FlexBox class="osLogo"></FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./FlexBox.vue";
import { computed, ComputedRef } from "vue";

type measures = ComputedRef<[number, number, number, string | undefined]>;

const props = defineProps(["screenWidth"]);

const mesurRect: measures = computed(() => {
  if (props.screenWidth > 1920) {
    return [
      Math.round(0.31823 * props.screenWidth),
      Math.round(0.175 * props.screenWidth),
      Math.round(0.0125 * props.screenWidth),
      "0 0 " +
        String(Math.round(0.31823 * props.screenWidth)) +
        " " +
        String(Math.round(0.175 * props.screenWidth)),
    ];
  } else if (1900 <= props.screenWidth && props.screenWidth <= 1920) {
    return [611, 336, 24, "0 0 611 336"];
  } else if (1281 <= props.screenWidth && props.screenWidth <= 1899) {
    return [
      Math.round(0.32158 * props.screenWidth),
      Math.round(0.17684 * props.screenWidth),
      Math.round(0.01263 * props.screenWidth),
      "0 0 " +
        String(Math.round(0.32158 * props.screenWidth)) +
        " " +
        String(Math.round(0.17684 * props.screenWidth)),
    ];
  } else {
    return [407.33, 228.75, 16, "0 0 407 229"];
  }
});
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
.addresses {
  width: 611px;
  height: 496px;
  margin-top: 195px;
}
.msk,
.nn,
.tln {
  height: 96px;
  width: 200px;
}
.nn {
  margin-left: 83px;
}
.white {
  opacity: 1;
}
.tallin {
  background-color: $primary-gray;
  width: 611px;
  height: 336px;
}
.tallinInfo {
  padding: 33px 33px 33px 39px;
  height: 270px;
}
#svgback {
  position: absolute;
}
.linkSite {
  cursor: pointer;
}
.mainLinkBlock,
.linkBlockText {
  height: 101px;
}
.osLogo {
  min-width: 90px;
  max-width: 90px;
  min-height: 90px;
  background-image: url("~@/assets/img/png/os.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.osLink {
  min-width: 14px;
  max-width: 14px;
  min-height: 14px;
  margin-left: 7px;
  margin-top: 5px;
  background-image: url("~@/assets/img/svg/link.svg");
  background-size: contain;
  background-repeat: no-repeat;
}

@media (min-width: $over-big-screen) {
  .addresses {
    width: 31.823vw;
    height: 25.833vw;
    margin-top: 10.156vw;
  }
  .msk,
  .nn,
  .tln {
    height: 5vw;
    width: 10.497vw;
  }
  .nn {
    margin-left: 4.323vw;
  }
  .tallin {
    width: 31.823vw;
    height: 17.5vw;
  }
  .tallinInfo {
    padding: 1.7129vw 1.7129vw 1.7129vw 2.031vw;
    height: 14.0625vw;
  }
  .mainLinkBlock,
  .linkBlockText {
    height: 5.26vw;
  }
  .osLogo {
    min-width: 4.6875vw;
    max-width: 4.6875vw;
    min-height: 4.6875vw;
  }
  .osLink {
    min-width: 0.729vw;
    max-width: 0.729vw;
    min-height: 0.729vw;
    margin-left: 0.365vw;
    margin-top: 0.26vw;
  }
}

@media (min-width: 1281px) and (max-width: 1899px) {
  .addresses {
    width: 32.158vw;
    height: 26.105vw;
    margin-top: 10.263vw;
  }
  .msk,
  .nn,
  .tln {
    height: 5.053vw;
    width: 10.526vw;
  }
  .nn {
    margin-left: 4.368vw;
  }
  .tallin {
    width: 32.158vw;
    height: 17.684vw;
  }
  .tallinInfo {
    padding: 1.737vw 1.737vw 1.737vw 2.053vw;
    height: 14.211vw;
  }
  .mainLinkBlock,
  .linkBlockText {
    height: 5.316vw;
  }
  .osLogo {
    min-width: 4.737vw;
    max-width: 4.737vw;
    min-height: 4.737vw;
  }
  .osLink {
    min-width: 0.737vw;
    max-width: 0.737vw;
    min-height: 0.737vw;
    margin-left: 0.368vw;
    margin-top: 0.263vw;
  }
}

//1280px
@media (max-width: $middle-screen) {
  .addresses {
    width: 407.33px;
    height: 337.68px;
    margin-top: 130.04px;
  }
  .msk,
  .nn,
  .tln {
    height: 71px;
    width: 195px;
  }
  .msk,
  .nn,
  .tln > h6 {
    font-size: 12px;
    line-height: 14.4px;
  }
  .nn {
    margin-left: 30px;
  }
  .tallin {
    width: 407.33px;
    height: 228.75px;
  }
  .tallinInfo {
    padding: 22px 22px 22px 26px;
    height: 183.1px;
  }
  .mainLinkBlock,
  .linkBlockText {
    height: 68.08px;
  }
  .linkBlockText > h6 {
    font-size: 12px;
    line-height: 14.4px;
  }
  .osLogo {
    min-width: 61.27px;
    max-width: 61.27px;
    min-height: 61.27px;
  }
  .osLink {
    min-width: 9.53px;
    max-width: 9.53px;
    min-height: 9.33px;
    margin-left: 5px;
    margin-top: 4px;
  }
}
</style>
