<template>
  <el-card class="box-card" style="min-height: 400px;">
    <h2 id="vote-title" @dblclick="edit(vote)" v-text="vote.title"></h2>
    <el-input @blur="save(vote)" @change="change(vote.title)" v-model="vote.title" :class="{visable: editing == vote, none: editing != vote}"></el-input>

    <!--list panel start-->
    <el-row v-if="vote.title.length">
      <el-col>
        <ol>
          <li v-for="(item, index) in vote.list">
            <h3 @dblclick="edit(item)" :class="{none: editing == item}">{{item.title}}</h3>
            <el-input @blur="save(item)" v-model="item.title" :class="{visable: editing == item, none: editing != item}" class="input"></el-input>
            <div>
              <el-input v-if="item.cate == 'text'" disabled placeholder="请输入文字..." class="input"></el-input>

              <div  v-else-if="item.cate == 'radio'"  v-for="(option, index) in item.options" style="margin-bottom:10px">
                <!--<el-radio @change="test(item)" :label="option" :key="index" class="item"></el-radio>-->
                <label class="el-radio item" @dblclick="edit(option)">
                  <span class="el-radio__input">
                    <span class="el-radio__inner"></span>
                  </span>
                  <span class="el-radio__label" :class="{none: editing == option}">{{ option.option }}</span>
                </label>
                <el-input @blur="save(option)" v-model="item.options[index].option" class="input" :class="{visable: editing == option, none: editing != option}"></el-input>
                <el-button-group>
                  <el-button @click="move(item.options,index,-1)" icon="arrow-up" size="mini" type="default" :disabled="index == 0"></el-button>
                  <el-button @click="move(item.options,index,1)" icon="arrow-down" size="mini" type="default" :disabled="index == item.options.length - 1"></el-button>
                  <el-button @click="item.options.splice(index,1)" icon="close" size="mini" type="default" :disabled="item.options.length == 1"></el-button>
                </el-button-group>
              </div>
              
              <div v-else-if="item.cate == 'checkbox'" v-for="(option, index) in item.options">
                <!--<el-checkbox  @change="test(item)"   :label="option" :key="index"></el-checkbox>-->
                <label class="el-checkbox" @dblclick="edit(option)">
                  <span class="el-checkbox__input">
                    <span class="el-checkbox__inner"></span>
                  </span><span class="el-checkbox__label" :class="{none: editing == option}">{{  option.option  }}</span>
                </label>
                <el-input @blur="save(option)" v-model="item.options[index].option" class="input" :class="{visable: editing == option, none: editing != option}"></el-input>
                <el-button-group>
                  <el-button @click="move(item.options,index,-1)" icon="arrow-up" size="mini" type="default" :disabled="index == 0"></el-button>
                  <el-button @click="move(item.options,index,1)" icon="arrow-down" size="mini" type="default" :disabled="index == item.options.length - 1"></el-button>
                  <el-button @click="item.options.splice(index,1)" icon="close" size="mini" type="default" :disabled="item.options.length == 1"></el-button>
                </el-button-group>
              </div>
            </div>
            <el-row>
              <el-col>
                <el-button @click="addOption(item)" size="small" type="info" v-if="['radio','checkbox'].indexOf(item.cate) > -1">新增选项</el-button>
                <el-button @click="move(vote.list,index,-1)" size="small" :plain="true" :disabled="index == 0">上移</el-button>
                <el-button @click="move(vote.list,index,1)" size="small" :plain="true" :disabled="index == vote.list.length -1">下移</el-button>
                <el-button @click="vote.list.splice(index,1)"size="small" type="danger">删除</el-button>
                <el-checkbox v-model="item.required">是否必选</el-checkbox>
              </el-col>
            </el-row>
          </li>
        </ol>
      </el-col>
    </el-row> 
    <!--list panel end-->

    <!--select question cate -->
    <el-row  v-if="dialogTableVisible">
      <el-col :span="12" :offset="6" style="text-align:center;">
        <el-button @click="addQuestion('radio')">单选题</el-button>
        <el-button @click="addQuestion('checkbox')">多选题</el-button>
        <el-button @click="addQuestion('text')">文本题</el-button>
      </el-col>
    </el-row>

    <!--add question-->
    <el-button type="info" size="large" @click="dialogTableVisible = true" id="add-quest">+ 添加问题</el-button>

    <!--tool bar-->
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
      <el-button type="primary" @click="publish">保存问卷</el-button>
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
        editing: null,
        vote: {
          title: '请输入问卷名称',
          list: []
        }
      }
    },
    methods: {
      save(item) {
        // item.editing = false;
        var target = item.title || item.option
        console.log( item[title])
        if (target <= 0) {
          item.title = "请至少输入一个字或者直接删去选项"
        }
        console.log(item)
        this.editing = null;
      },
      change(item){
        if(item.length < 0) {
          this.vote.title = '请至少输入一个字'
        }
      },
      publish() {
        console.log(this.vote)
      },
      edit(item) {
        this.editing = item;
        console.log(item)
      },
      addQuestion(cate) {
        let quest = {
          id: this.vote.list.length,
          title: '请输入问题',
          cate: cate,
          // result: [],
          editing: false,
          required: true
        }
        if (['radio','checkbox'].indexOf(cate) > -1) {
          // quest.options = ['选项一','选项二']
          quest.options = [
            {"id": 0, "option": "选项一"},
            {"id": 1, "option": "选项二"}
          ]
        }
        this.vote.list.push(quest)
        this.dialogTableVisible = false
      },
      addOption(item) {
        console.log(item)
        var data = {
          "id":  item.options.length + 1,
          "option": "请输入选项"
        }
        item.options.push(data)
        // item.options.push("请输入选项")
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
[v-cloak] { 
  display: none; 
}
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
.visable {
  display: inline-block;
}
#radio {
  width: 10px;
  height: 10px;
  border: 1px solid #000;
}
#add-quest {
  margin: 0 auto;
}
</style>