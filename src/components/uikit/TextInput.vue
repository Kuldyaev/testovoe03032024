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
      :type="props.type"
      :class="classInput"
      :maxlength="props.maxLength"
      v-model.trim="model"
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
  type: "text",
  maxLength: 40,
});
const classInput = ref<string>("");
const classLabel = ref<string>("");
const model = defineModel({ required: true });
const focused = ref<boolean>(false);
const hovered = ref<boolean>(false);
const filled = ref<boolean>(false);
//const inputType = ref<string>("text");
//const maxLength = ref<number>(50);
const errorText = ref<string | null>(null);

const validationInput = () => {
  console.log(model.value);
};

// watch(props, () => {
//   if (props.label === "Почта" && maxLength.value !== 100) {
//     maxLength.value = 100;
//   } else console.log("OK");
// });

watch(model, () => {
  if (filled.value === false && model.value && String(model.value).length > 0) {
    filled.value = true;
  } else if (filled.value === true && String(model.value).length < 1) {
    filled.value = false;
  }
  if (model.value && String(model.value).length > 0) {
    validationInput();
  }
});

watch([focused, filled], () => {
  if (focused.value) {
    classInput.value = "focused";
    classLabel.value = "focusedLabel";
  } else {
    classInput.value = filled.value ? "filled" : "";
    classLabel.value = filled.value ? "filledLabel" : "";
  }
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
.focusedLabel,
.filledLabel,
.errorPlace {
  font-size: 0.7292vw;
  line-height: 1.1667vw;
  top: 0;
}
.focusedLabel {
  color: $primary-blue;
}
.filledLabel {
  color: $additional-grey;
}
.errorPlace {
  color: $error-red;
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
  .focusedLabel,
  .filledLabel,
  .errorPlace {
    font-size: 1.4583vw;
    line-height: 2.3333vw;
    top: 0;
  }
}
</style>
