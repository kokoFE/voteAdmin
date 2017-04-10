<template>
  <!--<el-card class="box-card" style="height:400px">
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
  </el-card>-->
  <div class="container">
    <vote-table v-if="showPannel"></vote-table>
    <add-vote v-else-if="!showPannel"></add-vote>
  </div>

</template>
<script>
  import voteTable from '../component/voteTable.vue'
  import addVote from '../component/addVote.vue'

  export default {
    components: {
      voteTable,
      addVote
    },
    data() {
      return {
        // showPannel: 0
      }
    },
    computed: {
      showPannel(){
        return this.$store.state.showAddVotePannel
      } 
    },
    methods: {
      testadd: function(){
        // this.showPannel = this.$store.state.showAddVotePannel
        console.log(this.$store.state.showAddVotePannel)
      }
    }
  }
</script>