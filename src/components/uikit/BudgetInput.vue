<template>
  <FlexBox direction="row" w="100%" justify="start">
    <button
      :class="'left ' + String(props.value === 1 ? 'active activeLeft' : '')"
      @click="$emit('choseBudget', 1)"
    >
      до 500к
    </button>
    <button
      :class="
        'center' +
        String(props.value === 1 ? ' activeForLeft' : '') +
        String(props.value === 2 ? ' active activeCenter' : '') +
        String(props.value === 3 ? ' activeForRight' : '')
      "
      @click="$emit('choseBudget', 2)"
    >
      до 1 млн
    </button>
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
  height: 2.9167vw;
  border-top: $s2px solid $form-grey;
  border-bottom: $s2px solid $form-grey;
  font-size: 1.042vw;
  line-height: 1.5625vw;
}
.center {
  border-left: $s2px solid $form-grey;
  border-right: $s2px solid $form-grey;
}
.left {
  border-left: $s2px solid $form-grey;
  border-radius: 0.8333vw 0 0 0.8333vw;
}
.right {
  border-right: $s2px solid $form-grey;
  border-radius: 0 0.8333vw 0.8333vw 0;
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
  border-top: $s2px solid $primary-blue;
  border-bottom: $s2px solid $primary-blue;
}
.activeRight,
.activeRight:hover,
.activeRight:active,
.activeForRight {
  border-right: $s2px solid $primary-blue;
}
.activeLeft,
.activeLeft:hover,
.activeLeft:active {
  border-left: $s2px solid $primary-blue;
}
.activeCenter,
.activeCenter:hover,
.activeCenter:active {
  border-left: $s2px solid $primary-blue;
  border-right: $s2px solid $primary-blue;
}
.activeForLeft {
  border-left: none;
}
.activeForRight {
  border-right: none;
}

@media (max-width: $small-screen) {
  button {
    height: 5.8333vw;
    font-size: 2.083vw;
    line-height: 3.125vw;
  }
  .left {
    border-radius: 1.667vw 0 0 1.667vw;
  }
  .right {
    border-radius: 0 1.667vw 1.667vw 0;
  }
}
</style>
