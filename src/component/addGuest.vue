<template>
  <el-form :inline="true" :model="form" class="form">
    <el-form-item label="嘉宾姓名">
      <el-input v-model="form.name" placeholder="嘉宾姓名"></el-input>
    </el-form-item>

    <el-form-item label="嘉宾简介">
      <el-input
        type="textarea"
        :rows="3"
        placeholder="请输入内容"
        v-model="form.introduce">
      </el-input>
    </el-form-item>
    
    <el-form-item label="上传嘉宾头像">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:3000/api/testagain"
          name="logo"
          :auto-upload="true"
          :show-file-list="true"
          :on-success="handleAvatarScucess"
          :before-upload="beforeAvatarUpload">
          <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </el-form-item>   

    </el-form-item><el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
var axios = require('axios')
export default {
    data() {
      return {
        // form: {
        //   guestName: '',
        //   textarea: '',
        //   imageUrl: ''
        // }
      }
    },
    computed: {
      form: function(){
        return this.$store.state.getGuestData
      }
    },
    methods: {
      handleAvatarScucess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 1;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        return isJPG && isLt2M;
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      onSubmit() {
        axios.post('http://localhost:3000/api/testagain', {
            name: this.form.name,
            introduce: this.form.introduce
          })
          .then(function(response){
            console.log(response.body)
            // this.$refs.upload.submit();
            this.$store.state.getGuestData = response
            console.log(this.$store.state.getGuestData)
          })
        this.$store.commit('increment')//AUEX
        console.log(this.form)
        console.log('submit!');
      }
    }
  }
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
</style>