<template>
  <button
    @click="$emit('close')"
    class="closeBtn"
    v-if="typeBtn === 'close'"
  ></button>
  <button
    @mousedown="$emit('click')"
    @mouseup="$emit('stopmoving')"
    :class="classBtn"
    v-if="typeBtn === 'primary'"
  >
    >
    <span>Кнопка</span>
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
});

const emits = defineEmits(["click", "stopmoving", "close"]);
const classBtn = "uiBtn " + String(props.class);
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
.closeBtn {
  background-image: url("~@/assets/img/svg/close-button.svg");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
