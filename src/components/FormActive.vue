<template>
  <FlexBox class="info" direction="column" justify="start" align="start">
    <FlexBox direction="column" justify="start">
      <FlexBox justify="start" w="100%">
        <h4>Что Вас интересует?</h4>
      </FlexBox>
      <FlexBox class="interestDesk" w="100%" justify="start" gap=" ">
        <Button
          v-for="interest in interests"
          :key="interest.id"
          category="primary"
          :text="interest.text"
          :class="interest.isActive ? 'active' : ''"
          @click="$emit('choseInterest', interest.id)"
        />
      </FlexBox>
    </FlexBox>
    <FlexBox w="100%">
      <form action="/action_page.php">
        <TextInput label="Имя" />
        <FlexBox w="100%" direction="row" gap="20px" justify="between">
          <TextInput label="Телефон" w="100%" m="0 5% 0 0" />
          <TextInput label="Почта" w="100%" />
        </FlexBox>
        <TextInput label="Опишите задачу" />
      </form>
    </FlexBox>
    <FlexBox w="100%" justify="start" direction="column" class="budgetPlace">
      <h4 class="budgetTitle">Бюджет (₽):</h4>
      <BudgetInput value="0" />
    </FlexBox>

    <FlexBox justify="start" w="100%" class="submitBtnPlace">
      <Button
        category="formSubmit"
        text="Оставить заявку"
        @close="$emit('close')"
      />
    </FlexBox>
    <FlexBox direction="column" justify="start" w="100%" class="policyInfo">
      <h5>
        <span class="op04">Нажав на кнопку, вы соглашаетесь с политикой</span>
      </h5>
      <h5><a href="#">обработки персональных данных</a></h5>
    </FlexBox>
  </FlexBox>
</template>

<script setup lang="ts">
import FlexBox from "./FlexBox.vue";
import Button from "./uikit/Button.vue";
import TextInput from "./uikit/TextInput.vue";
import BudgetInput from "./uikit/BudgetInput.vue";
import { FormActiveProps } from "@/shared/types";

const emits = defineEmits(["close", "choseInterest"]);
const props = defineProps<FormActiveProps>();
</script>

<style scoped lang="scss">
form {
  width: 100%;
}
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}
h4,
h3 {
  color: $additional-grey;
  font-weight: 400;
  font-size: 1.146vw;
  line-height: 1.833vw;
}
h5 {
  color: $text-black;
  text-align: start;
  width: 100%;
  font-size: 0.83333vw;
  line-height: 1.25vw;
}
a {
  text-decoration: none;
  color: $primary-blue;
}
.op04 {
  opacity: 0.4;
}

.info {
  margin-top: 6.88vw;
  margin-left: 4.792vw;
  width: 67.5%;
  height: 87.8664%;
}
.submitBtnPlace {
  margin-top: 2.91665vw;
  margin-bottom: 1.9271vw;
}
.interestDesk {
  margin-top: 1.25vw;
  margin-bottom: 5vw;
  flex-wrap: wrap;
  gap: 0.6771vw;
}
.budgetTitle {
  width: 100%;
}
.budgetPlace {
  margin-top: 20px;
}

@media (max-width: $small-screen) {
  .info {
    margin-top: 13.76vw;
    margin-left: 9.584vw;
  }
  h4 {
    font-size: 2.292vw;
    line-height: 3.6667vw;
  }
  h5 {
    font-size: 1.6667vw;
    line-height: 2.5vw;
  }
  .submitBtnPlace {
    margin-top: 5.8333vw;
    margin-bottom: 3.8542vw;
  }
  .interestDesk {
    margin-top: 2.5vw;
    margin-bottom: 10vw;
    gap: 1.3542vw;
  }
}
</style>
