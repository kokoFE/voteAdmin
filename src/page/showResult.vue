<template>
  <div>
    this is voteResult
    <div v-for="(item, index) in list" style="width:500px">
      <el-form label-position="top" label-width="80px" >
        <el-form-item :label="item.title">
          <!--<div >-->
            <el-input v-if="item.cate == 'text'"></el-input>
            <el-radio v-else-if="item.cate == 'radio'" class="radio" v-model="radio" v-for="option in item.options" :label="option"></el-radio>
            <el-checkbox-group v-else-if="item.cate == 'checkbox'" v-model="checkList">
              <el-checkbox v-for="option in item.options" :label="option"></el-checkbox>
            </el-checkbox-group>
          <!--</div>-->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio: 1,
        checkList: [],
        list: [
                {
                  "id": 1,
                  "cate": "checkbox",
                  "title": "This is checkbox",
                  "options": [
                    "opt1",
                    "opt2",
                    "opt3"
                  ]
                },{
                  "id": 2,
                  "cate": "radio",
                  "title": "This is radio",
                  "options": [
                    "东邪",
                    "西毒",
                    "南帝",
                    "北丐" 
                  ],
                  "required": true
                },{
                  "id": 3,
                  "cate": "text",
                  "title": "This is text",
                  "required": true
                },{
                  "id": 4,
                  "cate": "text",
                  "title": "This is text",
                  "required": true
                }
              ]
      }
    },
    computed: {
      reslut: function(){
        return new Array(this.list.length)
      }
    }

  }
</script>