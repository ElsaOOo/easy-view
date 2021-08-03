<template>
  <div :id="editorId" class="monaco-editor"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs, reactive, watch } from "vue";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "monaco-editor/esm/vs/basic-languages/html/html.contribution";
import "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution";
import "monaco-editor/esm/vs/basic-languages/css/css.contribution";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
import { editor } from "monaco-editor/esm/vs/editor/editor.api.d";

export default defineComponent({
  props: {
    editorId: {
      type: String,
      default: "editor",
    },
    value: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { editorId, value } = toRefs(props);
    let editor = reactive<editor.IStandaloneCodeEditor>(
      {} as editor.IStandaloneCodeEditor
    );
    watch(value, (newValue) => {
      editor.setValue(newValue);
    });
    onMounted(() => {
      if (document.getElementById(editorId.value)) {
        // eslint-disable-next-line no-unused-vars
        editor = monaco.editor.create(
          document.getElementById(editorId.value)!,
          {
            value: value.value,
            theme: "vs-dark",
            language: "html",
            "semanticHighlighting.enabled": true,
          }
        );
      }
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
