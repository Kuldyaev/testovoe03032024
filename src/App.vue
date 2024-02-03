<template>
  <FlexBox w="100%" direction="column">
    <ClientsCarousel />
  </FlexBox>
</template>

<script lang="ts">
import FlexBox from "@/components/FlexBox.vue";
import ClientsCarousel from "@/components/ClientsCarousel.vue";

export default {
  name: "App",
  components: {
    FlexBox,
    ClientsCarousel,
  },
};
</script>

<style lang="scss">
#app {
  font-family: MabryPro, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $primary-background;
  color: $primary-gray;
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: "MabryPro";
  src: url("@/assets/fonts/MabryPro-Medium.ttf");
  src: local("MabryPro"),
    url("@/assets/fonts/MabryPro-Medium.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
</style>
