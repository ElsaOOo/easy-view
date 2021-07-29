import genFormItemCode from "./snippetForm";

export const _genFormItems = (model, formItems) => {
  return formItems
    .map((item) => {
      const func = genFormItemCode(item.type);
      return func(model, item.props.label, item.props.value);
    })
    .join("\n");
};

export const genVueFileWrapper = ({ model, ref, formItems }) => {
  return `
<template>
  <el-form :model="${model}" ${ref} label-width="80px">
    ${_genFormItems(model, formItems)}
    
  </el-form>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      return {};
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
