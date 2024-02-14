<template>
  <main>
    <section>
      <h1>Обсудить проект</h1>
      <h3>
        Расскажите о проекте в форме
        {{ screenWidth > 768 ? "справа" : "ниже" }} или свяжитесь с нами
        напрямую
      </h3>
      <FlexBox class="contactGroup">
        <FlexBox direction="column" justify="start" align="start" class="mail">
          <FlexBox
            class="writeUs"
            direction="row"
            justify="start"
            align="center"
          >
            <a href="mailto:hello@riverstart.ru">
              <h4>hello@riverstart.ru</h4>
            </a>
          </FlexBox>
          <h6>Написать нам на почту</h6>
        </FlexBox>
        <FlexBox direction="column" justify="start" align="start">
          <FlexBox
            class="writeUs"
            direction="row"
            justify="start"
            align="center"
          >
            <div class="avatar" v-if="screenWidth > 360"></div>
            <a href="https://t.me/hello_riverstart" target="_blank">
              <h4>@ekhohrin</h4>
            </a>
            <div class="avatar avatarRight" v-if="screenWidth <= 360"></div>
          </FlexBox>
          <h6>Написать нашему аккаунт- директору в Telegram</h6>
        </FlexBox>
      </FlexBox>
      <AddressComponent v-if="screenWidth > 768" :screenWidth="screenWidth" />
    </section>
    <RequestForm />
    <AddressComponent v-if="screenWidth <= 768" :screenWidth="screenWidth" />
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import FlexBox from "./FlexBox.vue";
import RequestForm from "./RequestForm.vue";
import AddressComponent from "./AddressComponent.vue";

const screenWidth = ref<number>(0);
const screenHeght = ref<number>(0);

function changeMeasurments([height, width]: number[]) {
  screenWidth.value = width;
  screenHeght.value = height;
}
function myEventHandler() {
  changeMeasurments([window.innerHeight, window.innerWidth]);
}
onMounted(() => {
  changeMeasurments([window.innerHeight, window.innerWidth]);
  window.addEventListener("resize", myEventHandler);
});
onUnmounted(() => {
  window.removeEventListener("resize", myEventHandler);
});
</script>

<style scoped lang="scss">
main {
  width: 100%;
  display: flex;
  flex-direction: row;
}
section {
  width: 50%;
}
h1 {
  margin-bottom: 52px;
}
a {
  text-decoration: none;
}
.writeUs {
  height: 56px;
  margin-bottom: 5px;
}
.avatar {
  width: 56px;
  height: 56px;
  margin-right: 10px;
  background-image: url("~@/assets/img/png/avatar.png");
  background-size: contain;
}
.avatarRight {
  background-image: url("~@/assets/img/png/avatarRight.png");
}
.contactGroup {
  flex-direction: column;
}

