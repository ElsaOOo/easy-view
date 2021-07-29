<template>
  <div class="h-2/6">
    <monaco-editor id="code-template" :value="value" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import MonacoEditor from "@/components/monaco-editor/index.vue";

export default defineComponent({
  name: "template-code",
  components: {
    MonacoEditor,
  },
  setup() {
    const store = useStore();

    return {
      value: computed(() => store.state.elePlusForm.srcCode),
    };
  },
});
</script>

<style lang="less" scoped></style>
