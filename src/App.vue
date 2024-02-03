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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $primary-background;
  color: $primary-gray;
  margin: 0;
  padding: 0;
}
</style>
