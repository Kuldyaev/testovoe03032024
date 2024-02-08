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
        width="611"
        height="336"
        viewBox="0 0 611 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect opacity="0.05" width="611" height="336" rx="24" fill="#F7F7FA" />
      </svg>
      <p>sdfsf</p></FlexBox
    >
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./FlexBox.vue";
</script>

<style scoped lang="scss">
.addresses {
  width: 611px;
  height: 496px;
  margin-top: 195px;
}
.msk,
.nn {
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
#svgback {
  position: absolute;
}
</style>
