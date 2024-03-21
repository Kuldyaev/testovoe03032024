<template>
  <FlexBox class="info" direction="column">
    <FlexBox direction="column" justify="start">
      <FlexBox justify="start" w="100%">
        <h4>Что Вас интересует?</h4>
      </FlexBox>
      <FlexBox>
        <Button
          category="circleRight"
          @click="console.log('nsdlknfl')"
          @stopmoving="console.log('nsdlknfl')"
        />
        <Button
          category="circleRight"
          @click="console.log('nsdlknfl')"
          @stopmoving="console.log('nsdlknfl')"
        />
        <Button
          category="circleRight"
          @click="console.log('nsdlknfl')"
          @stopmoving="console.log('nsdlknfl')"
        />
        <Button
          category="circleRight"
          @click="console.log('nsdlknfl')"
          @stopmoving="console.log('nsdlknfl')"
        />
        <Button
          category="circleRight"
          @click="console.log('nsdlknfl')"
          @stopmoving="console.log('nsdlknfl')"
        />
      </FlexBox>
    </FlexBox>
    <FlexBox>
      <form action="/action_page.php">
        First name:<br />
        <input type="text" value="Mickey" /><br />
        Last name:<br />
        <input type="text" name="lastname" value="Mouse" /><br /><br />
        <input type="submit" value="Submit" />
      </form>
    </FlexBox>
    tHIS IS ACTIVE FORM

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

const emits = defineEmits(["close"]);
</script>

<style scoped lang="scss">
h4,
h5 {
  margin: 0;
  padding: 0;
}
h4 {
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
}
</style>
