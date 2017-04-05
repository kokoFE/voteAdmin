<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        label="最后修改日期"
        width="180">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{ scope.row.createTime | getDate }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="嘉宾姓名"
        width="180">
        <template scope="scope">
          <span>{{ scope.row.name }}</span>
          <!--<el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.introduce }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>-->
        </template>
      </el-table-column>
      <el-table-column
        label="嘉宾简介">
        <template scope="scope">
          <p>{{scope.row.introduce}}</p>
        </template>
      </el-table-column>
      <el-table-column
        label="是否拥有头像">
        <template scope="scope">
          <p>{{scope.row.hasImg | formatHasImg}}</p>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
var axios = require('axios')

export default {
    data() {
      return {
        dialogVisible: false,
        tableData: []
      }
    },
    beforeMount: function (){
      let _this  = this
      axios.get('http://localhost:3000/api/test')
        .then(function(response){
          console.log(response.data)
          _this.$data.tableData = response.data
        })
    },
    methods: {
      handleEdit(index, row) {
        // console.log(this.$data.tableData)
        this.$store.commit('setGuestData',row) 
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.dialogVisible = true;
        console.log(index, row);
      }
    },
    filters: {
      formatHasImg: function (value){
        let statusArr = ['否','是']
        return statusArr[value]
      },
      getDate: function (value){
        return value.slice(0,10)
      }
    }
  }
</script>