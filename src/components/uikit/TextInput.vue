<template>
  <FlexBox direction="column" w="100%" justify="start">
    <label>{{ label }}</label>
    <input
      type="text"
      :class="classInput"
      v-model="model"
      @focusout="focused = false"
      @focusin="focused = true"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    />
  </FlexBox>
</template>

<script setup lang="ts">
import { ref, watch, withDefaults } from "vue";
import FlexBox from "./../FlexBox.vue";
import { TextInputProps } from "@/shared/types";

const props = withDefaults(defineProps<TextInputProps>(), {
  label: "label",
  w: "100%",
});

const model = defineModel({ required: true });
const focused = ref<boolean>(false);
const hovered = ref<boolean>(false);
const classInput = ref<string>("");

watch(focused, () => {
  classInput.value = focused.value ? "focused" : "";
});
watch(hovered, () => {
  classInput.value = hovered.value ? "hovered" : "";
});
</script>

<style scoped lang="scss">
input {
  background: transparent;
  border: none;
  border-bottom: 1px solid $additional-grey;
  width: v-bind(w);
  text-align: left;
  align-items: flex-start;
}
label {
  width: v-bind(w);
  text-align: left;
}
</style>
