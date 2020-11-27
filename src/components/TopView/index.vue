<template>
  <div class="topView">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover" body-style="{ padding: '15px' }">
          <common-card></common-card>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" body-style="{ padding: '15px' }">ss</el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" body-style="{ padding: '15px' }">ss</el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" body-style="{ padding: '15px' }">ss</el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import CommonCard from './CommonCard'
export default {
  name: 'TopView',
  components: {
    CommonCard
  }
}
</script>
<style lang="scss" scoped>
  .topView{

  }
</style>
