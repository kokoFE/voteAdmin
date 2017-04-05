<template>
  <div>
    this is voteResult
    <div v-for="(item, index) in list" style="width:500px">
      <el-form label-position="top" label-width="80px" >
        <el-form-item :label="item.title">
            <el-input v-if="item.cate == 'text'" v-model="result[index].data"></el-input>
            <el-radio v-else-if="item.cate == 'radio'" class="radio" v-model="result[index].data" v-for="option in item.options" :label="option"></el-radio>
            <el-checkbox-group v-else-if="item.cate == 'checkbox'" v-model="result[index].data">
              <el-checkbox v-for="option in item.options" :label="option"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
                },{
                  "id": 5,
                  "cate": "checkbox",
                  "title": "哪个嘉宾",
                  "options": [
                      "东邪",
                      "西毒",
                      "南帝",
                      "北丐" 
                    ]
                }
              ],
        result: [
   
        ]
      }
    },
    mounted() {
      this.$nextTick(function (){
        let tmpResult = this.list.map((value, index) => {
          let data
          switch (value.cate) {
            case 'text':
              data = ''
              break
            case 'radio':
              data = ''
              break
            case 'checkbox':
              data = []
              break
          }
          return {
            "id": value.id,
            "data": data
          }
        })
        this.result = tmpResult
      })
    },
    methods: {
      onSubmit: function(){
        console.log(this.result)
      }
    }
  }
</script>