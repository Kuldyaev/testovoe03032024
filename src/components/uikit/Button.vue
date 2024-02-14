<template>
  <button @click="$emit('click')">
    <span>Кнопка</span>
  </button>
</template>

<script setup lang="ts">
const emits = defineEmits(["click"]);
</script>

<style scoped lang="scss">
button {
  background-color: $primary-blue;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: $white;
}
button:hover {
  opacity: 0.9;
}
button:active {
  background: rgb(129 129 139 / 95%);
  color: $primary-blue;
}
</style>
