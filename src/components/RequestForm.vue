<template>
  <section class="formPlace">
    <Loader />
    <p>Form</p>
  </section>
</template>

<script setup lang="ts">
import Loader from "./Loader.vue";
</script>

<style scoped lang="scss">
.formPlace {
  padding: 0;
  margin: 0;
  width: 50%;
  background-color: $white;
  color: $black;
}

@media (max-width: $small-screen) {
  .formPlace {
    width: 100%;
  }
}
</style>
