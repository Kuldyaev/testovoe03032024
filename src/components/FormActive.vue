<template>
  <FlexBox class="info">
    <FlexBox>Form</FlexBox>
    tHIS IS ACTIVE FORM
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
</template>

<script setup lang="ts">
import FlexBox from "./FlexBox.vue";
import Button from "./uikit/Button.vue";
</script>

<style scoped lang="scss"></style>
