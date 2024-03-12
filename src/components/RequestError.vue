<template>
  <FlexBox class="info" direction="column" align="start" justify="start">
    <FlexBox class="closeBtnPlace" align="end" justify="end">
      <Button
        class="closeBtn"
        category="close"
        @close="$emit('close')"
        :w="String(state.closeIconWidth) + 'px'"
        :h="String(state.closeIconHeght) + 'px'"
      />
    </FlexBox>
    <FlexBox
      class="messagePlace"
      direction="column"
      align="start"
      justify="start"
    >
      <FlexBox w="100%" class="successSign"></FlexBox>
      <h2 class="title">Произошла ошибка<br />при отправке</h2>
      <h4 class="text">
        К сожалению, произошла ошибка при отправке <br />вашего сообщения.
        Пожалуйста, проверьте ваше <br />подключение к интернету и попробуйте
        отправить сообщение еще раз
      </h4>
      <Button
        text="Отправить заново"
        category="primary"
        class="sendAgain"
        @close="$emit('sendagain')"
      />
    </FlexBox>
  </FlexBox>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import { RequestFormProps, stateFS } from "@/shared/types";
import FlexBox from "./FlexBox.vue";
import Button from "./uikit/Button.vue";

const emits = defineEmits(["close", "sendagain"]);
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
}
.title {
  font-size: 3.177vw;
  line-height: 3.8151vw;
  letter-spacing: -0.05vw;
  text-align: left;
  margin-top: 2.9167vw;
  margin-bottom: 0;
  color: $text-black;
  user-select: none;
}

.text {
  margin-top: 2.9167vw;
  font-size: 1.3542vw;
  line-height: 2.1667vw;
  text-align: start;
  margin-top: 2.9167vw;
  color: $text-black;
  letter-spacing: normal;
  user-select: none;
}

.successSign {
  width: 4.1667vw;
  height: 4.1667vw;
  margin-top: 7.9167vw;
  background-image: url("~@/assets/img/svg/error.svg");
  background-size: contain;
  background-repeat: no-repeat;
}

.sendAgain {
  width: 19.4792vw;
  height: 4.8953vw;
  margin-top: 2.9167vw;
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
  .successSign {
    width: 8.3333vw;
    height: 8.3333vw;
    margin-top: 15.8333vw;
  }
  .title {
    margin-top: 5.8333vw;
    font-size: 6.354vw;
    line-height: 7.6302vw;
    letter-spacing: -0.1vw;
  }
  .text {
    margin-top: 5.8333vw;
    font-size: 2.7083vw;
    line-height: 4.3333vw;
  }
  .sendAgain {
    margin-top: 5.8333vw;
    width: 38.9583vw;
    height: 9.7917vw;
  }
}
</style>
