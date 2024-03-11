<template>
  <section class="formPlace">
    <FormActive v-if="RequestStage === 0" />
    <Loader v-if="RequestStage === 1" />
    <RequestSuccess v-if="RequestStage === 2" :width="width" />
    <RequestError v-if="RequestStage === 3" />
  </section>
</template>

<script setup lang="ts">
import { RequestFormProps } from "@/shared/types";
import Loader from "./Loader.vue";
import RequestSuccess from "./RequestSuccess.vue";
import RequestError from "./RequestError.vue";
import FormActive from "./FormActive.vue";

const props = defineProps<RequestFormProps>();

const RequestStage: number = 2;
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
