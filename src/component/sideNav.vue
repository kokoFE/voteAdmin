<template>
  <el-row class="tac">
    <el-col>
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <!--<el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>-->
        <router-link to="/guestGuide">
          <el-menu-item index="1"><i class="el-icon-edit"></i>嘉宾管理</el-menu-item>
        </router-link>
        <router-link to="/voteGuide">
          <el-menu-item index="2"><i class="el-icon-setting"></i>投票管理</el-menu-item>        
        </router-link>
        <router-link to="/showResult">
          <el-menu-item index="3"><i class="el-icon-date"></i>问卷结果</el-menu-item>
        </router-link>
        <el-menu-item index="4"><i class="el-icon-information"></i>退出登录</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
.tac {
  position: fixed;
  top: 80px;
}
a {
  text-decoration: none;
}
</style>