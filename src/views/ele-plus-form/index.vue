<template>
  <div class="flex justify-between flex-1">
    <form-item-assets />
    <form-view />
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormItemAssets from "./components/form-item-asset/index.vue";
import FormView from "./components/form-view/index.vue";

export default defineComponent({
  components: {
    FormItemAssets,
    FormView,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
