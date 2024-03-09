<template>
  <button
    @mousedown="$emit('click')"
    @mouseup="$emit('stopmoving')"
    :class="classBtn"
  >
    <span>Кнопка</span>
  </button>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import { BtnProps } from "@/shared/types";

const props = withDefaults(defineProps<BtnProps>(), {
  class: "",
});

const emits = defineEmits(["click", "stopmoving"]);
const classBtn = "uiBtn " + String(props.class);
</script>

<style scoped lang="scss">
button {
  background-color: $primary-blue;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: $white;
}
button:hover {
  opacity: 0.9;
}
button:active {
  background: rgb(129 129 139 / 95%);
  color: $primary-blue;
}
</style>
