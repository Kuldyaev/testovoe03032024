<template>
  <FlexBox class="info" direction="column">
    <FlexBox direction="column" justify="start">
      <h4>Что Вас интересует?</h4>
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

    <FlexBox justify="start" w="100%">
      <Button
        category="formSubmit"
        text="Оставить заявку"
        @click="console.log('nsdlknfl')"
        @stopmoving="console.log('nsdlknfl')"
      />
    </FlexBox>
    <FlexBox direction="column" justify="start" w="100%">
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
</script>

<style scoped lang="scss">
h5 {
  color: $text-black;
  text-align: start;
  width: 100%;
}
a {
  text-decoration: none;
}
.op04 {
  opacity: 0.4;
}
</style>
