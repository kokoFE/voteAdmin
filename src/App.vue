<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>-->
    <top-banner></top-banner>
    <el-row>
      <el-col :xs="6" :sm="4" :md="4" :lg="2">
        <side-nav></side-nav>
      </el-col>
      <el-col id="main" :xs="{span: 18, offset: 6}" :sm="{span: 20, offset: 4}" :md="{span: 20, offset: 4}" :lg="{span: 22, offset: 2}">
        <router-view></router-view>        
      </el-col>
    </el-row>
    <!--<div class="main">
    </div>-->
  </div>
</template>

<script>
import sideNav from '../src/component/sideNav.vue'
import topBanner from '../src/component/topBanner.vue'

export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!'
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  },
  components: {
    sideNav,
    topBanner
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
#main {
  position: relative;
  top: 80px;
}
 .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
