<template>
  <div :class="classFlex" :style="styleObject">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, toRefs, reactive } from "vue";
import { FlexBoxProps } from "@/shared/types";

const JUS_ALIAS = {
  between: "space-between",
  end: "flex-end",
  start: "flex-start",
  around: "space-around",
  evenly: "space-evenly",
  stretch: "stretch",
  center: "center",
  normal: "normal",
};

const props = withDefaults(defineProps<FlexBoxProps>(), {
  class: "",
  direction: "row",
  wrap: false,
  justify: "center",
  align: "center",
  hide: false,
  shrink: 1,
  grow: 0,
  gap: 0,
  w: "100%",
  h: "auto",
  m: "0",
  p: "0",
  r: "0",
  overflow: "visible",
  bgcolor: "inherit",
});

const { justify, align, gap, hide, bgcolor } = toRefs(props);
const cssjustify = JUS_ALIAS[justify.value];
const alignjustify = JUS_ALIAS[align.value];

const classFlex = "flexbox " + String(props.class);

const styleObject = reactive({
  gap: String(gap.value) + "px",
  display: hide.value ? "none" : "flex",
  backgroundColor: bgcolor.value === "inherit" ? "inherit" : bgcolor.value,
});
</script>

<style scoped lang="scss">
.flexbox {
  justify-content: v-bind(cssjustify);
  align-items: v-bind(alignjustify);
  width: v-bind(w);
  height: v-bind(h);
  margin: v-bind(m);
  padding: v-bind(p);
  border-radius: v-bind(r);
  overflow: v-bind(overflow);
  flex-direction: v-bind(direction);
}
</style>
