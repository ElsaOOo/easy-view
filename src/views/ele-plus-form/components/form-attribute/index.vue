<template>
  <el-form :model="form" label-width="100px">
    <el-form-item label="表单数据对象">
      <el-input v-model.trim="form.model" placeholder="表单数据对象" />
    </el-form-item>
    <el-form-item label="表单Ref">
      <el-input v-model.trim="form.ref" placeholder="表单的Ref值" />
    </el-form-item>
    <el-form-item label="表单域标签的位置">
      <el-input
        v-model.trim="form.labelPosition"
        placeholder="表单域标签的位置"
      />
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
      formObj: "defaultFormObj",
      ref: "defaultRef",
      labelPosition: "left",
    });

    watch(form, (newValue) => {
      store.commit("elePlusForm/", {
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
