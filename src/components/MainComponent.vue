<template>
  <main>
    <section>
      <h1>Обсудить проект</h1>
      <h3>Расскажите о проекте в форме справа или свяжитесь с нами напрямую</h3>
      <FlexBox direction="column">
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
            <div class="avatar"></div>
            <a href="https://t.me/hello_riverstart" target="_blank">
              <h4>@ekhohrin</h4>
            </a>
          </FlexBox>
          <h6>Написать нашему аккаунт- директору в Telegram</h6>
        </FlexBox>
      </FlexBox>
      <p v-if="screenWidth > 768">{{ screenWidth }}</p>
    </section>
    <RequestForm />
    <p v-if="screenWidth <= 768">{{ screenWidth }}</p>
  </main>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import FlexBox from "./FlexBox.vue";
import RequestForm from "./RequestForm.vue";

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
    width: 100%;
  }
}
</style>
