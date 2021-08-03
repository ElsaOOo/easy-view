<template>
  <el-form :model="formItemAttribute" label-width="80px">
    <el-form-item label="表单元素">
      <el-select
        v-model="formItemAttribute.type"
        placeholder="请选择表单元素类型"
        @change="setFormItemAttribute"
      >
        <el-option
          v-for="item in itemsList"
          :key="item.type"
          :label="item.title"
          :value="item.type"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="label">
      <el-input
        v-model.trim="formItemAttribute.props.label"
        placeholder="请输入label"
        @change="setFormItemAttribute"
      />
    </el-form-item>
    <el-form-item label="value">
      <el-input
        v-model.trim="formItemAttribute.props.value"
        placeholder="请输入value"
        @change="setFormItemAttribute"
      />
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import { cloneDeep } from "lodash-es";

export default defineComponent({
  name: "form-item-attr",
  setup() {
    const store = useStore();
    let formItemAttribute = ref({
      props: {},
    });
    watch(
      () => store.state.elePlusForm.currentFormItem,
      (newValue) => {
        formItemAttribute.value = cloneDeep(newValue);
      },
      {
        deep: true,
      }
    );
    const itemsList = store.state.elePlusForm.formAssets.reduce((acc, cur) => {
      const temp = cur.specs.map((item) => ({
        type: item.type,
        title: item.title,
      }));
      acc = acc.concat(temp);
      return acc;
    }, []);

    const setFormItemAttribute = () => {
      store.commit("elePlusForm/updateFormItemAttr", {
        ...formItemAttribute.value,
      });
    };
    return {
      formItemAttribute,
      itemsList,
      setFormItemAttribute,
    };
  },
});
</script>

<style scoped></style>
