<template>
  <el-container class="main-content" direction="vertical">
    <page-header />
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { defineComponent } from "vue";
import PageHeader from "@/components/page-header/index.vue";

export default defineComponent({
  components: {
    PageHeader,
  },
  setup() {
    return {};
  },
});
</script>
<style>
.main-content {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  padding: 0;
}

.el-aside {
  color: #333;
}
</style>
