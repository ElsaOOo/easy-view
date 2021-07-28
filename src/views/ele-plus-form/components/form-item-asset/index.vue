<template>
  <el-card class="w-1/5">
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
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { FormItemConfig } from "@/store/modules/ele-plus-form";

export default defineComponent({
  setup() {
    const store = useStore();

    const addFormItem = (formItem: FormItemConfig) => {
      store.commit("elePlusForm/addFormItem", formItem);
    };

    return {
      formAssets: store.state.elePlusForm.formAssets,
      addFormItem,
    };
  },
});
</script>

<style lang="less" scoped></style>
