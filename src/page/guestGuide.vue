<template>
  <div>
    <el-card class="box-card">
      <add-guest></add-guest>
    </el-card>
    <div class="table-position">
      <guest-table></guest-table>    
    </div>
  </div>
</template>
<script>
import addGuest from '../component/addGuest.vue'
import guestTable from '../component/guestTable.vue'
export default {
  components: {
    addGuest,
    guestTable
  }
}
</script>
<style>
.box-card {
  margin: 10px;
}
.table-position {
  margin: 10px;
}
</style>