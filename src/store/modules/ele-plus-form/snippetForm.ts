const genFormItemProp = (value) => {
  // if (validated) {
  //   return `prop='${value}'`;
  // } else {
  //   return `\u0020`;
  // }
  return `prop='${value}'`;
};

const genFormItemWrapper = (genFormItem) => {
  return function (formObj, label, value) {
    return `
  <el-form-item label="${label}" ${genFormItemProp(value)}>
    ${genFormItem(formObj, value, label)}
  </el-form-item>
      `;
  };
};
export const genInputTrim = (formObj, value, label) => {
  return `<el-input v-model.trim="${formObj}.${value}" placeholder='请输入${label}'></el-input>`;
};

export const genInputNum = (formObj, value, label) => {
  return `<el-input v-model.number="${formObj}.${value}" type='number' placeholder='请输入${label}'></el-input>`;
};

export const genSelect = (formObj, value, label) => {
  return `
    <el-select v-model="${formObj}.${value}" placeholder="请选择${label}">
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>`;
};

export const genCheckbox = (formObj, value) => {
  return `
  <el-checkbox-group v-model="${formObj}.${value}">
      <el-checkbox label="第一个复选框" name="type"></el-checkbox>
      <el-checkbox label="第二个复选框" name="type"></el-checkbox>
  </el-checkbox-group>`;
};
export const genRadio = (formObj, value) => {
  return `
    <el-radio-group v-model="${formObj}.${value}">
      <el-radio label="第一个选项"></el-radio>
      <el-radio label="第二个选项"></el-radio>
    </el-radio-group>`;
};
export const genSwitch = (formObj, value) => {
  return `<el-switch v-model="${formObj}.${value}"></el-switch>`;
};

export default function (type) {
  const typeFuncMap = {
    ElInput: genFormItemWrapper(genInputTrim),
    ElInputNumber: genFormItemWrapper(genInputNum),
    ElSelect: genFormItemWrapper(genSelect),
    ElCheckbox: genFormItemWrapper(genCheckbox),
    ElRadio: genFormItemWrapper(genRadio),
    ElSwitch: genFormItemWrapper(genSwitch),
  };
  return typeFuncMap[type];
}
