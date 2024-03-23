<template>
  <section class="formPlace">
    <FormActive
      v-if="RequestStage === 0"
      @close="sendRequest"
      @choseInterest="choseInterest"
      :interests="interests"
    />
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
import { ref, reactive } from "vue";
import { RequestFormProps, interest } from "@/shared/types";
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

const interests = ref<interest[]>([
  {
    id: 0,
    text: "Сайт",
    isActive: true,
  },
  {
    id: 1,
    text: "Веб-сервис",
    isActive: false,
  },
  {
    id: 2,
    text: "Маркетинг",
    isActive: false,
  },
  {
    id: 3,
    text: "Приложение",
    isActive: false,
  },
  {
    id: 4,
    text: "Брендинг",
    isActive: false,
  },
  {
    id: 5,
    text: "Что-то ещё",
    isActive: false,
  },
]);

function choseInterest(id: number) {
  // if (interests.find((int) => int.id === id) !== undefined) {
  const clon = interests.value;
  // console.log(interests.filter((int) => int.id === id)[0]);

  clon.filter((int) => int.id === id)[0].isActive = !interests.value.filter(
    (int) => int.id === id
  )[0].isActive;
  interests.value = clon;
  // }
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