@media (min-width: $over-big-screen) {
  section {
    padding: 6.146vw 0 0 6.25vw;
  }
  h3 {
    width: 25.573vw;
    height: auto;
    margin-bottom: 8.75vw;
  }
  .writeUs {
    height: 2.917vw;
    margin-bottom: 0.26vw;
  }
  .avatar {
    width: 2.917vw;
    height: 2.917vw;
    margin-right: 0.521vw;
  }
  .mail {
    margin-bottom: 3.437vw;
  }
}
//1920px
@media (max-width: $big-screen) {
  section {
    padding: 118px 0 0 120px;
  }
  h3 {
    width: 491px;
    height: auto;
    margin-bottom: 168px;
  }
  .writeUs {
    height: 56px;
    margin-bottom: 5px;
  }
  .avatar {
    width: 56px;
    height: 56px;
    margin-right: 10px;
  }
  .mail {
    margin-bottom: 66px;
  }
}
@media (min-width: 1281px) and (max-width: 1899px) {
  section {
    padding: 118px 0 0 6.316vw;
  }
  h3 {
    width: 25.842vw;
    height: auto;
    margin-bottom: 8.842vw;
  }
  .writeUs {
    height: 2.947vw;
    margin-bottom: 0.26vw;
  }
  .avatar {
    width: 2.947vw;
    height: 2.947vw;
    margin-right: 0.521vw;
  }
  .mail {
    margin-bottom: 3.474vw;
  }
}
//1280px
@media (max-width: $middle-screen) {
  section {
    padding: 78px 0 0 80px;
  }
  h1 {
    margin-bottom: 36.5px;
  }
  h3 {
    width: 328px;
    height: auto;
    margin-bottom: 114px;
  }
  .writeUs {
    height: 38px;
    margin-bottom: 5px;
  }
  .avatar {
    width: 38px;
    height: 38px;
    margin-right: 6.67px;
  }
  .mail {
    margin-bottom: 42px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  section {
    padding: 78px 0 0 7.8125vw;
  }
  h3 {
    width: 32.031vw;
    height: auto;
    margin-bottom: 11.13vw;
  }
  .writeUs {
    height: 3.711vw;
    margin-bottom: 0.0488vw;
  }
  .avatar {
    width: 3.711vw;
    height: 3.711vw;
    margin-right: 0.65vw;
  }
  .mail {
    margin-bottom: 4.1vw;
  }
}
@media (max-width: $small-screen) {
  main {
    flex-direction: column;
  }
  section {
    width: calc(100% - 80px);
    padding: 52px 40px 0 40px;
  }
  h3 {
    width: 515px;
    height: auto;
    margin-bottom: 62px;
  }
  .contactGroup {
    flex-direction: row;
    justify-content: flex-start;
    width: calc(100% - 82px);
    margin-bottom: 31.5px;
  }
  .mail {
    margin: 0;
    width: 224px;
  }
  .writeUs {
    width: 270px;
  }
}

@media (min-width: 361px) and (max-width: 720px) {
  section,
  h3,
  .contactGroup {
    width: 88.888vw;
  }
  section {
    padding: 7.222vw 5.556vw 0 5.556vw;
  }
  h3 {
    margin-bottom: 8.611vw;
  }
  .contactGroup {
    margin-bottom: 4.305vw;
  }
  .mail {
    width: 31.111vw;
    min-height: 4.444vw;
    justify-content: normal;
  }
  .writeUs {
    width: 37.5vw;
    height: 4.444vw;
    justify-content: flex-start;
  }

  .avatar {
    width: 4.444vw;
    height: 4.444vw;
    margin-right: 0.65vw;
    justify-content: center;
  }
  h4 {
    font-size: 3.333vw;
    line-height: 3.667vw;
  }
  h6 {
    font-size: 1.667vw;
    line-height: 2.666vw;
  }
}

//360px
@media (max-width: $mobile) {
  section {
    width: calc(100% - 60px);
    padding: 40px 30px 0 30px;
  }
  h1 {
    font-size: 38px;
    line-height: 45.6px;
    letter-spacing: calc(-0.03 * 38px);
    margin-bottom: 16px;
  }
  h3 {
    width: 300px;
    margin-bottom: 59px;
    font-weight: 400;
  }
  .contactGroup {
    flex-direction: column;
    justify-content: flex-start;
    width: calc(100vw - 60px);
    margin-bottom: 45px;
  }
  .mail {
    margin: 0;
    width: calc(100vw - 60px);
    margin-bottom: 21px;
  }
  .writeUs {
    width: calc(100vw - 60px);
    justify-content: flex-start;
    align-items: flex-start;
    height: 30px;
    margin-bottom: 3px;
  }
  h6 {
    width: calc(100vw - 60px);
    text-align: left;
    justify-content: flex-start;
    margin: 0;
    font-weight: 200;
  }
  .avatar {
    width: 30px;
    height: 30px;
    margin-left: 8px;
    background-size: 100%;
    background-position: center center;
  }
}

@media (max-width: $under-mobile) {
  section {
    width: 83.333vw;
    padding: 11.111vw 8.333vw 0 8.333vw;
  }
  h1 {
    font-size: 10.556vw;
    line-height: 12.667vw;
    letter-spacing: calc(-0.03 * 10.556vw);
    margin-bottom: 4.444vw;
  }
  h3 {
    width: 83.3333vw;
    margin-bottom: 16.389vw;
  }
  .contactGroup {
    flex-direction: column;
    justify-content: flex-start;
    width: 83.3333vw;
    margin-bottom: 12.5vw;
  }
  .writeUs,
  h6,
  .mail {
    width: 83.3333vw;
  }
  .mail {
    margin-bottom: 5.833vw;
  }
  .writeUs {
    height: 8.333vw;
    margin-bottom: 0.833vw;
  }
  .avatar {
    width: 8.333vw;
    height: 8.333vw;
    margin-left: 2.222vw;
  }
}
</style>
