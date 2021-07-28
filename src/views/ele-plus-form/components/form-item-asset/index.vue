<template>
  <el-card>
    <div class="mb-3">表单元素</div>
    <div v-for="group in formAssets" :key="group.type" class="mb-3">
      <el-tag
        v-for="item in group.specs"
        :key="item.type"
        effect="plain"
        class="mr-1 cursor-pointer"
        @click="addFormItem(item)"
      >
        {{ item.title }}
      </el-tag>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { FormItemConfig } from "@/store/modules/ele-plus-form";

const defaultProps = {
  label: "",
  value: "",
  required: "",
  type: "",
};
export default defineComponent({
  setup() {
    const store = useStore();
    const formAssets = reactive([
      {
        type: "ElInput",
        title: "Input输入框",
        specs: [
          {
            type: "ElInput",
            title: "Input",
            props: { ...defaultProps },
          },
          {
            type: "ElInputNumber",
            title: "Input Number",
            props: { ...defaultProps },
          },
        ],
      },
      {
        type: "ElRadio",
        title: "Radio 单选框",
        specs: [
          {
            type: "ElRadio",
            title: "Radio",
            props: { ...defaultProps },
          },
        ],
      },
      {
        type: "ElCheckbox",
        title: "Checkbox 多选框",
        specs: [
          {
            type: "ElCheckbox",
            title: "Checkbox ",
            props: { ...defaultProps },
          },
        ],
      },
      {
        type: "ElSelect",
        title: "Select 选择器",
        specs: [
          {
            type: "ElSelect",
            title: "Select",
            props: { ...defaultProps },
          },
        ],
      },
      {
        type: "ElSwitch",
        title: "Switch开关",
        specs: [
          {
            type: "ElSwitch",
            title: "Switch ",
            props: { ...defaultProps },
          },
        ],
      },
    ]);

    const addFormItem = (formItem: FormItemConfig) => {
      store.commit("elePlusForm/addFormItem", formItem);
    };

    return {
      formAssets,
      addFormItem,
    };
  },
});
</script>

<style lang="less" scoped></style>
