<template>
  <div class="content">
    <div class="components border-r-2 border-gray-500 p-3">
      <div class="group">
        <div class="mb-3 group-name">按钮</div>
        <div class="flex atomic-comps">
          <div class="wrapper">
            <el-button size="small">默认按钮</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="drawer flex flex-col items-center justify-center">
      <div>width: 357; height: 667</div>
      <div class="phone"></div>
    </div>
    <div class="settings"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.content {
  display: flex;
  height: 100%;
  .components {
    width: 20%;
  }
  .drawer {
    width: 50%;
    .phone {
      width: 375px;
      height: 667px;
      border: 1px solid #e9e9e9;
    }
  }
  .settings {
    width: 30%;
  }
}
</style>
