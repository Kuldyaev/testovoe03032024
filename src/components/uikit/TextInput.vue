<template>
  <FlexBox direction="column" w="100%" justify="start">
    <label>{{ label }}</label>
    <input type="text" v-model="model" />
  </FlexBox>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import FlexBox from "./../FlexBox.vue";
import { TextInputProps } from "@/shared/types";

const props = withDefaults(defineProps<TextInputProps>(), {
  label: "label",
  w: "100%",
});

const model = defineModel({ required: true });
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
