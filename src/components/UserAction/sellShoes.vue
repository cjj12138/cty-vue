<template>
  <div>
    <el-form ref="form" :model="shoes" label-width="80px">
      <el-form-item label="商品标题">
        <el-input v-model="shoes.goodName"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input v-model="shoes.goodDes"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="shoes.goodPrice"></el-input>
      </el-form-item>
      <el-form-item>
        <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-change="addFileToList"
            :auto-upload="false"
            ref="my-upload">
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import {uploadShoes} from "@/api/user";

export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      shoes: {
        goodName: '',
        goodDes: '',
        goodPrice: ''
      },
      fileList: []
    };
  },
  methods: {
    addFileToList(file, fileList) {
      console.log(file)
      this.fileList.push(file.raw)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log(file)
      this.fileList.push(file)
    },
    onSubmit() {
      console.log(this.fileList)
      console.log('submit!');
      let param = new FormData();
      for (let i = 0; i < this.fileList.length; i++) {
        param.append('file', this.fileList[i])
      }
      param.append('goodName', this.shoes.goodName)
      param.append('goodDes', this.shoes.goodDes)
      param.append('goodPrice', this.shoes.goodPrice)
      param.append('userId', this.$store.getters.getUserId)
      uploadShoes(param).then(res => {
        if (res.data.code == 2000) {
          this.shoes.goodPrice = '';
          this.shoes.goodName = '';
          this.shoes.goodDes = '';
          this.fileList = []
          this.$refs['my-upload'].clearFiles()
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
