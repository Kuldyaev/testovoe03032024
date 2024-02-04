<template>
  <FlexBox w="100%" direction="column">
    <OurClients />
    <FooterComponent />
  </FlexBox>
</template>

<script lang="ts">
import FlexBox from "@/components/FlexBox.vue";
import OurClients from "@/components/OurClients.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    FlexBox,
    OurClients,
    FooterComponent,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
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
