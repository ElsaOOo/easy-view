import { Module } from "vuex";
import { RootState } from "../types";
const defaultProps = {
  label: "",
  value: "",
  required: "",
  type: "",
};

const formAssets = [
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
];
type FormAssets = typeof formAssets;
export interface FormItemConfig {
  type: string;
  title: string;
  props: Record<string, any>;
}
interface State {
  formItems: FormItemConfig[];
  formAssets: FormAssets;
  currentFormItem: FormItemConfig;
}
const elePlusForm: Module<State, RootState> = {
  namespaced: true,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  state: () => ({
    // 表单资源
    formAssets,
    // 当前表单所有项
    formItems: [],
    // 当前操作的表单项
    currentFormItem: {} as FormItemConfig,
  }),
  mutations: {
    addFormItem(state, newFormItem) {
      state.formItems.push(newFormItem);
      state.currentFormItem = newFormItem;
    },
    deleteFormItem(state, index) {
      state.formItems.splice(index, 1);
    },
  },
  actions: {},
  getters: {},
};

export default elePlusForm;
