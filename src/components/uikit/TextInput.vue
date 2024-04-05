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
      v-if="props.label === 'Телефон'"
      :type="props.type"
      :class="classInput"
      :maxlength="props.maxLength"
      v-model="model"
      @focusout="focused = false"
      @focusin="focused = true"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
      @input="telefonNumberMask"
    />
    <input
      v-else
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
const inputTelNumber = ref<string>("");
const currTelefon = ref<string>("");
const errorText = ref<string | null>(null);

const validationInput = () => {
  if (props.label === "Почта") {
    if (String(model.value).length > 6) {
      const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
      if (!EMAIL_REGEXP.test(String(model.value))) {
        errorText.value = "некорректный e-mail";
      } else {
        errorText.value = null;
      }
    } else {
      errorText.value = null;
    }
  } else if (props.label === "Имя") {
    const EMAIL_REGEXP = /^[a-zа-яё\s]+$/iu;
    if (!EMAIL_REGEXP.test(String(model.value))) {
      errorText.value = "только киррилица или латинские буквы";
    } else {
      errorText.value = null;
    }
  }
};

const masked = (tel: number, mask: string) => {
  const result = ["", "", mask];
  if (tel < 1) return "";

  for (var i = 0; i < String(tel).length; i++) {
    if (i === 0) {
      result[0] =
        mask.slice(0, mask.indexOf("#")) + String(tel).slice(i, i + 1);
      result[1] = mask.slice(mask.indexOf("#") + 1);
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
  const maska = "+7 (###) ###-##-##";
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (strModelValue.length < 0) {
    return;
  } else {
    if (
      !isNaN(parseInt(lastSymbol)) &&
      numbers.includes(parseInt(lastSymbol))
    ) {
      console.log("number");

      currTelefon.value += lastSymbol;

      console.log(masked(parseInt(currTelefon.value), maska));
    } else {
      console.log("not number");
      model.value = strModelValue.slice(0, -1);
    }
  }
};

// if (!isNaN(lastSymbol) && numbers.includes(lastSymbol)) {
//   if (inputTelNumber.value.length < strModelValue.length) {
//     currTelefon.value = currTelefon.value + lastSymbol;
//     switch (strModelValue.length) {
//       case 1:
//         inputTelNumber.value = "+7 (" + lastSymbol;
//         model.value = inputTelNumber.value;
//         break;
//       case 6:
//       case 10:
//       case 11:
//       case 14:
//       case 17:
//       case 18:
//         inputTelNumber.value = inputTelNumber.value + lastSymbol;
//         model.value = inputTelNumber.value;
//         break;
//       case 7:
//         inputTelNumber.value = inputTelNumber.value + lastSymbol + ") ";
//         model.value = inputTelNumber.value;
//         break;
//       case 12:
//       case 15:
//         inputTelNumber.value = inputTelNumber.value + lastSymbol + "-";
//         model.value = inputTelNumber.value;
//         break;
//     }
//   } else if (inputTelNumber.value.length > strModelValue.length) {
//     switch (strModelValue.length) {
//       case 5:
//       case 6:
//       case 10:
//       case 11:
//       case 12:
//       case 17:
//       case 14:
//         inputTelNumber.value = inputTelNumber.value.slice(0, -1);
//         currTelefon.value = currTelefon.value.slice(0, -1);
//         model.value = inputTelNumber.value;
//     }
//   }
// } else {
//   switch (strModelValue.length) {
//     case 4:
//       currTelefon.value = "";
//       inputTelNumber.value = "";
//     case 9:
//       currTelefon.value = currTelefon.value.slice(0, -1);
//       inputTelNumber.value = inputTelNumber.value.slice(0, -3);
//       break;
//     case 13:
//     case 16:
//       currTelefon.value = currTelefon.value.slice(0, -1);
//       inputTelNumber.value = inputTelNumber.value.slice(0, -2);
//       break;
//   }
//   model.value = inputTelNumber.value;
// }

// console.log(strModelValue);
// console.log(inputTelNumber.value);

// watch(errorText, () => {
//   if (errorText) {
//     classInput.value = "errorInInput";
//   } else {
//     classInput.value = "";
//   }
// });

watch(model, () => {
  if (filled.value === false && model.value && String(model.value).length > 0) {
    filled.value = true;
  } else if (filled.value === true && String(model.value).length < 1) {
    filled.value = false;
    errorText.value = null;
  }
  if (model.value && String(model.value).length > 0) {
    validationInput();
  }
});

watch([focused, filled, errorText], () => {
  if (errorText.value !== null) {
    classInput.value = "errorInInput";
  } else {
    if (focused.value) {
      classInput.value = "focused";
      classLabel.value = "focusedLabel";
    } else {
      classInput.value = filled.value ? "filled" : "";
      classLabel.value = filled.value ? "filledLabel" : "";
    }
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
.errorInInput,
.errorInInput:hover,
.errorInInput:focus {
  border-bottom: $s2px solid $error-red;
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
