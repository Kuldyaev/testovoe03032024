<template>
  <FlexBox
    direction="column"
    w="100%"
    justify="start"
    align="start"
    class="textInput"
  >
    <div
      :class="'inputPlace ' + classInput"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    >
      <label>{{ label }}</label>
      <input
        v-if="props.label === 'Телефон'"
        :type="props.type"
        :maxlength="props.maxLength"
        v-model="model"
        @input="telefonNumberMask"
        @focusout="focused = false"
        @focusin="focused = true"
      />
      <input
        v-else
        :type="props.type"
        :maxlength="props.maxLength"
        v-model.trim="model"
        @focusout="focused = false"
        @focusin="focused = true"
      />
    </div>
    <FlexBox w="100%" justify="start" class="errorPlace">
      {{ errorMessage ? errorMessage : "" }}
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
  errorMessage: null,
  maska: "",
});
const classInput = ref<string>("");
// const classLabel = ref<string>("");
const model = defineModel({ required: true });
const focused = ref<boolean>(false);
const hovered = ref<boolean>(false);
const filled = ref<boolean>(false);
const currTelefon = ref<string>("");
const errorText = ref<string | null>(null);

const masked = (tel: number) => {
  const result = ["", ""];
  if (tel < 1) return "";
  for (var i = 0; i < String(tel).length; i++) {
    if (i === 0) {
      result[0] =
        props.maska.slice(0, props.maska.indexOf("#")) +
        String(tel).slice(i, i + 1);
      result[1] = props.maska.slice(props.maska.indexOf("#") + 1);
    } else {
      result[0] +=
        result[1].slice(0, result[1].indexOf("#")) +
        String(tel).slice(i, i + 1);
      result[1] = result[1].slice(result[1].indexOf("#") + 1);
    }
  }
  return result[0];
};

const telefonNumberMask = () => {
  const strModelValue = String(model.value);
  const lastSymbol = strModelValue.slice(-1);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (strModelValue.length < 0) {
    return;
  } else {
    if (
      !isNaN(parseInt(lastSymbol)) &&
      numbers.includes(parseInt(lastSymbol))
    ) {
      if (String(currTelefon.value).length < 1) {
        currTelefon.value += lastSymbol;
        model.value = masked(parseInt(lastSymbol));
      } else if (
        masked(parseInt(currTelefon.value)).length < String(model.value).length
      ) {
        currTelefon.value += lastSymbol;
        model.value = masked(parseInt(currTelefon.value));
      } else if (
        masked(parseInt(currTelefon.value)).length > String(model.value).length
      ) {
        currTelefon.value = currTelefon.value.slice(0, -1);
        model.value = masked(parseInt(currTelefon.value));
      }
    } else {
      if (
        masked(parseInt(currTelefon.value)).length > String(model.value).length
      ) {
        if (currTelefon.value.length === 1) {
          currTelefon.value = "";
          model.value = "";
        } else {
          if (currTelefon.value.length > 0) {
            currTelefon.value = currTelefon.value.slice(0, -1);
            model.value = masked(parseInt(currTelefon.value));
          } else {
            currTelefon.value = "";
            model.value = "";
          }
        }
      } else {
        model.value = strModelValue.slice(0, -1);
      }
    }
  }
};

watch(model, () => {
  if (
    filled.value === false &&
    !!model.value &&
    String(model.value).length > 0
  ) {
    filled.value = true;
  } else if (filled.value === true && String(model.value).length < 1) {
    filled.value = false;
    errorText.value = null;
  }
});

watch([hovered, focused, filled, errorText], () => {
  if (filled.value) {
    classInput.value = "filled";
    if (hovered.value) {
      classInput.value = focused.value ? "filled focused" : "filled hovered";
    }
  } else {
    classInput.value = "";
    if (hovered.value) {
      classInput.value = focused.value ? "filled focused" : "filled hovered";
    }
  }
});
</script>

<style scoped lang="scss">
input {
  background: transparent;
  border: none;
  position: relative;
  width: v-bind(w);
  text-align: left;
  align-items: flex-start;
  outline: none;
  z-index: 3;
  cursor: pointer;
  height: 1.8229vw;
  font-size: 1.1458vw;
  line-height: 1.8229vw;
  top: -1.8229vw;

  .filled &,
  .focused & {
    top: 0;
  }
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

  .focused & {
    font-size: 0.7292vw;
    line-height: 1.1667vw;
    color: $primary-blue;
  }

  .filled & {
    font-size: 0.7292vw;
    line-height: 1.1667vw;
    color: $additional-grey;
  }
}
.textInput {
  height: 3.9063vw;
}
.inputPlace {
  height: 2.6042vw;
  width: v-bind(w);
  text-align: left;
  align-items: flex-start;
  outline: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  border-bottom: $s2px solid $form-grey;
}
.hovered {
  border-bottom: $s2px solid $additional-grey;
}
.focused {
  border-bottom: $s2px solid $primary-blue;
}

.errorInInput,
.errorInInput:hover,
.errorInInput:focus {
  border-bottom: $s2px solid $error-red;
}
.errorPlace {
  height: 1.3021vw;
  color: $error-red;
  font-size: 0.7292vw;
  line-height: 1.1667vw;
}

@media (max-width: $small-screen) {
  input {
    height: 3.6458vw;
    font-size: 2.2917vw;
    line-height: 3.6458vw;
  }
  .textInput {
    height: 7.8125vw;
  }
  .inputPlace {
    height: 5.2083vw;
  }
  label {
    font-size: 2.2917vw;
    line-height: 3.6667vw;
    color: $additional-grey;

    .filled &,
    .focused & {
      font-size: 1.4583vw;
      line-height: 2.3333vw;
    }
  }
  .errorPlace {
    height: 2.6042vw;
    font-size: 1.4583vw;
    line-height: 2.3333vw;
    // top: 0;
  }
}
</style>
