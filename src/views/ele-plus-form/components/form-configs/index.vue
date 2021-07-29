<template>
  <el-card class="w-1/4">
    <el-tabs v-model="activeName">
      <el-tab-pane label="表单项属性" name="item">
        <form-item-attr />
      </el-tab-pane>
      <el-tab-pane label="表单属性" name="form">
        <form-attribute />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FormItemAttr from "../form-item-attr/index.vue";
import FormAttribute from "../form-attribute/index.vue";

export default defineComponent({
  name: "form-configs",
  components: {
    FormItemAttr,
    FormAttribute,
  },
  setup() {
    const activeName = ref("item");
    return {
      activeName,
    };
  },
});
</script>

<style lang="less" scoped></style>
