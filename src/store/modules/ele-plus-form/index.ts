import { Module, Store } from "vuex";
import { genVueFileWrapper } from "./snippetVue3";
import { RootState } from "../../types";
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
export interface Form {
  // 表单数据对象
  model?: ObjectConstructor;
  // 表单域标签的位置
  labelPosition?: StringConstructor;
  ref?: string;
}
interface State {
  formItems: FormItemConfig[];
  formAssets: FormAssets;
  currentFormItem: FormItemConfig;
  // 模板代码
  srcCode: string;
  formAttribute: Form;
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
    // 表单form属性 参考element Form Attributes
    formAttribute: {} as Form,
    srcCode: "",
  }),
  mutations: {
    addFormItem(this: Store<State>, state, newFormItem) {
      state.formItems.push(newFormItem);
      state.currentFormItem = newFormItem;
      this.commit("elePlusForm/genFromTemplate");
    },
    deleteFormItem(state, index) {
      state.formItems.splice(index, 1);
    },
    setFormAttribute(this: Store<State>, state, payload) {
      state.formAttribute = payload;
      this.commit("elePlusForm/genFromTemplate");
    },
    resetForm(this: Store<State>, state) {
      state.formItems = [];
      state.srcCode = "";
      state.formAttribute = {};
    },
    // 生成模板代码
    genFromTemplate(this: Store<State>, state) {
      const data = {
        ref: state.formAttribute.ref,
        model: state.formAttribute.model,
        formItems: state.formItems,
      };
      state.srcCode = genVueFileWrapper(data);
    },
  },
  actions: {},
  getters: {},
};

export default elePlusForm;
