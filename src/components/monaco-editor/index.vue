<template>
  <div :id="id" class="monaco-editor"></div>
</template>

<script>
import { defineComponent, onMounted, toRefs, reactive, watch } from "vue";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export default defineComponent({
  props: {
    id: {
      type: String,
      default: "editor",
    },
    value: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { id, value } = toRefs(props);
    let editor = reactive(null);
    watch(value, (newValue) => {
      editor.setValue(newValue);
    });
    onMounted(() => {
      // eslint-disable-next-line no-unused-vars
      editor = monaco.editor.create(document.getElementById(id.value), {
        value: value.value,
        language: "javvascript",
        theme: "vs-dark",
      });
    });
    return {};
  },
});
</script>
<style lang="less" scoped>
.monaco-editor {
  height: 100%;
}
</style>
