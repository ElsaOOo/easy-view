<template>
  <el-header>
    <el-menu
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeMenu"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template #title>表单</template>
        <el-menu-item index="1-1">
          <router-link to="/ele-plus-form"> element-plus版 </router-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "page-sider",
  setup() {
    const activeMenu = ref("1-1");
    return {
      activeMenu,
    };
  },
});
</script>

<style scoped></style>
