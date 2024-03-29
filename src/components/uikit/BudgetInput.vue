<template>
  <FlexBox direction="row" w="100%" justify="start">
    <button
      :class="'left ' + String(props.value === 1 ? 'active activeLeft' : '')"
      @click="$emit('choseBudget', 1)"
    >
      до 500к
    </button>
    <!-- <div class="vertical"></div> -->
    <button
      :class="
        'center ' + String(props.value === 2 ? 'active activeCenter' : '')
      "
      @click="$emit('choseBudget', 2)"
    >
      до 1 млн
    </button>
    <!-- <div
      :class="
        'vertical ' +
        String(props.value === 2 || props.value === 3 ? 'activeVL' : '')
      "
    ></div> -->
    <button
      :class="'right ' + String(props.value === 3 ? 'active activeRight' : '')"
      @click="$emit('choseBudget', 3)"
    >
      >1 млн
    </button>
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./../FlexBox.vue";
import { BudgetInputProps } from "@/shared/types";
const emits = defineEmits(["choseBudget"]);
const props = defineProps<BudgetInputProps>();
</script>

<style scoped lang="scss">
h1 {
  color: black;
  text-align: left;
  justify-content: flex-start;
  width: 100%;
}
button {
  width: 33%;
  border: none;
  background: none;
  height: 56px;
  border-top: 2px solid $form-grey;
  border-bottom: 2px solid $form-grey;
}
.vertical {
  width: 0px;
  border: 1px solid $form-grey;
  height: 56px;
}
.left {
  border-left: 2px solid $form-grey;
  border-radius: 16px 0 0 16px;
}
.right {
  border-right: 2px solid $form-grey;
  border-radius: 0 16px 16px 0;
}

button:hover {
  background-color: $additional-darkgrey;
}
button:active {
  background: rgb(129 129 139 / 95%);
  color: $primary-background;
}
.active,
.active:hover,
.active:active {
  background-color: $primary-blue;
  color: $white;
  border-top: 2px solid $primary-blue;
  border-bottom: 2px solid $primary-blue;
}
.activeRight,
.activeRight:hover,
.activeRight:active {
  border-right: 2px solid $primary-blue;
}
.activeLeft,
.activeLeft:hover,
.activeLeft:active {
  border-left: 2px solid $primary-blue;
}
.activeCenter,
.activeCenter:hover,
.activeCenter:active {
  border-left: 2px solid $primary-blue;
  border-right: 2px solid $primary-blue;
}
</style>
