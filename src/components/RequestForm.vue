<template>
  <section>
    <p>Form</p>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
section {
  width: 50%;
  background-color: $white;
  color: $black;
}

@media (max-width: $small-screen) {
  section {
    width: 100%;
  }
}
</style>
