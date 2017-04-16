<template>
  <el-card class="box-card" style="height: 400px;">
    <h1 id="vote-title" @dblclick="test">请输入问卷名称</h1>
    <el-row v-if="vote.length">
      <el-col v-for="(item, index) in vote">
        <h2  @dblclick="test(item.title)">{{index + 1 + ". " +item.title}}</h2>
        <el-input v-model="item.title"></el-input>
        <el-input v-if="item.cate == 'text'"></el-input>
        <el-radio v-else-if="item.cate == 'radio'" class="radio" v-for="(option, index) in item.options" :label="option" :key="index"></el-radio>
        <el-checkbox-group v-else-if="item.cate == 'checkbox'">
          <el-checkbox v-for="(option, index) in item.options" :label="option" :key="index"></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>    
    <el-row  v-if="dialogTableVisible">
      <el-col :span="12" :offset="6" style="text-align:center;">
        <el-button @click="addQuestion('radio')">单选题</el-button>
        <el-button @click="addQuestion('checkbox')">多选题</el-button>
        <el-button @click="addQuestion('text')">文本题</el-button>
      </el-col>
    </el-row>

    <el-button type="info" size="large" @click="dialogTableVisible = true">+ 添加问题</el-button>
    <el-row>
      <el-col :span="6" :offset="4">
        <el-date-picker
          name="pick-time"
          v-model="setDate"
          type="date"
          placeholder="请选择投票截止日期"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-col>
      <el-button type="primary" @click="save">保存问卷</el-button>
      <el-button type="success">发布问卷</el-button>
    </el-row>
  </el-card>
</template>
<script>
  export default {
    data() {
      return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        setDate: '',
        dialogTableVisible: false,
        vote: []
      }
    },
    methods: {
      save() {
        console.log(this.date)
      },
      test(item) {
        console.log(this)
        console.log(item)
        console.log('dbclick')
      },
      addQuestion(cate) {
        let quest = {
          id: this.vote.length,
          title: '请输入问题',
          cate: cate,
          options: ['选项一','选项二'],
          result: []
        }
        console.log(this)
        this.vote.push(quest)
        this.dialogTableVisible = false
      }
    }
  }
</script>
<style>
#vote-title {
  text-align: center;
}
</style>