<template>
  <div class="flex justify-between flex-1">
    <form-item-assets />
    <form-view />
    <form-configs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormItemAssets from "./components/form-item-asset/index.vue";
import FormView from "./components/form-view/index.vue";
import FormConfigs from "./components/form-configs/index.vue";

export default defineComponent({
  components: {
    FormItemAssets,
    FormView,
    FormConfigs,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
