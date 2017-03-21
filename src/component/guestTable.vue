<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="最后修改日期"
      width="180">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="嘉宾姓名"
      width="180">
      <template scope="scope">
        <span>{{ scope.row.name }}</span>
        <!--<el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>-->
      </template>
    </el-table-column>
    <el-table-column
      label="嘉宾简介">
      <template scope="scope">
        <p>{{scope.row.address}}</p>
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
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          hasImg: 1
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          hasImg: 0
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasImg: 1
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          hasImg: 0
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        this.$store.commit('increment')
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    filters: {
      formatHasImg: function (value){
        let statusArr = ['否','是']
        return statusArr[value]
      }
    }
  }
</script>