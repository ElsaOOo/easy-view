<template>
  <div class="w-1/2 min-h-full">
    <el-card class="mb-6 min-h-1/2">
      <template #header>
        <el-button type="text"> 生成代码 </el-button>
        <el-button type="text" @click="resetForm"> 重置 </el-button>
      </template>
      <div v-if="formItems.length === 0">请选择左侧表单元素</div>
      <el-form :model="form" label-width="140px" v-else>
        <div v-for="(item, index) in formItems" :key="index">
          <div
            :class="{ selectedItemIndex: index === selectedItemIndex }"
            @click="handleFormItem(index, item)"
          >
            <el-form-item :label="(item && item.props.label) || '表单label'">
              <component :is="item.type" v-if="item" style="width: 90%" />
            </el-form-item>
            <el-button
              v-if="index === selectedItemIndex"
              type="danger"
              size="mini"
              icon="el-icon-minus"
              style="position: absolute; top: 15px; right: -10px"
              @click="deleteFormItem(index)"
            />
          </div>
        </div>
      </el-form>
    </el-card>
    <template-code />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from "vue";
import { useStore } from "vuex";
import TemplateCode from "../template-code/index.vue";

export default defineComponent({
  name: "form-view",
  components: {
    TemplateCode,
  },
  setup() {
    const store = useStore();
    const form = reactive({});
    const selectedItemIndex = ref(0);
    const handleFormItem = (index, formItem) => {
      selectedItemIndex.value = index;
    };
    const deleteFormItem = (index) => {
      store.commit("elePlusForm/deleteFormItem", index);
    };
    const resetForm = () => {
      store.commit("elePlusForm/resetForm");
    };
    return {
      form,
      formItems: computed(() => store.state.elePlusForm.formItems),
      selectedItemIndex,
      handleFormItem,
      deleteFormItem,
      resetForm,
    };
  },
});
</script>

<style lang="less" scoped>
.el-form {
  .el-form-item {
    margin: 10px 0;
  }
}
.selectedItemIndex {
  border: 1px dashed #409eff;
  border-radius: 10px;
  position: relative;
  margin-bottom: 10px;
}
.el-card :deep(.el-card__header) {
  padding: 0 20px;
}
</style>
