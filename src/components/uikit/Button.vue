<template>
  <button
    @mousedown="$emit('click')"
    @mouseup="$emit('stopmoving')"
    @click="$emit('close')"
    :class="classBtn"
  >
    <span v-if="typeBtn === 'primary'">{{ text }}</span>
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

.sendAgain {
  background-color: $primary-blue;
  color: $white;
  border-radius: 16px;
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
.uiBtn:active {
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
</style>
