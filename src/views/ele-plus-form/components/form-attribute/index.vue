<template>
  <el-form :model="form" label-width="100px">
    <el-form-item label="表单数据对象">
      <el-input v-model.trim="form.model" placeholder="表单数据对象" />
    </el-form-item>
    <el-form-item label="表单Ref">
      <el-input v-model.trim="form.ref" placeholder="表单的Ref值" />
    </el-form-item>
    <el-form-item label="表单域标签的位置">
      <!-- <el-input
        v-model.trim="form.labelPosition"
        placeholder="表单域标签的位置"
      /> -->
      <el-radio-group v-model="form.labelPosition" size="small">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "form-attribute",
  setup() {
    const store = useStore();
    const form = reactive({
      model: "defaultFormObj",
      ref: "",
      labelPosition: "left",
    });

    watch(form, (newValue) => {
      store.commit("elePlusForm/setFormAttribute", {
        ...newValue,
      });
    });

    return {
      form,
    };
  },
});
</script>

<style lang="less" scoped></style>
