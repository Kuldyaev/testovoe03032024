<template>
  <FlexBox w="100%" direction="column">
    <OurClients />
    <MainComponent />
    <FooterComponent />
  </FlexBox>
</template>

<script lang="ts">
import FlexBox from "@/components/FlexBox.vue";
import OurClients from "@/components/OurClients.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    FlexBox,
    OurClients,
    MainComponent,
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

h1,
h3,
h4,
h5,
h6 {
  color: $primary-gray;
  font-family: "MabryPro";
  font-weight: 400;
  margin: 0;
  text-align: left;
}
h6 {
  opacity: 0.6;
}

@media (min-width: $over-big-screen) {
  h1 {
    font-size: 4.427vw;
    line-height: 5.313vw;
    letter-spacing: calc(-0.05 * 4.427vw);
  }
  h3 {
    font-size: 1.354vw;
    line-height: 2.1667vw;
  }
  h4 {
    font-size: 2.1875vw;
    line-height: 2.406vw;
    letter-spacing: calc(-0.05 * 2.1875vw);
  }
  h5 {
    font-size: 1.198vw;
    line-height: 1.4375vw;
    letter-spacing: calc(-0.02 * 1.198vw);
  }
  h6 {
    font-size: 0.9375vw;
    line-height: 1.5vw;
  }
}
//1920px
@media (max-width: $big-screen) {
  h1 {
    font-size: 85px;
    line-height: 102px;
    letter-spacing: calc(-0.05 * 85px);
  }
  h3 {
    font-size: 26px;
    line-height: 41.6px;
  }
  h4 {
    font-size: 42px;
    line-height: 46.2px;
    letter-spacing: calc(-0.05 * 42px);
  }
  h5 {
    font-size: 23px;
    line-height: 27.6px;
    letter-spacing: calc(-0.02 * 23px);
  }
  h6 {
    font-size: 18px;
    line-height: 28.8px;
  }
}
@media (min-width: 1281px) and (max-width: 1899px) {
  h1 {
    font-size: 4.473vw;
    line-height: 5.368vw;
    letter-spacing: calc(-0.05 * 4.473vw);
  }
  h3 {
    font-size: 1.358vw;
    line-height: 2.158vw;
  }
  h4 {
    font-size: 2.211vw;
    line-height: 2.432vw;
    letter-spacing: calc(-0.05 * 2.211vw);
  }
  h5 {
    font-size: 1.211vw;
    line-height: 1.4375vw;
    letter-spacing: calc(-0.02 * 1.211vw);
  }
  h6 {
    font-size: 0.947vw;
    line-height: 1.179vw;
  }
}
//1280px
@media (max-width: $middle-screen) {
  h1 {
    font-size: 56px;
    line-height: 67.2px;
    letter-spacing: calc(-0.05 * 56px);
  }
  h3 {
    font-size: 18px;
    line-height: 28.8px;
  }
  h4 {
    font-size: 28px;
    line-height: 30.8px;
    letter-spacing: calc(-0.05 * 28px);
  }
  h5 {
    font-size: 15.33px;
    line-height: 18.4px;
    letter-spacing: calc(-0.02 * 15.3px);
  }
  h6 {
    font-size: 14px;
    line-height: 22.4px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  h1 {
    font-size: 5.469vw;
    line-height: 6.5625vw;
    letter-spacing: calc(-0.05 * 5.469vw);
  }
  h3 {
    font-size: 1.758vw;
    line-height: 2.8125vw;
  }
  h4 {
    font-size: 2.734vw;
    line-height: 3.007vw;
    letter-spacing: calc(-0.05 * 2.734vw);
  }
  h5 {
    font-size: 1.497vw;
    line-height: 1.797vw;
    letter-spacing: calc(-0.02 * 1.497vw);
  }
  h6 {
    font-size: 1.367vw;
    line-height: 2.188vw;
  }
}
//768px
@media (max-width: $small-screen) {
  h1 {
    font-size: 42px;
    line-height: 46.2px;
    letter-spacing: calc(-0.05 * 42px);
  }
  h3 {
    font-size: 16px;
    line-height: 22.6px;
    letter-spacing: calc(-0.05 * 16px);
  }
  h4 {
    font-size: 24px;
    line-height: 26.4px;
    font-weight: 500;
  }
  h5 {
    font-size: 15px;
    line-height: 18px;
    letter-spacing: calc(-0.02 * 15px);
  }
  h6 {
    font-size: 12px;
    line-height: 19.2px;
  }
}

//360px
@media (max-width: $mobile) {
  h1 {
    font-size: 42px;
    line-height: 46.2px;
    letter-spacing: calc(-0.05 * 42px);
  }
  h3 {
    font-size: 16px;
    line-height: 22.6px;
    letter-spacing: calc(-0.03 * 16px);
  }
}
@media (max-width: $under-mobile) {
  h1 {
    font-size: 11.667vw;
    line-height: 12.833vw;
    letter-spacing: calc(-0.05 * 11.667vw);
  }
  h3 {
    font-size: 4.444vw;
    line-height: 6.278vw;
    letter-spacing: calc(-0.03 * 4.444vw);
  }
  h4 {
    font-size: 6.667vw;
    line-height: 7.333vw;
  }
  h5 {
    font-size: 4.167vw;
    line-height: 5vw;
    letter-spacing: calc(-0.02 * 4.167vw);
  }

  h6 {
    font-size: 3.333vw;
    line-height: 5.333vw;
  }
}

@font-face {
  font-family: "MabryPro";
  src: url("@/assets/fonts/MabryPro-Light.ttf");
  src: local("MabryPro"),
    url("@/assets/fonts/MabryPro-Light.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
</style>
