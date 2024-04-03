<template>
  <FlexBox
    direction="column"
    w="100%"
    justify="start"
    align="start"
    class="textInput"
  >
    <label :class="classLabel">{{ label }}</label>
    <input
      type="text"
      :class="classInput"
      v-model="model"
      @focusout="focused = false"
      @focusin="focused = true"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    />
    <FlexBox w="100%" justify="start" class="errorPlace"
      >{{ errorText ? errorText : "" }}
    </FlexBox>
  </FlexBox>
</template>

<script setup lang="ts">
import { ref, watch, withDefaults } from "vue";
import FlexBox from "./../FlexBox.vue";
import { TextInputProps } from "@/shared/types";

const props = withDefaults(defineProps<TextInputProps>(), {
  label: "label",
  w: "100%",
  errorText: null,
});
const classInput = ref<string>("");
const classLabel = ref<string>("");
const model = defineModel({ required: true });
const focused = ref<boolean>(false);
const hovered = ref<boolean>(false);

watch(focused, () => {
  classInput.value = focused.value ? "focused" : "";
  classLabel.value = focused.value ? "focusedLabel" : "";
});
// watch(hovered, () => {
//   classInput.value = hovered.value ? "hovered" : "";
// });
</script>

<style scoped lang="scss">
input {
  background: transparent;
  border: none;
  border-bottom: $s2px solid $form-grey;
  width: v-bind(w);
  text-align: left;
  align-items: flex-start;
  outline: none;
  height: 5.2083vw;
  z-index: 3;
}
label {
  width: auto;
  text-align: left;
  font-size: 1.1458vw;
  line-height: 1.8333vw;
  color: $additional-grey;
  user-select: none;
  position: relative;
  cursor: pointer;
  top: 1.8333vw;
}
input:hover {
  border-bottom: $s2px solid $additional-grey;
}
input:focus {
  border-bottom: $s2px solid $primary-blue;
}

.textInput {
  height: 5.2083vw;
}
.errorPlace {
  height: 1.3021vw;
}
.focusedLabel {
  font-size: 0.7292vw;
  line-height: 1.1667vw;
  color: $primary-blue;
  top: 0;
}

@media (max-width: $small-screen) {
  .textInput,
  input {
    height: 10.4167vw;
  }
  .errorPlace {
    height: 2.6042vw;
  }
  label {
    font-size: 2.2917vw;
    line-height: 3.6667vw;
    color: $additional-grey;
    top: 3.6667vw;
  }
  .focusedLabel {
    font-size: 1.4583vw;
    line-height: 2.3333vw;
    color: $primary-blue;
    top: 0;
  }
}
</style>
