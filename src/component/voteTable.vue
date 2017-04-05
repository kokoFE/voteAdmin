<template>
  <el-card class="box-card" style="height:400px">
    <el-table 
      :data="tableData">
      <el-table-column 
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column  
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column  
        prop="status"
        label="状态">
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
          <el-button
            size="small"
            type="info"
            @click="handleDelete(scope.$index, scope.row)">查看数据</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="addVote">+ 新建问卷</el-button>
  </el-card>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          "title": "投票1",
          "date": "2017年4月5日",
          "status": "0"
        },{
          "title": "投票2",
          "date": "2017年4月6日",
          "status": "1"
        }]
      }
    },
    // computed: {
    //   showPannel: this.$store.state.showAddVotePannel
    // },
    methods: {
      addVote: function(){
        console.log(!this.$store.state.showAddVotePannel)
        return !this.$store.state.showAddVotePannel
      }
    }
  }
</script>