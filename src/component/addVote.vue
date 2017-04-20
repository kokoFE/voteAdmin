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

              <div  v-else-if="item.cate == 'radio'"  v-for="(option, index) in item.options" style="margin-bottom:10px">
                <el-radio @dblclick="save(item)" :label="option" :key="index" class="item"></el-radio>
                <el-input v-model="item.options[index]"  class="input"></el-input>
                <el-button-group>
                  <el-button @click="move(item.options,index,-1)" icon="arrow-up" size="mini" type="default" :disabled="index == 0"></el-button>
                  <el-button @click="move(item.options,index,1)" icon="arrow-down" size="mini" type="default" :disabled="index == item.options.length - 1"></el-button>
                  <el-button @click="item.options.splice(index,1)" icon="close" size="mini" type="default" :disabled="item.options.length == 1"></el-button>
                </el-button-group>
              </div>
              
              <div v-else-if="item.cate == 'checkbox'" v-for="(option, index) in item.options">
                <el-checkbox  @dblclick="edit(item)"   :label="option" :key="index"></el-checkbox>
                <el-input @blur="save(item)" v-model="item.options[index]"  class="input"></el-input>
                <el-button-group>
                  <el-button @click="move(item.options,index,-1)" icon="arrow-up" size="mini" type="default" :disabled="index == 0"></el-button>
                  <el-button @click="move(item.options,index,1)" icon="arrow-down" size="mini" type="default" :disabled="index == item.options.length - 1"></el-button>
                  <el-button @click="item.options.splice(index,1)" icon="close" size="mini" type="default"></el-button>
                </el-button-group>
              </div>
            </div>
            <el-row>
              <el-col>
                <el-button @click="addOption(item)" size="small" type="info">新增选项</el-button>
                <el-button @click="move(vote.list,index,-1)" size="small" :plain="true" :disabled="index == 0">上移</el-button>
                <el-button @click="move(vote.list,index,1)" size="small" :plain="true" :disabled="index == vote.list.length -1">下移</el-button>
                <el-button @click="vote.list.splice(index,1)"size="small" type="danger">删除</el-button>
              </el-col>
            </el-row>
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
      },
      addOption(item) {
        item.options.push('请输入选项')
        // var options = this.
        // this.vote.list.options.push('1')
      },
      move(data,index,direction) {
        console.log('move')
        var target = index + direction;
        var temp = data[index];
        data.splice(index,1)
        data.splice(target, 0,temp)
        

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
.item + .item {
  margin-top: 10px;
}
i {
  color: rgb(132, 146, 166);
  opacity: 0.5;
}
i:hover {
  opacity: 1;
}
</style>