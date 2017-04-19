<template>
  <el-card class="box-card" style="min-height: 400px;">
    <h2 id="vote-title" @dblclick="edit" v-text="vote.title"></h2>
    <el-input v-model="vote.title"></el-input>
    <el-row v-if="vote.title.length">
      <el-col>
        <ol>
          <li v-for="(item, index) in vote.list">
            <h3 @dblclick="edit(item)" :class="{none: item.edit}">{{item.title}}</h3>
            <el-input @blur="save(item)" v-model="item.title" class="none" :class="{test: item.edit}"></el-input>
            <div>
              <el-input v-if="item.cate == 'text'"></el-input>

              <el-radio v-else-if="item.cate == 'radio'" class="radio" v-for="(option, index) in item.options" :label="option" :key="index">
                
                <el-input @blur="save(item)" v-model="item.options[index]"  class="input"></el-input>
                
              </el-radio>
              
              <!--<input type="text">-->
              <el-checkbox-group v-else-if="item.cate == 'checkbox'" v-for="(option, index) in item.options">
                <el-checkbox  @dblclick="edit(item)" :label="option" :key="index"></el-checkbox>
                <el-input @blur="save(item)" v-model="item.options[index]"  class="input"></el-input>
              </el-checkbox-group>
            </div>
          </li>
        </ol>
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
        vote: {
          title: '请输入问卷名称',
          list: []
        }
      }
    },
    methods: {
      save(item) {
        item.edit = false;
        console.log(item.edit)
      },
      edit(item) {
        item.edit = true;
        console.log(item.edit )
      },
      addQuestion(cate) {
        let quest = {
          id: this.vote.list.length,
          title: '请输入问题',
          cate: cate,
          options: ['选项一','选项二'],
          result: [],
          edit: false
        }
        this.vote.list.push(quest)
        this.dialogTableVisible = false
      }
    }
  }
</script>
<style>
h3 {
  margin: 0;
}
#vote-title {
  text-align: center;
}
.input {
  width: 300px;
}
.none {
  display: none;
}
.test {
  display: inline-block;
  width: 500px;
}
</style>