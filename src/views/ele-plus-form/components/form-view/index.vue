<template>
  <div class="w-1/2 min-h-full">
    <el-card class="mb-6 min-h-1/2">
      <template #header>
        <el-button type="text" @click="genTemplateCode"> 生成代码 </el-button>
        <el-button type="text" @click="resetForm"> 重置 </el-button>
      </template>
      <div v-if="formItems.length === 0">请选择左侧表单元素</div>
      <el-form
        :model="form"
        label-width="140px"
        v-else
        :label-position="formAttribute.labelPosition"
      >
        <div v-for="(item, index) in formItems" :key="index">
          <div
            :class="{ selectedItemIndex: index === selectedItemIndex }"
            @click="handleFormItem(index, item)"
          >
            <el-form-item
              :label="(item.props && item.props.label) || '表单label'"
            >
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
import { defineComponent, reactive, computed, ref, watch } from "vue";
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
    const formAttribute = ref({});
    const selectedItemIndex = ref(0);
    watch(
      () => store.state.elePlusForm.clickedIndex,
      (val) => {
        selectedItemIndex.value = val;
      }
    );
    watch(
      () => store.state.elePlusForm.formAttribute,
      (value) => {
        formAttribute.value = { ...value };
      }
    );
    const handleFormItem = (index, formItem) => {
      store.commit("elePlusForm/setClickedIndex", index);
    };
    const deleteFormItem = (index) => {
      store.commit("elePlusForm/deleteFormItem", index);
    };
    const resetForm = () => {
      store.commit("elePlusForm/resetForm");
    };
    const genTemplateCode = () => {
      store.commit("elePlusForm/genFromTemplate");
    };
    return {
      form,
      formAttribute,
      formItems: computed(() => store.state.elePlusForm.formItems),
      selectedItemIndex,
      handleFormItem,
      deleteFormItem,
      resetForm,
      genTemplateCode,
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
