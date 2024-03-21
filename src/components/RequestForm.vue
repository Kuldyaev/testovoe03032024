<template>
  <section class="formPlace">
    <FormActive v-if="RequestStage === 0" @close="sendRequest" />
    <Loader v-if="RequestStage === 1" />
    <RequestSuccess
      v-if="RequestStage === 2"
      :width="width"
      @close="RequestStage = 0"
    />
    <RequestError
      v-if="RequestStage === 3"
      :width="width"
      @close="RequestStage = 0"
      @sendagain="sendRequest"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RequestFormProps } from "@/shared/types";
import Loader from "./Loader.vue";
import RequestSuccess from "./RequestSuccess.vue";
import RequestError from "./RequestError.vue";
import FormActive from "./FormActive.vue";

const props = defineProps<RequestFormProps>();
const RequestStage = ref<number>(0);

function sendRequest() {
  RequestStage.value = 1;
  setTimeout(() => {
    RequestStage.value = 3;
  }, 4000);
}
</script>

<style scoped lang="scss">
.formPlace {
  padding: 0;
  margin: 0;
  width: 50%;
  background-color: $secondary-gray;
  color: $black;
}

@media (max-width: $small-screen) {
  .formPlace {
    width: 100%;
  }
}
</style>
