import genFormItemCode from "./snippetForm";

export const _genFormItems = (model, formItems) => {
  return formItems
    .map((item) => {
      const func = genFormItemCode(item.type);
      return func(model, item.props.label, item.props.value);
    })
    .join("\n");
};

const getRef = (value: string) => {
  if (value) {
    return `ref="${value}"`;
  }
  return "";
};

const getLabelPosition = (value: string) => {
  if (value) {
    return `labelPosition="${value}"`;
  }
  return "";
};

export const genVueFileWrapper = ({ model, ref, formItems, labelPosition }) => {
  return `
<template>
  <el-form :model="${model}" ${getRef(
    ref
  )} label-width="80px" ${getLabelPosition(labelPosition)}>
    ${_genFormItems(model, formItems)}
    
  </el-form>
</template>
<script lang="ts">
  import { defineComponent, reactive } from "vue";

  export default defineComponent({
    setup() {
      const ${model} = reactive({})
      return {
        ${model}
      };
    },
  });
</script>
`;
};

// export default {
//   data() {
//     return {
//       ${_genData(model, formItems)},
//       ${_genRules(validated, formItems)}
//     }
//   },
// }
