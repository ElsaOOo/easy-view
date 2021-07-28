<template>
  <el-card class="w-1/2">
    <el-form :model="form" label-width="140px">
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
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "form-view",
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
    return {
      form,
      formItems: computed(() => store.state.elePlusForm.formItems),
      selectedItemIndex,
      handleFormItem,
      deleteFormItem,
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
</style>
