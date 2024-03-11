<template>
  <FlexBox class="info" direction="column" align="start" justify="start">
    <FlexBox class="closeBtnPlace" align="end" justify="end">
      <Button
        category="close"
        @close="$emit('close')"
        :w="String(state.closeIconWidth) + 'px'"
        :h="String(state.closeIconHeght) + 'px'"
      />
    </FlexBox>
    <FlexBox class="messagePlace">Error</FlexBox>
  </FlexBox>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import { RequestFormProps, stateFS } from "@/shared/types";
import FlexBox from "./FlexBox.vue";
import Button from "./uikit/Button.vue";

const emits = defineEmits(["close"]);
const props = defineProps<RequestFormProps>();
const state: stateFS = reactive({
  closeIconWidth: Math.round((props.width * 32) / 1920),
  closeIconHeght: Math.round((props.width * 33) / 1920),
});

watch(
  () => [props.width],
  () => {
    if (props.width > 768) {
      state.closeIconWidth = Math.round((props.width * 32) / 1920);
      state.closeIconHeght = Math.round((props.width * 33) / 1920);
    } else {
      state.closeIconWidth = Math.round((props.width * 32) / 960);
      state.closeIconHeght = Math.round((props.width * 33) / 960);
    }
  }
);
</script>

<style scoped lang="scss">
.info {
  position: absolute;
  width: 50vw;
  background-color: $white;
  color: $black;
  z-index: 5;
  height: 76.405vw;
}
.closeBtnPlace {
  width: 46.7708vw;
  height: 4.9479vw;
}
.messagePlace {
  width: 67.5%;
  height: 73%;
  margin-left: 9.58%;
  margin-top: 2.522%;
  background-color: yellow;
}
@media (max-width: $small-screen) {
  .info {
    width: 100vw;
    height: 152.81vw;
    position: relative;
  }
  .closeBtnPlace {
    width: 93.5416vw;
    height: 9.8958vw;
  }
}
</style>
