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
        v-model.trim="formItemAttribute.label"
        placeholder="请输入label"
        @change="setFormItemAttribute"
      />
    </el-form-item>
    <el-form-item label="value">
      <el-input
        v-model.trim="formItemAttribute.value"
        placeholder="请输入value"
        @change="setFormItemAttribute"
      />
    </el-form-item>
    <!-- <el-form-item label="数据验证">
      <el-checkbox
        v-model="formItemAttribute.required"
        label="true"
        @change="setFormItemAttribute"
      >
        是否必填
      </el-checkbox>
      <el-select
        v-model="formItemAttribute.type"
        style="width: 150px"
        clearable
        placeholder="数据类型"
        size="small"
        @change="setFormItemAttribute"
      >
        <el-option
          v-for="item in value_type_opts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item> -->
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "form-item-attr",
  setup() {
    const store = useStore();
    // const formItemAttribute = reactive({});
    const formItemElement = reactive({});
    const itemsList = store.state.elePlusForm.formAssets.reduce((acc, cur) => {
      const temp = cur.specs.map((item) => ({
        type: item.type,
        title: item.title,
      }));
      acc = acc.concat(temp);
      return acc;
    }, []);
    console.log(itemsList);

    return {
      formItemAttribute: computed(
        () => store.state.elePlusForm.currentFormItem
      ),
      formItemElement,
      itemsList,
    };
  },
});
</script>

<style scoped></style>
