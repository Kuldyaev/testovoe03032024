<template>
  <button
    @click="$emit('close')"
    class="closeBtn"
    v-show="typeBtn === 'close'"
  ></button>
  <button
    @mousedown="$emit('click')"
    @mouseup="$emit('stopmoving')"
    :class="classBtn"
    v-show="typeBtn === 'primary'"
  >
    >
    <span>Кнопка</span>
  </button>
  <button
    @mousedown="$emit('click')"
    @mouseup="$emit('stopmoving')"
    :class="classBtn"
    v-show="typeBtn === 'circleLeft'"
  ></button>
  <button
    @mousedown="$emit('click')"
    @mouseup="$emit('stopmoving')"
    :class="classBtn"
    v-show="typeBtn === 'circleRight'"
  ></button>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import { BtnProps } from "@/shared/types";

const props = withDefaults(defineProps<BtnProps>(), {
  class: "",
  category: "primary",
  w: "auto",
  h: "auto",
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

.uiBtn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: $white;
}
.uiBtn:hover {
  opacity: 0.9;
}
.uiBtn:active {
  background: rgb(129 129 139 / 95%);
  color: $primary-blue;
}
.circleLeft,
.circleRight {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $primary-blue;
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
