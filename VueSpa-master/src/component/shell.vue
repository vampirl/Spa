<template>
  <div>
    <el-container class="app-shell">
      <div>
        <slot name="aside"></slot>
      </div>
      <el-container class="app-right">
        <el-header style="height:60px;">
          <slot name="header"></slot>
        </el-header>
        <el-main>
          <slot name="main"></slot>
        </el-main>
        <el-footer style="height:60px; margin-top:24px;">
          <s-footer></s-footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import SFooter from "./footer";
export default {
  components: {
    SFooter
  }
};
</script>
<style>
.app-shell {
  height: 100vh;
}

.app-right {
  background-color: rgb(240, 242, 245);
}
.el-header {
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  background-color: rgb(255, 255, 255);
}
.el-main {
  background-color: rgb(255, 255, 255);
  color: #333;
  padding: 24px;
  margin: 24px 0 0 16px;
}
.el-footer {
  background-color: rgb(240, 242, 245);
  color: #404040;
  text-align: center;
}
</style>
