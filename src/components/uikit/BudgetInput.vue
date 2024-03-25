<template>
  <FlexBox direction="column" w="100%" justify="start">
    <h1>Input</h1>
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./../FlexBox.vue";
import { BudgetInputProps } from "@/shared/types";

const props = defineProps<BudgetInputProps>();
</script>

<style scoped lang="scss">
h1 {
  color: black;
  text-align: left;
  justify-content: flex-start;
  width: 100%;
}
</style>
