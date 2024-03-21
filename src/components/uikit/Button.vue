<template>
  <button
    @mousedown="$emit('click')"
    @mouseup="$emit('stopmoving')"
    @click="$emit('close')"
    :class="classBtn"
  >
    <span v-if="typeBtn === 'primary' || typeBtn === 'formSubmit'">{{
      text
    }}</span>
  </button>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import { BtnProps } from "@/shared/types";

const props = withDefaults(defineProps<BtnProps>(), {
  class: "",
  category: "primary",
  w: "auto",
  h: "auto",
  text: "Кнопка",
});

const emits = defineEmits(["click", "stopmoving", "close"]);
const classBtn = "uiBtn " + String(props.class) + " " + String(props.category);
const typeBtn = String(props.category);
</script>

<style scoped lang="scss">
button {
  background: none;
  border: none;
  width: v-bind(w);
  height: v-bind(h);
}

.sendAgain,
.formSubmit {
  background-color: $primary-blue;
  color: $white;
  border-radius: 16px;
  min-width: 20px;
  min-height: 20px;
}
.sendAgain:hover {
  opacity: 0.9;
}
// .uiBtn {
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   color: $white;
// }
// .uiBtn:hover {
//   opacity: 0.9;
// }
.uiBtn:active,
.formSubmit:active {
  background: rgb(129 129 139 / 95%);
  color: $primary-background;
}
.circleLeft,
.circleRight {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $primary-blue;
  background-position: center;
  background-repeat: no-repeat;
}

.circleLeft {
  background-image: url("~@/assets/img/svg/arrowLeft.svg");
}
.circleLeft:active {
  background-image: url("~@/assets/img/svg/arrowLeftBlack.svg");
  background-position: center;
  background-repeat: no-repeat;
}
.circleRight {
  background-image: url("~@/assets/img/svg/arrowRight.svg");
}
.circleRight:active {
  background-image: url("~@/assets/img/svg/arrowRightBlack.svg");
  background-position: center;
  background-repeat: no-repeat;
}

.circleLeft:hover,
.circleRight:hover {
  opacity: 0.9;
}

.closeBtn {
  background-image: url("~@/assets/img/svg/close-button.svg");
  background-size: contain;
  background-repeat: no-repeat;
}
.closeBtn:hover {
  transform: scale(1.05);
}

.formSubmit {
  width: calc(38.9583vw / 2);
  height: calc(9.7917vw / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.04165vw;
  line-height: 1.5625vw;
  border-radius: 0.8333vw;
  font-weight: 500;
}
.formSubmit:hover {
  background-color: $secondary-blue;
}
.formSubmit:active {
  background-color: $active-blue;
  color: $white;
}

@media (max-width: $small-screen) {
  .formSubmit {
    width: 38.9583vw;
    height: 9.7917vw;
    border-radius: 1.6667vw;
    font-size: 2.0833vw;
    line-height: 3.125vw;
  }
}
</style>
