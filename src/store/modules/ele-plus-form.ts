import { Module } from "vuex";
import { RootState } from "../types";

export interface FormItemConfig {
  type: string;
  title: string;
  props: Record<string, any>;
}
interface State {
  formItems: FormItemConfig[];
}
const elePlusForm: Module<State, RootState> = {
  namespaced: true,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  state: () => ({
    formItems: [],
  }),
  mutations: {
    addFormItem(state, newFormItem) {
      state.formItems.push(newFormItem);
    },
  },
  actions: {},
  getters: {},
};

export default elePlusForm;
