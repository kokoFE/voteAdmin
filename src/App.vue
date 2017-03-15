<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>-->
    <side-nav></side-nav>
  </div>
</template>

<script>
import sideNav from '../src/component/sideNav.vue'

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
    sideNav
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
 .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
